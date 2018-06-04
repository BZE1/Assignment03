/*##############################################################
  ############[          Imported Modules           ]########### 
  ############################################################## */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Widget_Services } from "../../../../services/widget.service.client";
import { Widget } from "../../../../models/widget.models.client";
import { NgForm } from "@angular/forms";

@Component({
  selector:       'app-widget-youtube',
  templateUrl:    './widget-youtube.component.html',
  styleUrls:     ['./widget-youtube.component.css']
})

/*##############################################################
  ############[                CLASS                ]########### 
  ############################################################## */

export class WidgetYoutubeComponent implements OnInit {

  @ViewChild('f') widgetForm: NgForm;

      uid:      string;
      wid:      string;
      pid:      string;
      wgid:     string;
      widget:   Widget;
      name:     string;
      text:     string;
      url:      string;
      width:    string;


  constructor(   private widgetService:   Widget_Services, 
                 private activatedRoute:  ActivatedRoute, 
                 private router:          Router) { }

  ngOnInit() 
      {
      	this.activatedRoute.params.subscribe(
          params=>
              {
            		this.uid = params['uid'];
            		this.wid = params['wid'];
            		this.pid = params['pid'];
            		this.wgid = params['wgid'];

          		  this.widget = this.widgetService.findWidgetById(this.wgid);
          	});
      }

  update() 
        {
      	  this.name    =  this.widgetForm.value.name;
        	this.text    =  this.widgetForm.value.text;
        	this.url     =  this.widgetForm.value.url;
        	this.width   =  this.widgetForm.value.width;

        	const updatedWidget: Widget = 
                {
              		_id:          this.wgid,
              		name:         this.name,
              		text:         this.text,
              		url:          this.url,
              		width:        this.width,
              		pageId:       this.pid,
              		widgetType:   this.widget.widgetType
              	}

        	this.widgetService.updateWidget(this.wgid, updatedWidget);

        	this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
        }


remove() 
      {
        this.widgetService.deleteWidget(this.wgid);
        
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
      }

}