import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() formData: EventEmitter<{
    email: string;
    password: string;
  }> = new EventEmitter();

  formReg: FormGroup;

  constructor(
    private UserService:UserService,
    private router:Router,
    private fb: FormBuilder
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit(): void {
    this.formReg = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.formReg.get('email');
  }

  get password() {
    return this.formReg.get('password');
  }


  onSubmit(){
    this.UserService.register(this.formReg.value).then(
      response =>{
        console.log(response);
        this.router.navigate(['/login']);
      }
    )
    .catch(error => console.log(error))

  }

  onIngresar(){
    this.router.navigate(['/login']);
  }

}
