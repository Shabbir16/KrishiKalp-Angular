import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

   loc:any;
   dailyArray=[];
  dateArray = [];
  userLocation:string;
  colorPallet= [ '#E3BB88','#DB9864','#B0695A','#937E81'];

  changeState = new Subject();
  confirmLocation = new Subject();
  constructor(private http: HttpClient) { 
    this.dateArray.push('TODAY');
    this.dateArray.push('TOMORROW');
    let tomorrow = new Date();
    let j = tomorrow.getDay();
    
    this.dateArray.push(this.getDayString((j+2)%7));
    this.dateArray.push(this.getDayString((j+3)%7));

    // console.log(...this.dateArray);
  }

  getDayString(index):string{
    switch(index){
      case 0: return 'SUNDAY';
             
      case 1: return 'MONDAY';
            
      case 2: return 'TUESDAY';

      case 3: return 'WEDNESDAY';

      case 4: return 'THURSDAY';

      case 5: return 'FRIDAY';
 
      case 6: return 'SATURDAY';
   
    }
  }

  getWeather(lat,lng){

    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c54a7b019e573b487155eaddebcee58b/${lat},${lng}`)
    .map((res:Response) => res);
  }
}
