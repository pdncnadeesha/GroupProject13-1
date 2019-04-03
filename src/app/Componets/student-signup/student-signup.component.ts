import { Component, OnInit } from '@angular/core';
import { StudentsignupService } from '../../services/studentsignup.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  constructor(private StudentsignupService: StudentsignupService ) { }

  ngOnInit() {
  }

}
