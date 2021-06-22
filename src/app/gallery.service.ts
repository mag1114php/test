import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ImagesComponent } from './images/images.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
export interface Image {
  id: number,
  author: string,
  width: string,
  height: string,
  url: string,
  download_url: string
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private galleryListUrl = "https://picsum.photos/v2/list?page=2&limit=100"
  constructor(private http: HttpClient, private messageService: MessageService) { }
  public getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.galleryListUrl).pipe(
      catchError(this.handleError<Image[]>('Данные не получены', "mainPage", []))
    )
  }
  public getImage(id: number): Observable<Image> {
    return this.http.get<Image>(`https://picsum.photos/id/${id}/info`).pipe(
      catchError(this.handleError<Image>('Данные не получены', "detailPage"))
    )
  }
  private handleError<T>(message: string, namePage: string, result?: T) {
    return (error: any): Observable<T> => {
      this.messageService.add(message, namePage)
      return of(result as T);
    };
  }

  public getOrderCurrentImages (allImages: Image[], numberPage: number):Image[] {
    if (numberPage === 1) {
      return allImages.slice(0, 8) 
    }
    else{
      return allImages.slice((numberPage*8)-8,numberPage*8)
    }
    return allImages
  }

}