import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculateComponent } from './calculate/calculate.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { ImagesComponent } from './images/images.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { PokemanComponent } from './pokeman/pokeman.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { DummyDisplayComponent } from './dummy-display/dummy-display.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'calculate',component:CalculateComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'event-registration',component:EventRegistrationComponent},
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'amazon',component:AmazonComponent},
    {path:'mail',component:MailComponent},
    {path:'images',component:ImagesComponent},
    {path:'weather',component:WeatherComponent},
    {path:'Blog',component:BlogComponent},
    {path:'imdb',component:ImdbComponent},
    {path:'pokeman',component:PokemanComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-accounts',component:CreateAccountsComponent},
    {path:'student-card',component:StudentCardComponent},
    {path:'create-student-card',component:CreateStudentCardComponent},
    {path:'user-profiles',component:UserProfilesComponent},
    {path:'dummy-display',component:DummyDisplayComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'student-details',component:StudentDetailsComponent}
    
  ]
  },
  {path:'',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
