import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GalleryService, Image } from '../gallery.service';
import { MessageService } from '../message.service';
import { EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images?: any
  countBtn?: number
  selectedImage?: Image
  countItemsForPage = 8
  public orderPage?: number
  constructor(private galleryService: GalleryService, public messageService: MessageService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

    this.getImages();

  }
  getImages(): void {
    this.galleryService.getImages().subscribe((data) => {
      this.route.params.subscribe(routeParams => {
        const orderPage = routeParams.page;
        this.orderPage = this.validateParams(orderPage)
        if (orderPage === 1) {
          this.images = data.slice(0, this.countItemsForPage)
        }
        else {
          this.images = data.slice(orderPage * this.countItemsForPage - this.countItemsForPage, this.countItemsForPage * orderPage)
        }
      })
      this.countBtn = Math.round(data.length / this.countItemsForPage)
      const countImages: Number = data.length


    })

  }
  validateParams(orderPage: any): any {
    let checkValue = parseInt(orderPage)
    if (isNaN(checkValue)) {
      this.router.navigate(['/errors'])
    }
    else {
      return orderPage
    }
  }




}


