import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './RouteComponents/main/main.component';
import { LoginComponent } from './RouteComponents/login/login.component';
import { NgModule } from '@angular/core';
import { DisplaySchoolComponent } from './RouteComponents/display-school/display-school.component';


export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'main', component: MainComponent},
    {path: 'login', component: LoginComponent},
    {path: 'school', component: DisplaySchoolComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}