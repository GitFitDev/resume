import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDividerModule, MatCardModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';


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
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
