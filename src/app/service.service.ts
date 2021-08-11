import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  accountDetails:any={
    1000:{acno:1000,uname:"userone",balance:5000,pswd:"user1"},
    1001:{acno:1001,uname:"usertwo",balance:3000,pswd:"user2"},
    1002:{acno:1002,uname:"userthree",balance:3000,pswd:"user3"},
    1003:{acno:1003,uname:"userfour",balance:3000,pswd:"user4"}
    

    }
  constructor() { }
}
