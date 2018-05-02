import { Component, OnInit } from '@angular/core';
import { SocketService } from '../service/socket.service';
import { ParsejsonService } from '../service/parsejson.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {

  chatText='';
  userName='';
  messageArray:any = [
    {from:'',value:'',createdAt:''}
  ];
  fileArray:any = [
    {from:'',text:'',createdAt:''}
  ];

  constructor(private socketService: SocketService,private netser:ParsejsonService) { }

  onSend(){
    this.socketService.sendMessage({
      from:this.userName,
      text:this.chatText
    });
    this.chatText = '';
  }
  ngOnInit() {
    this.socketService.data.subscribe(
      (value: any)=>{
        this.messageArray.push(value);
      }
    );

    this.socketService.file.subscribe(
      (value:any)=>{
        this.fileArray.push(value);
      }
    )
  }

  onUpload(event){
    console.log(event.files[0].name);
    this.socketService.sendFileDown({
      from:this.userName,
      text:event.files[0].name
    });
  }

  downloadfile(val){
    window.open(val);
  }

  entertosend(event:any){
    if(event.keyCode == 13){
      this.onSend();
      console.log('H');
    }
    // console.log(event );
  }

}
