import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
  private commonService: CommonService) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        userName: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
      }
    );
  }

  onSubmit() {

    if(this.loginForm.valid) {
      this.commonService.userInfoSubject.next(this.loginForm.get('userName').value);
      this.router.navigate(['details']);
    }
  }

  hasError(controlName) {
    if(this.loginForm.controls[controlName].errors) {
      return this.loginForm.controls[controlName].errors.required;
    }
    
  }

}
