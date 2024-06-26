import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../RouteComponents/main/main.component';
import { LoginComponent } from '../RouteComponents/login/login.component';
import { NgModule } from '@angular/core';
import { DisplaySchoolComponent } from '../RouteComponents/display-school/display-school.component';
import { DisplayHallComponent } from '../RouteComponents/display-hall/display-hall.component';
import { RatingFormComponent } from '../rating-form/rating-form.component';
import { AboutUsComponent } from '../header/about-us/about-us.component';


export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'main', component: MainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'school', component: DisplaySchoolComponent},
    {path: 'hall', component: DisplayHallComponent},
    {path: 'rating', component: RatingFormComponent},
    {path: 'aboutus', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}