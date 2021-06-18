import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Login:FormGroup;
  user: any;

  constructor(
    private formBuilder:FormBuilder,
   
    private router: Router
  ) { 
    this.Login = formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: ['', [Validators.required], ]
      }
    )
  }
  hide = true;
  ngOnInit(): void {
   
  }
  onSubmit(){
    if(this.Login.valid){
      console.log(this.Login.value);
      let Response = [] as any
      let Obj = {
        email:this.Login.value.email, 
        password:this.Login.value.password
      }
      this.router.navigate(['/home']);
      console.log(Obj);

      this.user.loginService(Obj).subscribe((resp)=>{
        console.log(resp)
        Response = resp
        console.log(Response.token)
        localStorage.setItem('Token',Response.token);
      }, (error) => {
        console.log(error);
      
      })
    }
  }

}
