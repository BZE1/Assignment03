
import { Injectable } from '@angular/core';
import {Widget} from '../models/widget.models.client'

// injecting Services into modules
@Injectable()



/*		########################################################
		#############[    Widget_Services   Class  ]############
		########################################################*/
export class Widget_Services {

	constructor(){}

	
	widgets : Widget [] = 
		[		
			  { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
			  { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
			  { _id: "345", widgetType: "IMAGE", pageId: "321", width: "80%", url: "http://lorempixel.com/400/200/"},
			  { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
			  { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
			  { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "80%", url: "https://youtu.be/AM2Ivdi9c4E" },
			  { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
		]



		createWidget(pageId: string, widget:Widget)
			{
				widget._id = Math.floor(Math.random() + 10000).toString();
				widget.pageId = pageId;
				this.widgets.push(widget);

				return widget;
			}

		findWidgetByPageId(pageId:string)
			{
					var result = [];

					for (var i = 0 ; i<this.widgets.length ; i++)
						{
							if (this.widgets[i].pageId === pageId)
								{
									result.push(this.widgets[i]);
								}
						}
			return result;
			}

		findWidgetById(widgetId: string)
			{
				for(var i = 0; i<this.widgets.length; i++)
					{
						if(this.widgets[i]._id === widgetId)
							{
								return this.widgets[i];
							}
					}
			}


		updateWidget(widgetId: string, widget:Widget)
				{
					const oldWidget = this.findWidgetById(widgetId);
					const index = this.widgets.indexOf(oldWidget);

					/* [_______Compile issue here___________] */
					this.widgets[index].size 	= widget.size;
					this.widgets[index].text 	= widget.text;
					this.widgets[index].width 	= widget.width;
					this.widgets[index].url 	= widget.url;
					
				}



		deleteWidget(widgetId:string){
				const oldWidget = this.findWidgetById(widgetId);
				const index = this.widgets.indexOf(oldWidget);

				this.widgets.splice(index,1);
			}


 } // END Widget_Services Function




