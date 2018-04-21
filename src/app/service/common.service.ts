import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

 
  

  changeState = new Subject();
  constructor(private http: HttpClient) { }

  getWeather(lat,lng){

    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c54a7b019e573b487155eaddebcee58b/${lat},${lng}`)
    .map((res:Response) => res);
  }
}
