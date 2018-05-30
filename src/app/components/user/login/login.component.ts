/**
############################################
______________[   TODO :   ]________________

 [_] Var LoginForm 
  		-not working
    	-what needs to be don to fix
    	 this issue
    - Second todo item

[_] userService
		var nopt working 
		what going on with this one

[_] View Child
		there is no #F used in the code
		and ng in the HTML CODE


#############################################
 */




/*##############################################################
  ############[          Imported Modules           ]########### 
  ############################################################## */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserServices } from '../../../services/user.service.client'
import { User } from '../../../models/user.models.client'
import { Router } from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/*##############################################################
  ############[                CLASS                ]########### 
  ############################################################## */
export class LoginComponent implements OnInit {

		username:	string
		password: 	string
		errorFlag: 	boolean

	  constructor(  private userServices: 	UserServices,
	  		 		private router:			Router ) { }

	  ngOnInit() {}



	  Login()
		  {
		  	this.username = this.loginForm.value.username;
		  	this.password = this.loginForm.value.password;

		  	const user : User = this.userServices.findUserByCredentials(this.username,this.password);

		  	if(user)
			  	{
			  		this.errorFlag = false;
			  		this.router.navigate(['user', user._id]);
			  	}
			 else
				 {
				 	this.errorFlag = true;
				 }
		  }




}  /* [ END OF CLASS ]*/
