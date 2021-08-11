import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname=" ";
acno=" "
pswd=" ";

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  
  var uname=this.uname;
  var acno=this.acno;
  var pswd=this.pswd;
  let users=this.service.accountDetails;
  if(acno in users){
    alert("user exists")
  }
  else{
    users[acno]={
      acno,
      uname,
      pswd
      
    }
  }
  alert("registration sucessful")
    this.router.navigateByUrl("")
  }
}

