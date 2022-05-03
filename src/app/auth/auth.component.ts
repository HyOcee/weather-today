import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyHttpService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  public loginState: any

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    rememberme: new FormControl()
  });

  // function to fill the form with the following values
  loadDefault(){
    // patchValue can be used to set only some of the values
    this.loginForm.setValue({
      username: 'Itachi',
      password: 'Itachi',
      rememberme: true
    })
  }

  // function to submit the form and get response
  // then reset the form
  submitForm(e: Event){
    e.preventDefault()
    this._MyHttpService.login(this.loginForm.value).subscribe(
      (response) => {
        if(response === 1){
          this.loginState = true
          console.log(response)
          // this.router.navigateByUrl('/dashboard')
        }
      },
      (error) => {console.log(error);})

    this.loginForm.setValue({
      username: '',
      password: '',
      rememberme: false
    })

  }

  constructor(public _MyHttpService: MyHttpService, private router: Router) { }

  ngOnInit(): void { 
    
  }

}
