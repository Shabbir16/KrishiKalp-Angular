import { Component, OnInit } from '@angular/core';

import { ok } from 'assert';
import { CommonService } from '../../service/common.service';
declare var google: any

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
 
})
export class WeatherComponent implements OnInit {

  userLocation = 'No Location Selected';
  dailyArray :any[];  
  constructor(private service: CommonService) { }

  ngOnInit() {
    
  }

  changeState(){
    this.service.changeState.next(true);
  }

  getLocation(){
    // console.log('Location Works');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.showPosition(position);
        // console.log('Location Works',position);
        let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.printAddress(location);
        
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  printAddress(location){
    console.log('Address',location);
    var geocode = new google.maps.Geocoder();
    geocode.geocode({
      'latLng':location
    },(results,status)=>{
      if (status == google.maps.GeocoderStatus.OK) {
  
            this.userLocation = results[0].address_components[0].long_name+" "+results[0].address_components[1].long_name
            this.getWeatherDetils(location.lat(),location.lng());
           

    }
    })
  }

  getWeatherDetils(lat,lng){
    this.service.getWeather(lat,lng).subscribe(
      (body:any)=>{
        console.log(body);
        this.dailyArray = body.daily.data;
        console.log(this.dailyArray);
      }
    );
  }

}
