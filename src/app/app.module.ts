import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG dependency
import {ListboxModule} from 'primeng/listbox';

//Angular Component Import
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule, MatCheckboxModule, MatIconModule,MatNativeDateModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { KrishiKalpComponent } from './krishi-kalp/krishi-kalp.component';
import { WeatherComponent } from './krishi-kalp/weather/weather.component';
import { WeathercardComponent } from './krishi-kalp/weather/weathercard/weathercard.component';
import { CommonService } from './service/common.service';


@NgModule({
  declarations: [
    AppComponent,
    KrishiKalpComponent,
    WeatherComponent,
    WeathercardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ListboxModule,
    MatInputModule,
    MatSelectModule,HttpClientModule,
    MatTabsModule,MatIconModule,MatCardModule,
    MatDatepickerModule,MatButtonModule, MatCheckboxModule, MatNativeDateModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
