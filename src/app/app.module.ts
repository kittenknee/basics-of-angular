import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFor } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './HomePage/home/carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';


import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { AboutUsContentComponent } from './about-us-content/about-us-content.component';
import { AboutUsContactUsComponent } from './about-us-contact-us/about-us-contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AboutUsLocationComponent } from './about-us-location/about-us-location.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DataLiveComponent } from './data-live/data-live.component';
import { LoginChildComponent } from './login-child/login-child.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ChildServicesComponent } from './child-services/child-services.component';
import { RegisterTableComponent } from './register-table/register-table.component';
import { DatabasesComponent } from './databases/databases.component';
import { UserComponent } from './user/user.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { GalleryOneComponent } from './gallery-one/gallery-one.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsDetailsComponent } from './blogs-details/blogs-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    GalleryComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ServicesComponent,
    TeamComponent,
    OurPartnersComponent,
    AboutUsContentComponent,
    AboutUsContactUsComponent,
    AboutUsLocationComponent,
    LoginPageComponent,
    DashboardComponent,
    DataTableComponent,
    DataDisplayComponent,
    DataLiveComponent,
    LoginChildComponent,
    RegisterPageComponent,
    ChildServicesComponent,
    RegisterTableComponent,
    DatabasesComponent,
    UserComponent,
    GalleryOneComponent,
    BlogPageComponent,
    BlogsComponent,
    BlogsDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgbCarousel,
    NgFor,
    FormsModule,
    SlickCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
