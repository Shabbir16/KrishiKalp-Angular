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
        transform: 'scale(1.0)'
      })),
      state('active',   style({
        backgroundColor:'#E3BB88',
        height: '220px',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out')),
     

    ]),
    trigger('secondState', [
      state('show', style({
        transform: 'translateY(0)'
      })),
      state('hide', style({
        transform: 'translateY(0)'
      })),
      transition('* => show',  [
        style({transform: 'translateY(-100%)'}),
        animate('300ms 1s ease-in')
      ]),
      transition('show => hide',  [
        style({transform: 'translateY(+100%)'}),
        animate('300ms  ease-in')
      ]),
    ])

  ]
})
export class WeathercardComponent implements OnInit {

  @Input('val') myValue: any;
  url:string = '../../../../assets/icons/climacons-master/SVG/';
  summary: string ;
  windSpeed: string;
  humidity: string;
  icon: string;
  temperature:string;
  secondstate:string = 'hide';
  constructor(private service: CommonService) { }

  ngOnInit() {
    // console.log(this.myValue);
    console.log();
    this.summary = this.myValue.summary;
    this.windSpeed = this.myValue.windSpeed;
    this.humidity = this.myValue.humidity;
    this.icon  = this.myValue.icon;
    this.url+=this.icon+'.svg';
    this.temperature =  this.myValue.temperatureHigh
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

      