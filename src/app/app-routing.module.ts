import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DatabasesComponent } from './databases/databases.component';
import { UserComponent } from './user/user.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },

  {path: 'home', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'blogs', component: BlogPageComponent },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},

  { path: 'dashboard', component: DashboardComponent, canActivate:[authGuardGuard] },
  { path: 'database', component: DatabasesComponent, canActivate:[authGuardGuard]},
  { path: 'user', component: UserComponent, canActivate:[authGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
