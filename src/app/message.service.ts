import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messagesMainPage: string[] = [];
  public messagesDetailPage:string[]=[];

  add(message: string,namePage:string) {
    switch(namePage){
      case "mainPage":
        this.messagesMainPage.push(message);
        break;
      case "detailPage":
        this.messagesDetailPage.push(message)
        break;
    }
   
  }
  
  constructor() { }
}
