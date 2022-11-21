
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './auth/component/admin/admin.component';

import { LOGINComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { UserComponent } from './auth/component/user/user.component';
import { UsersAllComponent } from './auth/component/users/users-all/users-all.component';
import { UsersComponent } from './auth/component/users/users.component';
import { HasRoleGuard } from './auth/guard/has-role.guard';
import { LoginGuard } from './auth/guard/login.guard';
import { AccomodationDetailsComponent } from './component/accomodation-details/accomodation-details.component';
import { AccomodationAddComponent } from './component/accomodation/accomodation-add/accomodation-add.component';
import { AccomodationAllComponent } from './component/accomodation/accomodation-all/accomodation-all.component';
import { AccomodationComponent } from './component/accomodation/accomodation.component';
import { BookingAllComponent } from './component/booking/booking-all/booking-all.component';
import { BookingUserComponent } from './component/booking/booking-user/booking-user.component';
import { BookingComponent } from './component/booking/booking.component';
import { StartComponent } from './component/start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'accomodation', component: AccomodationComponent},
  {
    path: 'listing-add',
    component: AccomodationAddComponent,
    canActivate: [LoginGuard, HasRoleGuard],
    data: { type: 'admin'}
  },
  {
    path:'listing-all',
    component: AccomodationAllComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [LoginGuard, HasRoleGuard],
    data: { type: 'admin' },
  },

  {
    path: 'booking-user',
    component: BookingUserComponent,
    canActivate: [LoginGuard, HasRoleGuard],
    data: { type: 'customer' },
  },

  {
    path: 'booking-all',
    component: BookingAllComponent,
    canActivate: [LoginGuard, HasRoleGuard],
    data: { type: 'admin' },
  },
  { path: 'listingdetails/:id', component : AccomodationDetailsComponent},
  { path: 'login', component: LOGINComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginGuard, HasRoleGuard],
    data: { type: 'admin' }
  },
  { path: 'user', 
    component: UserComponent,
    canActivate: [LoginGuard, HasRoleGuard],
    data: { type: 'customer'},
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [LoginGuard, HasRoleGuard],
    data: { type: 'customer'},
  },
  {
    path: 'users-all',
    component: UsersAllComponent,
    canActivate: [LoginGuard, HasRoleGuard],
    data: { type: 'admin' },
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
