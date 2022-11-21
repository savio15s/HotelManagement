import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { StartComponent } from './component/start/start.component';
import { NavbarComponent } from './auth/component/navbar/navbar.component';
import { FooterComponent } from './auth/component/footer/footer.component';
import { AccomodationComponent } from './component/accomodation/accomodation.component';
import { AdminComponent } from './auth/component/admin/admin.component';
import { LOGINComponent } from './auth/component/login/login.component';
import { UserComponent } from './auth/component/user/user.component';
import { UsersComponent } from './auth/component/users/users.component';
import { UsersAllComponent } from './auth/component/users/users-all/users-all.component';
import { NavAdminComponent } from './auth/component/nav-admin/nav-admin.component';
import { NavUserComponent } from './auth/component/nav-user/nav-user.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { AccountService } from './services/account.service';
import { RouterModule, Routes } from '@angular/router';
import { UserFilterPipe } from './user-filter.pipe';
import { BookingFilterPipe } from './booking-filter.pipe';
import { ListingFilterPipe } from './listing-filter.pipe';
import { AccomodationAddComponent } from './component/accomodation/accomodation-add/accomodation-add.component';
import { AccomodationAllComponent } from './component/accomodation/accomodation-all/accomodation-all.component';
import { AccomodationDetailsComponent } from './component/accomodation-details/accomodation-details.component';
import { LoginGuard } from './auth/guard/login.guard';
import { BookingComponent } from './component/booking/booking.component';
import { BookingAllComponent } from './component/booking/booking-all/booking-all.component';
import { BookingUserComponent } from './component/booking/booking-user/booking-user.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FooterComponent,
    AccomodationComponent,
    AdminComponent,
    LOGINComponent,
    UserComponent,
    UsersComponent,
    UsersAllComponent,
    NavAdminComponent,
    NavUserComponent,
    RegisterComponent,
    NavbarComponent,
    UserFilterPipe,
    BookingFilterPipe,
    ListingFilterPipe,
    AccomodationAddComponent,
    AccomodationAllComponent,
    AccomodationDetailsComponent,
    BookingComponent,
    BookingAllComponent,
    BookingUserComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AccountService,
    LoginGuard
  ],
  exports: [LOGINComponent,RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
