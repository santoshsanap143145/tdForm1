import { NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { countries } from './const/countries';
import { states } from './const/states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'tdForm';

  validators = {
    password:
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}$',
    onlyText: '^[a-zA-Z]*$',
    username: '^[a-zA-Z0-9_]+$',
    email: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
    pincode: '^[1-9][0-9]{5}$',
    phoneNo: '^[6-9][0-9]{9}$',
  };

  countries: Array<string> = countries
  states: Array<string> = states
  @ViewChild('signUpForm') signUpForm!: NgForm
  @ViewChild('password') password!: NgModel
  @ViewChild('password') confirmPassword!: NgModel

  isPassSame: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.passwordmatch()
  }

  passwordmatch(){
    this.password.valueChanges
    ?.subscribe(res => {
      if(this.password === this.confirmPassword){
        this.isPassSame = true
      }
    })!
  }

  onSubmit(){
    console.log(this.signUpForm.value);
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
    }
  }
}
