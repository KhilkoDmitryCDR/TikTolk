import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService:AuthService=inject(AuthService)
  router:Router=inject(Router)

  form: FormGroup<{username: FormControl, password:FormControl}>= new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  onSubmit(){
    console.log(this.form.value)
    if(this.form.value){

      //@ts-ignore
    this.authService.login(this.form.value).subscribe(res=>{
      this.router.navigate(['/'])
    })

    }

  }

}
