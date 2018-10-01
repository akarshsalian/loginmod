Ext.define('picm.concepts.view.intake.IntakeForm', {
    extend 		: 'Ext.form.Panel',
    xtype  		: 'concepts-intake',
    requires	: [
    				'picm.concepts.view.intake.IntakeController',
    				/*'picm.concepts.components.AapHtmlEditor',*/
    				'picm.concepts.store.ConceptCategory',
    				'picm.concepts.store.BusinessConceptGridStore',
    				'widget.label'
    ],
    initComponent : function() {
    	var me = this;
    	me.callParent(arguments);
    },
    controller  : 'IntakeController',
    height 		: '100%',
    width 		: '100%',
    margin		: '0px 0px 0px 15px',
    overflowY 	: 'auto',
    executionConceptForm : undefined,
    listeners : {
       	/*'afterrender' :'loadAllStartUpTasks'*/
    	beforedestroy : 'hideFloatingComponents'
    },
    layout 		: {
    				type	: 'fit'
    				
    }, 
    items 		: [
			    	{
			        xtype 	: 'form',
			        overflowY: 'auto',
			        layout 	: 'fit',
				    items	: [
				               {
				                xtype      : 'form',
				                name       : 'intakeFirstContainer',
				                minHeight  :  600,
				                height     :  Ext.getBody().getViewSize().height-10,
				                reference  : 'intakeFirstContainer',
				                margin	   : '0px 20px 0px 0px',
				                overflowY  : 'auto',
				                layout     : {
				                              type: 'vbox'
				                             
				                },
				                items      : [
							                	{
							        				xtype       : 'label',
							        				name        : 'requirelabel',
							        				htmlMode	: true,
							        				height	    : 15,
							        				width       : '100%',
							        				margin	    : '5px 5px 0px 10px',
							        				cls         : 'sublabelCls',
							        			    html   		: '<span style = "color:red">*</span><span class = "sublabelCls">Required Info</span>',
							        			},				                				
				                			   {
			            						xype 	: 'fieldcontainer',
			            						height  : 40,
			            						width	: '100%',
			            						cls 	: 'descriptionCls',
			            						margin	: '2px 10px 0px 0px',
			            						layout  : 'hbox',
			            						items   : [{
			            									xtype 	: 'label',
			            									text  	: 'Create Business Concept',
			            									margin	: '5px 0px 0px 10px',
			            									height 	: 35,
			            									width 	: '50%',
			            									cls 	: 'headerConceptCls'
			            								  }, 
			            								  {
			            									xype 	: 'fieldcontainer',
			  			            						height  : 35,
			  			            					 	width	: '50%',
			  			            					    margin	: '0px 0px 0px 0px',
			  			            						layout  : {
			  			            							type : 'hbox',
			  			            							pack : 'end'
			  			            						},
			  			            						items   : [/*{
			  			            									xtype       : 'button',
					  			      							        text   		: 'Save & Create',
					  			      							        disabled 	:  false,
					  			      							        reference 	: 'saveConceptButton',
					  			      							        handler		: 'saveConceptButton',
					  			      							        tabIndex    :  7,
					  			      							      
					  			      							       },*/
					  			      		                		   {
					  			      		                			xtype       : 'button',   
					  			      							        text	   	: 'Cancel',
					  			      							        reference 	: 'cancelConceptButton',
					  			      							        handler		: 'onCancelConceptButton',
					  			      							        cls		 	: 'linkSecondayButtonCls',
					  			      							        pressedCls 	: 'linkSecondayButtonCls',
					  			      							        tabIndex    :  8,
					  			      							       
					  			      							      }
					  			      							     ]
			            								  }]
			            					},
			            					{
			            						xype 	: 'fieldcontainer',
			            						height  :  40,
			            						width	: '100%',
			            						cls 	: 'descriptionCls',
			            						margin	: '10px 10px 0px 0px',
			            						layout  : 'hbox',
			            						items   : [
			            									
			            									{
			            										xtype 	: 'label',
					            								margin	: '15px 0px 0px 10px',
					            								htmlMode	: true,
					            								height 	: 25,
					            								width 	: '50%',
					            							    html    : '<span style = "color:red">*</span><span class = "labelCls">Description</span>',
					            							
					            							 }
			            										
			            									
			            						]
			            					},				            					
			            					{
			            						xtype 	   : 'panel',
			            						width      : '100%',
                                         		height     :  80,
                                         		layout     : 'hbox',
                                         		margin	   : '0px 10px 0px 0px',
                                         		items      : [
                                         						{
			                                                 		xtype      : 'textareafield',
			                                                 		name       : 'description',
			                                                 		anchor     : '100%',
			                                                 		grow	   : true,
			                                                 		height     : 70,
			                                                 		width      : '100%',
			                                                 		margin	   : '8px 10px 0px 10px',
			                                                 		reference  : 'conceptDescription',
			                                                 		tabIndex   :  1,
			                                                 		allowBlank :  false
			                                                 		
                                         						}	
                                         		]
			            						
			            					},
        								    {
			            						xype 	: 'fieldcontainer',
			            						height  :  40,
			            						width	: '100%',
			            						cls 	: 'descriptionCls',
			            						margin	: '0px 10px 0px 0px',
			            						layout  : 'hbox',
			            						items   : [
			            									
			            									{
			            										xtype 	: 'label',
					            								text  	: 'Details',
					            								margin	: '10px 0px 0px 10px',
					            								height 	:  30,
					            								width 	: '50%',
					            								cls 	: 'labelCls'
					            							 }
			            										
			            									
			            						]
			            					},
			            					{
			            						xtype 	: 'panel',
			            						height  :  100,
			            						width	: '100%',
			            						margin	: '0px 10px 0px 0px',
			            						layout 	: {
			            									type  : 'hbox',
			            									align : 'stretch'
			            						},
			            						items   : [
			            									{
			            										xtype 	: 'panel',
			            										width   : '50%',
			            										layout  : {
			            											type : 'vbox'
			            										},
			            										items   : [
			            													{
			            														xtype      : 'textfield',
						                                                        name       : 'ideaId',
						                                                        fieldLabel : 'Idea ID',
						                                                        reference  : 'ideaId',
						                                                        allowBlank : true,
						                                                        labelWidth	:  150,
						                                                        width 		: '75%',
						                                                        labelAlign : 'right',
						                                                        margin     : '10px 0px 0px 0px',
						                                                        tabIndex   :  2
						                                                        
			            													},
			            													{
			            														xtype      	: 'textfield',
			                                                                    name       	: 'conceptName',
			                                                                    fieldLabel 	: 'Concept Name',
			                                                                    width 		: '75%',
			                                                                    labelWidth	:  150,
			                                                                    allowBlank 	: false,
			                                                                    name       	: 'conceptName',
			                                                                    reference 	: 'conceptName',
			                                                                    labelAlign 	: 'right',
			                                                                    margin      : '10px 0px 0px 0px',
			                                                                    tabIndex    : 3,
			                                                                    listeners  : {
			             														   'beforerender' : 'makeFieldMandatory'
			                                                                    },
			            													}
			            										]
			            									},
			            									{
			            										xtype 	: 'panel',
			            										width   : '50%',
			            										layout  : {
			            											type : 'vbox',
			            											
			            										},
			            										items : [
			            													{
			            														xtype      		: 'combo',
				                                                				emptyText   	: 'Select',
				                                                                name       		: 'conceptCategoryID',
				                                                                fieldLabel 		: 'Concept Category',
				                                                                labelAlign	 	: 'right',
				                                                                width 			: '75%',
			                                                                    labelWidth		:  150,
				                                                                queryMode  		: 'local',
				                                                                margin   	    : '10px 0px 0px 0px',
				                                                                forceSelection  : true, 
				                                                                displayField	: 'name',
				                                                                valueField  	: 'categoryId',
				                                                                allowBlank 		: false,
				                                                                store			: {
				                                                                					type: 'conceptCategory'
				                                                                 },
				                                                                 reference 		: 'conceptCategory',
				                                                                 tabIndex    	: 4,
				                                                                 listeners 		: {
				                                                                                 'beforerender' : 'makeFieldMandatory'
				                                                                  }
			            													}
			            										]
			            									}            									
			            									
			            						] 
			            						
			            						
			            						
			            						
			            					},
			            					{
			            						xype 	: 'fieldcontainer',
			            						height  :  40,
			            						width	: '100%',
			            						cls 	: 'descriptionCls',
			            						margin	: '10px 10px 0px 0px',
			            						layout  : 'hbox',
			            						items   : [
			            									
			            									{
			            										xtype 	: 'label',
					            								text  	: 'Related Execution Concepts (0)',
					            								margin	: '5px 0px 0px 10px',
					            								reference : 'relatedExecutionConceptsLink',
					            								height 	:  30,
					            								width 	: '50%',
					            								cls 	: 'labelCls'
					            							 },
					            							 {
					            								xtype 	: 'panel',
					            								height 	:  40,
					            								width 	: '50%',
					            								layout : {
					            									type : 'hbox',
					            									pack : 'end'
					            										
					            								},
					            								items  : [ 
					            											{
					            												xtype    : 'button',
				                                                             	margin 	 : '2px 10px 2px 0px',
				                                                             	text     : 'Add Execution Concept',
				                                                             	reference : 'AddConceptExecutionDetail',
				                                                             	handler  : 'showConceptExecution',
				                                                             	tabIndex : 5  
					            											}
					            									
					            								]
					            							 }
			            										
			            									
			            						]
			            					},
			            					{
												xtype 		: 'grid',
												reference  	: 'IntakeFormGridDetails',		
												flex		: 1,
												width  		: '100%',
												tabIndex    :  6,
												style 		: {
													borderColor: '#d0d0d0',
													borderWidth : '1px',
													borderStyle : 'Solid'
												},
												viewConfig: {
													deferEmptyText : false,
													emptyText      : 'No Execution Concepts',
													style : {
														textAlign : 'center'
													}
												},
												store 		: {
													type : 'BusinessConceptGridStore'
												},
												margin 	: '10px 10px 10px 10px',
												columns	: [{ 
													text: 'Action',
													xtype: 'actioncolumn',
													width: '9%',
													sortable: false,
													menuDisabled: true,
													hidden : true,
													items: [{
													//		handler: 'navigateViewOnly',
															getClass: function (aValue, aMeta, aRecord) {
																return 'x-fa fa-info-circle'; 
															}
													   }]

											    
												},{ text: 'Business Area',  dataIndex: 'businessArea', width: '11%' },
														   { text: 'Claims System',  dataIndex: 'claimsSystem', width: '11%' },
											        	   { text: 'State/Market',   dataIndex: 'stateRegion',  width: '11%',renderer: 'moreToolTipRender' },
											        	   { text: 'Product/LOBs',	 dataIndex: 'productLobs',  width: '11%',renderer: 'moreToolTipRender' },
											        	   { text: 'Query Type',     dataIndex: 'queryType',  	width: '11%' },
											        	   { text: 'Status',  		 dataIndex: 'status',       width: '11%' },
											        	   { text: 'Assignee',  	 dataIndex: 'assignee',     width: '11%' },
											        	   { text: 'Created By',      dataIndex: 'createdBy',  	width: '11%' },
											        	   { text: 'Creation Date',    dataIndex: 'createdDate',  width: '11%' }]										
											}
			            					
			            					
	            							
			                                         
			                                         
                        		]         
			        
				                }]        
			        }]
    });