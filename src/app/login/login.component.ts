import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

//import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  acno=" "
  pswd=" "
  
  constructor(private router:Router,private service:ServiceService) { }
  

  ngOnInit(): void {
  
  }


  login()
  

  {
    var acno=this.acno;
    var pswd=this.pswd;
    let users=this.service.accountDetails
    if(acno in users){
      //if(pswd=users[acno]["pswd"]){
        alert("login Sucessfull")
        this.router.navigateByUrl("home")
        }
        else{
          //alert("user doesnt exist,please register")
          this.router.navigateByUrl("register")
        }
      
      
    
     
  }
  register(){
    alert("To registration")
    this.router.navigateByUrl("register")
  }

}