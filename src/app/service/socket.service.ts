import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SocketService {
  socket;
  data = new Subject();
  file = new Subject();
  constructor() {
    //  this.socket = io('http://192.168.72.199:3001/chat');
    //  this.socket = io('http://localhost:3001/chat');
    
    this.socket = io('https://cors-anywhere.herokuapp.com/https://frozen-badlands-33482.herokuapp.com/chat');

    this.socket.on('connect',()=>{
      console.log('Succefully connected');
    });

    this.socket.on('newMessage',(value)=>{
      console.log('New Message have been received',value);
      this.data.next(value);
    });

    this.socket.on('downloadFile',(value)=>{
      console.log(value);
      this.file.next(value);
    });

   }

   sendMessage(data){
     this.socket.emit('createMessage',data);
   }

   sendFileDown(data){
    this.socket.emit('fileUpload',data);
   }

}
