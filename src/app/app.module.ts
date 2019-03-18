import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Componets/students/students.component';
import { DashbordComponent } from './Componets/dashbord/dashbord.component';
import { SignupComponent } from './Componets/signup/signup.component';
import { AdminComponent } from './Componets/admin/admin.component';
import { CoachComponent } from './Componets/coach/coach.component';
import { PoolmanagerComponent } from './Componets/poolmanager/poolmanager.component';
import { StudentSignupComponent } from './Componets/student-signup/student-signup.component';
import { SignupUsersTypeComponent } from './Componets/signup-users-type/signup-users-type.component';
import { SigninComponent } from './Componets/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DashbordComponent,
    SignupComponent,
    AdminComponent,
    CoachComponent,
    PoolmanagerComponent,
    StudentSignupComponent,
    SignupUsersTypeComponent,
    SigninComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
