import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserService } from './user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { TagInputModule } from 'ngx-chips';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegistrationComponent,
    ProfileListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    SweetAlert2Module,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
