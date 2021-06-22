import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../gallery.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GalleryService } from '../gallery.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image: Image | undefined;
  errors:any

  constructor(  private route: ActivatedRoute,
    private galleryService: GalleryService,
    private location: Location ,public messageService:MessageService) { 
    
  }

  ngOnInit():void  {
    this.getImage()
  }
  getImage(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.galleryService.getImage(id)
      .subscribe(image=> this.image=image);
  }
  goBack():void{
    this.location.back();
  }

}
