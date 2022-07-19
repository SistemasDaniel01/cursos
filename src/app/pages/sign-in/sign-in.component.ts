import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Output() formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();

  formLogin: FormGroup

  constructor(
    private UserService:UserService,
    private router:Router,
    private fb: FormBuilder
  ) {

    this.formLogin = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })

   }



  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
   this.UserService.login(this.formLogin.value)
   .then(response=>{
    console.log(response);
    this.router.navigate(['/home'])

   })
   .catch(error => console.log(error))
  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }


  onClick(){
    this.UserService.loginWtihGoogle()
    .then( response => {
      this.router.navigate(['/home'])
    })
    .catch(error => console.log(error))
  }

  onRegister(){
    this.router.navigate(['/signup'])
  }

}
