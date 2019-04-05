import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupUsersTypeComponent } from './Componets/signup-users-type/signup-users-type.component';
import { DashbordComponent } from './Componets/dashbord/dashbord.component';
import { SigninComponent } from './Componets/signin/signin.component';


const routes: Routes = [
{
  path: '',
  redirectTo: 'dashboard', 
  pathMatch:'full'
},

{
  path: 'register',
  component: SignupUsersTypeComponent
},

{
  path: 'signin',
  component: SigninComponent
},



{
  path:'dashboard',
  component: DashbordComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 
  
}
