import { Component, Input, OnInit, Output } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { ImagesComponent } from '../images/images.component';
import { Image } from '../gallery.service';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(public imagesComponent:ImagesComponent,private galleryService:GalleryService,private route:ActivatedRoute,private location:Location) {
   
   }
  
  ngOnInit(): void {
  
  }
  goBackPage():number{
    let orderPage= Number(this.imagesComponent.orderPage)
    if(orderPage<=1){
      return 1
    }
  
    return orderPage-1
  }
  goUpPage():number{
    let orderPage= Number(this.imagesComponent.orderPage)
    if(orderPage>=Number(this.imagesComponent.countBtn)){
      return orderPage
    }
    return orderPage+1
    
  }
 

  

  
}
