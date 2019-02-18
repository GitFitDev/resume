import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatDividerModule, MatCardModule, MatProgressBarModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { ProfileNameComponent } from './profile-name/profile-name.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
