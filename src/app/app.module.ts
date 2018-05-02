import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG dependency
import {ListboxModule} from 'primeng/listbox';
import {FileUploadModule} from 'primeng/fileupload';

//Angular Component Import
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule, MatCheckboxModule, MatIconModule,MatNativeDateModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


import { AppComponent } from './app.component';
import { KrishiKalpComponent } from './krishi-kalp/krishi-kalp.component';
import { WeatherComponent } from './krishi-kalp/weather/weather.component';
import { WeathercardComponent } from './krishi-kalp/weather/weathercard/weathercard.component';
import { CommonService } from './service/common.service';
import { AppRoutingModule } from './/app-routing.module';
import { LocationGetComponent } from './krishi-kalp/weather/location-get/location-get.component';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './krishi-kalp/userprofile/userprofile.component';
import { SocketComponent } from './socket/socket.component';
import {ParsejsonService} from './service/parsejson.service';
import { SocketService } from './service/socket.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    KrishiKalpComponent,
    WeatherComponent,
    WeathercardComponent,
    LocationGetComponent,
    UserprofileComponent,
    SocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ListboxModule,
    MatInputModule,RouterModule,
    MatSelectModule,HttpClientModule,
    MatTabsModule,MatIconModule,MatCardModule,
    MatDatepickerModule,MatButtonModule, 
    MatCheckboxModule, MatNativeDateModule, 
    MatChipsModule,
    AppRoutingModule,FileUploadModule,HttpModule
  ],
  providers: [CommonService,ParsejsonService,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
