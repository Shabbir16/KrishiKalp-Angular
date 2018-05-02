import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
declare var google: any

@Component({
  selector: 'app-location-get',
  templateUrl: './location-get.component.html',
  styleUrls: ['./location-get.component.css']
})
export class LocationGetComponent implements OnInit {

  dailyArray :any[];  
   location;
  userLocation = 'No Location is Selected';
  constructor(private service:CommonService) { }

  ngOnInit() {
    this.service.changeState.subscribe(
      (latLang:any)=>{
        this.location = latLang;
        
      }
    )
  }
  getLocation(){
    this.printAddress();
  }

  printAddress(){
    
    var geocode = new google.maps.Geocoder();
    geocode.geocode({
      'latLng':this.service.loc
    },(results,status)=>{
      // console.log('Address',results);
      if (status == google.maps.GeocoderStatus.OK) {
  
            this.userLocation = results[0].address_components[0].long_name+" "+results[0].address_components[1].long_name
           this.getWeatherDetils(this.service.loc.lat(),this.service.loc.lng());
           

    }
    })
  }

   
  getWeatherDetils(lat,lng){
    this.service.getWeather(lat,lng).subscribe(
      (body:any)=>{
        console.log(body);
        this.dailyArray = body.daily.data;
        this.dailyArray = this.dailyArray.splice(4,4);
        console.log(this.dailyArray);
        this.service.dailyArray = this.dailyArray;
        this.service.userLocation = this.userLocation;
        this.service.confirmLocation.next(true);
      }
    );
  }
 
 

}
