import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { ImagesComponent } from './images/images.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { PokemanComponent } from './pokeman/pokeman.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { ReateVehicleComponent } from './reate-vehicle/reate-vehicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    CalculateComponent,
    DatabindingComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    AddEmployeeComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    AccountsComponent,
    AmazonComponent,
    MailComponent,
    ImagesComponent,
    WeatherComponent,
    BlogComponent,
    ImdbComponent,
    PokemanComponent,
    CreateVehicleComponent,
    ReateVehicleComponent,
    CreateAccountsComponent,
    StudentCardComponent,
    CreateStudentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
