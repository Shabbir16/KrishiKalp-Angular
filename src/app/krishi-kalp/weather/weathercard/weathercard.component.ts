import { Component, OnInit,Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css'],
  animations: [
    trigger('changeState', [
      state('inactive', style({
      
      })),
      state('active',   style({
        height: '220px',
     
      })),
      transition('inactive => active', animate('300ms  ease-in')),
      transition('active => inactive', animate('300ms   ease-out')),
     

    ]),
    trigger('secondState', [
      state('show', style({
        transform: 'translateY(0)'
      })),
      state('hide', style({
        transform: 'translateX(-100%)'
      })),
      transition('hide => show',  [
        style({transform: 'translateY(-100%)'}),
        animate('300ms ease-in')
      ]),
      transition('show => hide',  [
        style({transform: 'translateY(+100%)'}),
        animate('300ms  ease-in')
      ])
    ])

  ]
})
export class WeathercardComponent implements OnInit {

  @Input('val') myValue: any;
  @Input('index') index;
 
  url:string = '../../../../assets/icons/climacons-master/SVG/';
  summary: string ;
  windSpeed: string;
  humidity: string;
  icon: string;
  temperaturehigh:string;
  temperaturelow:string;
  secondstate:string = 'hide';
  color1='#f4f4f4';
  dayofweek;
  constructor(private service: CommonService) { }

  ngOnInit() {
    // console.log(this.myValue);
    console.log();
    this.summary = this.myValue.summary;
    this.windSpeed = this.myValue.windSpeed;
    this.humidity = this.myValue.humidity;
    this.icon  = this.myValue.icon;
    this.url+=this.icon+'.svg';
    this.temperaturehigh =  this.myValue.temperatureHigh
    this.temperaturelow =  this.myValue.temperatureLow
    this.color1 = this.service.colorPallet[this.index];
    this.dayofweek = this.service.dateArray[this.index];

  }
  state  = 'inactive';
  changeState(){

      if(this.state == 'active'){
        this.state = 'inactive'
        this.secondstate = 'hide';
  
      }else  {
        this.state = 'active';
        this.secondstate = 'show';
  
      }
  
    
    
  }
}

      