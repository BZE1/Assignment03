
/*##############################################################
  ############[          Imported Modules           ]########### 
  ############################################################## */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pages } from '../../../models/pages.models.client'
import { PageServices } from '../../../services/page.service.client'
import { NgForm } from "@angular/forms"



@Component
	({
	  selector: 	'app-page-edit',
	  templateUrl: 	'./page-edit.component.html',
	  styleUrls:   ['./page-edit.component.css']
	})


/*##############################################################
  ############[              CLASS                  ]########### 
  ############################################################## */
export class PageEditComponent implements OnInit {


	  @ViewChild('f') pageForm: NgForm;


	 /*[ Varables ]___________________*/
	  uid: 			string;
	  wid: 			string;
	  pid: 			string;
	  name: 		string;
	  description:  string;
	  page: 		Pages;
	 /*________________________________*/




  constructor(	private pageService: 	PageServices, 
  				private activatedRoute: ActivatedRoute, 
  				private router: 		Router) { }



  ngOnInit() 
	  {
	  	  this.activatedRoute.params.subscribe(
	  		params =>
		  		{
			  		this.uid = params['uid'];
			  		this.wid = params['wid'];
			  		this.pid = params['pid'];

			  		this.page = this.pageService.findPageById(this.pid);
			  		this.name = this.page.name;
			  		this.description = this.page.description;
		  		});
	  }


  update() 
	  {
	  	this.name = this.pageForm.value.name;
	  	this.description = this.pageForm.value.description;

	  	const updatedPage: Pages =
		  	{
		  		_id: 			this.pid,
		  		name: 			this.name,
		  		description: 	this.description,
		  		websiteId: 		this.wid
		  	}

	  	this.pageService.updatePage(this.pid, updatedPage);
	  	this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
	  }



  remove() 
	  {
	  	this.pageService.deletePage(this.pid);
	  	this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
	  }


}  /* [ END OF CLASS ] */