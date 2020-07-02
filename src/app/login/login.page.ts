import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // constructor(public signupForm: FormGroup) { }

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public signupForm: FormGroup){}

  ngOnInit() {
  }

}

this.signupForm = formBuilder.group({
  email: ['', Validators.compose([Validators.required])],
  password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
  retype: ['', Validators.compose([Validators.minLength(6), Validators.required])],
  firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
  lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
});