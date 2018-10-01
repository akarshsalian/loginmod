/*
 * This is the Execution Concept Screen, which allows the user to 
 * enter the execution concept details which is the second step of create concept screen.
 * */
Ext.define('picm.concepts.view.intake.ExecutionConceptForm', {		
		requires 	:      ['picm.concepts.store.PriorityStore',
							'picm.concepts.store.AssigneeStore',
							'picm.concepts.store.BusinessAreaStore',
							'picm.concepts.store.ServiceTypeStore',
							'picm.concepts.store.ClaimSystemStore',
							'picm.concepts.store.ConceptCategory',
							'picm.concepts.store.ConceptSource', 'picm.concepts.store.ErrorIdStore',
							'picm.concepts.store.ErrorTypeStore',
							'picm.concepts.store.PriorityCategory',
							'picm.concepts.store.PriorityStore',
							'picm.concepts.store.ProductLobStore',
							'picm.concepts.store.QueryTypeStore',
							'picm.concepts.store.RecoverySystemStore',
							'picm.concepts.store.StateRegionStore' ,
							'picm.concepts.store.RootCauseStore',
							'picm.concepts.store.ErrorCodeStore',
							'picm.concepts.view.intake.ExecutionConceptViewModel',
							'picm.concepts.view.intake.ExecutionConceptController',
							'picm.concepts.store.ConceptEvaluatorStore',
							'picm.concepts.store.ConceptVerifierStore',
							'picm.concepts.store.QueryDataAnalystStore'
							],
		 extend     : 'Ext.panel.Panel',
		/* tools: [	           
	            { iconCls : 'x-fa fa-times',
	              handler : 'onCancelConceptButton'
	            }
	        ],*/
	     viewModel		: {
	    		type	: 'ExecutionConceptViewModel'
	     },   
		 height 	:  Ext.getBody().getViewSize().height-20,
		 belongsTo 	: ConstantsUtil.MODAL_DIALOG_OWNER,
		 maxHeight  :  600,
		 width 		: '50%',
		 frame		:  true,
		 floating	:  true,
		 closable 	:  true,
		 modal		:  true,
		 overflowY	: 'auto',
		 margin		: '0px 0px 0px 10px',
		 layout 	: {
				type : 'hbox',
				align : 'stretch'   
		},		
		mode 		:  undefined,
		executionConceptData: undefined,
		title   	: 'Add Execution Concept',
		reference 	: 'executionConceptFormContainer',
		controller  : 'ExecutionConceptController',
		
		listeners 	: {
			'show' : 'onShow'			
		},
		items 		: [
			    
				{
					xtype		: 'form',
					layout		: {
						'type' : 'vbox',
						
					},	
					overflowY	: 'auto',
					reference 	: 'executionConceptForm',
					height		: "100%",
					margin		: '0px 0px 0px 0px',
					width		: "100%",
					border 		: 1, 
					fieldDefaults: {
				        labelAlign	: 'right',
				        labelWidth	: 135,
				        msgTarget	: 'side',
				        width 		: '80%',
				        forceSelection : true
				    },
					items       : [ 
									{
										xtype : 'label',
										text  : 'All details are required.',
										height : 15,
										width : '100%',
									    cls : 'mandatorylabelCls',
									    margin : '5px 0px 0px 13px'
									},
									{
										xtype 		: 'combo',
										emptyText   : 'Select',
										name 		: 'serviceType',
										reference 	: 'serviceType',
										fieldLabel 	: 'Service Type',
										labelAlign 	: 'right',
										queryMode 	: 'local',
										displayField: 'name',
										valueField 	: 'appCodesId',
										allowBlank 	: false,
										store 		: {
														type : 'serviceTypeStore'
													},
										margin 		: '10px 0px 0px 30px',
										tabIndex 	: 1

			                        },
									{
										xtype 		: 'combo',
										emptyText   : 'Select',
										name 		: 'busSystem',
										reference 	: 'claimSystem',
										fieldLabel 	: 'Claim System',
										labelAlign 	: 'right',
										queryMode 	: 'local',
										displayField: 'name',
										valueField 	: 'systemId',
										allowBlank 	: false,
										store 		: {
														type : 'claimSystemStore'
													},
										margin 		: '10px 0px 0px 30px',
										tabIndex 	: 2
										 
			                        },
			                        {
										xtype 			: 'tagfield',
										emptyText   	: 'Select a State/Market',
										name 			: 'region',
										reference 		: 'stateRegion',
										fieldLabel 		: 'State/Market',
										allowBlank 		: false,
										displayField 	: 'name',
										valueField 		: 'regionId',
										labelAlign 		: 'right',
										queryMode 		: 'local',
										publishes       : 'value',
										filterPickList  : true,
										store 			: {
															type : 'stateRegionStore'
														  },
										margin 			: '10px 0px 0px 30px',
										tabIndex 		: 3,
										disabled        : false
									},
									
									{
										xtype 		: 'tagfield',
										emptyText   : 'Select a product/LOB',
										name 		: 'lobList',
										reference 	: 'productLob',
										fieldLabel 	: 'Product/LOBs',
										allowBlank 	: false,
										displayField: 'name',
										valueField 	: 'lobId',
										labelAlign	: 'right',
										publishes       : 'value',
										filterPickList  : true,
										queryMode 	: 'local',
										store 		: {
											   type : 'productLobStore'
								        },
										margin 		: '10px 0px 0px 30px',
										tabIndex 	: 4,
										disabled    : false
									},
									{
										xtype 			: 'combo',
										emptyText   	: 'Select',
										name 			: 'businessArea',
										reference 		: 'businessArea',
										allowBlank 		: false,
										fieldLabel 		: 'Business Area',
										displayField 	: 'name',
										valueField 		: 'businessAreaId',
										labelAlign 		: 'right',
										queryMode 		: 'local',
										store 			: {
															type : 'businessAreaStore'
										},
										margin 			: '10px 0px 0px 30px',
										tabIndex 		: 5
									},
									{
										xtype 			: 'combo',
										emptyText   	: 'Select',
										name 			: 'queryType',
										reference 		: 'queryType',
										fieldLabel 		: 'Query Type',
										allowBlank 		: false,
										displayField 	: 'name',
										valueField 		: 'name',
										labelAlign 		: 'right',
										queryMode 		: 'local',
										store 			: {
															type : 'queryTypeStore'
														},
										margin 			: '10px 0px 0px 30px',
										tabIndex 		: 6,
										listeners 	: {
											
										}
									},									
									{
										xtype 		: 'combo',
										emptyText   : 'Select',
										name 		: 'conceptSource',
										allowBlank 	: false,
										reference 	: 'conceptSource',
										fieldLabel 	: 'Concept Source',
										displayField: 'name',
										valueField 	: 'conceptSourceId',
										labelAlign  : 'right',
										queryMode 	: 'local',
										store 		: {
														type : 'conceptSource'
													  },
										margin 		: '10px 0px 0px 30px',
										tabIndex 	: 7,
										listeners 	: {
									
										}
									},
									{
										xtype 		: 'combo',
										emptyText   : 'Select',
										allowBlank 	: false,
										name 		: 'recoverySystem',
										reference 	: 'recoverySystem',
										fieldLabel 	: 'Recovery System',
										labelAlign 	: 'right',
										queryMode 	: 'local',
										displayField: 'name',
										valueField 	: 'systemId',
										store 		: {
														type : 'recoverySystemStore'
													},
										margin 		: '10px 0px 0px 30px',
										tabIndex 	: 7,
										listeners 	: {
	                                                'change'      : {fn:'fetchValuesForTarget',targetId:'recoverySystem',sourceId:'recoverySystem'}
                                       }
									},
									{
										xtype 			: 'textfield',
										name 			: 'recoveryOtherValue',
										reference 		: 'specialInstructions',
										fieldLabel 		: 'Special Instructions',
										hidden 			: true,
										labelAlign 		: 'right',
										allowBlank		: true,
										maxLength  		: 255,
										margin 			: '10px 0px 0px 30px',
										tabIndex 		: 8,
										listeners 	: {
											'show' : function() {
												this.allowBlank = false;
											},
											'hide' : function() {
												this.allowBlank = true;
											}
										}
									},
									{
										xtype 			: 'combo',
										emptyText   	: 'Select',
										name 			: 'errorType',
										reference 		: 'errorType',
										fieldLabel 		: 'Error Type',
										allowBlank 		: false,
										disabled		: true,
										displayField 	: 'name',
										valueField 		: 'errorTypeId',
										labelAlign 		: 'right',
										queryMode 		: 'local',
										store 			: {
															type : 'errorTypeStore'
										},
										margin 			: '10px 0px 0px 30px',
										tabIndex 		: 9,
										listeners 		: {
													'change'      : {fn:'fetchValuesForTarget',targetId:'errorId',sourceId:'errorType'},
													'show' : function() {
														this.allowBlank = false;
													},
													'hide' : function() {
														this.allowBlank = true;
													}
												}
								   },
								   {
										xtype 		: 'combo',
										emptyText   : 'Select',
										tabIndex	:  10,
										name 		: 'errorCode',
										reference 	: 'errorId',
										allowBlank 	:  false,
										disabled	:  true,
										fieldLabel 	: 'Error ID',
										displayField: 'name',
										valueField 	: 'errorCodeId',
										labelAlign 	: 'right',
										queryMode 	: 'local',
										store 		: {
														type : 'errorIdStore'
													},
										margin 		: '10px 0px 0px 30px',
										listeners 	: {
											'show' : function() {
												this.allowBlank = false;
											},
											'hide' : function() {
												this.allowBlank = true;
											}
										}
									},
									{
										xtype 			: 'textfield',
										//emptyText   	: 'Select',
										name 			: 'recoveryOtherValue',
										reference 		: 'recoveryCode',
										fieldLabel 		: 'Recovery Code',
										maxLength  		: 5,
										hidden 			: true,
										labelAlign 		: 'right',
										allowBlank		: true,
										margin 			: '10px 0px 0px 30px',
										tabIndex 		: 11,
									},
									{
							            xtype		: 'radiogroup',
							            fieldLabel	: 'Priority',
							            cls			: 'x-check-group-alt',
							            labelAlign 	: 'right',
							            labelWidth	:  115,
								        msgTarget	: 'side',
								        width 		: '50%',
								        margin 		: '10px 0px 0px 30px',
								        listeners 	: {
											'change' 		: 'onPriorityChange',
										},
										name 		: 'isHighPriority',
										reference 	: 'priority',
							            items		: [
							                			{boxLabel: 'No',  inputValue: 0, checked: true, tabIndex 	: 11},
							                			{boxLabel: 'Yes', inputValue: 1,tabIndex 	: 12}							                
							            ],
							            tabIndex 		: 12,
							        },
									
								   {
										xtype 			: 'combo',
										emptyText   	: 'Select',
										name 			: 'priorityName',
										reference 		: 'priorityCategory',
										fieldLabel 		: 'Priority Category',
										displayField 	: 'name',
										valueField 		: 'name',
										hidden 			: true,
										labelAlign 		: 'right',
										queryMode 		: 'local',
										allowBlank		: true,
										store 			: {
															type : 'priorityCategory'
										},
										margin 			: '10px 0px 0px 30px',
										tabIndex 		: 13,
										listeners 	: {
											'show' : function() {
												this.allowBlank = false;
											},
											'hide' : function() {
												this.allowBlank = true;
											}
										}
								},
								{
									xtype 		: 'combo',
									emptyText   : 'Select',
									name 		: 'cEvaluator',
									allowBlank 	: true,
									reference 	: 'cEvaluator',
									fieldLabel 	: 'Concept Evaluator',
									roleId      : 4,
									displayField: 'assignee',
									valueField 	: 'valueField',
									labelAlign  : 'right',
									queryMode 	: 'local',
									store 		: {
													type : 'conceptEvaluatorStore'
												  },
									margin 		: '10px 0px 0px 30px',
									tabIndex 	: 14,
									listeners 	: {
								
									}
								},
								{
									xtype 		: 'combo',
									emptyText   : 'Select',
									name 		: 'qAnalyst',
									allowBlank 	: true,
									reference 	: 'qAnalyst',
									fieldLabel 	: 'Query Data Analyst',
									roleId      : 11,
									displayField: 'assignee',
									valueField 	: 'valueField',
									labelAlign  : 'right',
									queryMode 	: 'local',
									store 		: {
													type : 'queryDataAnalystStore'
												  },
									margin 		: '10px 0px 0px 30px',
									tabIndex 	: 15,
									listeners 	: {
								
									}
								},
								{
									xtype 		: 'combo',
									emptyText   : 'Select',
									name 		: 'cVerifier',
									allowBlank 	: true,
									reference 	: 'cVerifier',
									fieldLabel 	: 'Concept Verifier',
									roleId      : 3,
									displayField: 'assignee',
									valueField 	: 'valueField',
									labelAlign  : 'right',
									queryMode 	: 'local',
									store 		: {
													type : 'conceptVerifierStore'
												  },
									margin 		: '10px 0px 0px 30px',
									tabIndex 	: 16,
									listeners 	: {
								
									}
								}, 
								{
									xtype  : 'panel',
									layout : {
										type  : 'hbox',
										align : 'stretch',
										pack  : 'center' 
									},
									margin : '10px 0px 10px 20px',
									height : 30,
									width  : '100%', 
									items  : [
												{
													xtype 	 : 'button',
													text  	 : 'Add Execution Concept',
													reference: 'saveConceptButton',
													handler  : 'saveConceptButton',
													tabIndex : 17
												},
												{
													xtype 	 : 'button',
													text  	 : 'Cancel',
													handler  : 'onCancelConceptButton',
													tabIndex : 18,
													margin   : '0px 0px 0px 10px',
													cls		 : 'linkSecondayButtonCls',
													pressedCls : 'linkSecondayButtonCls'
												}
									]
									
								}
								   
					]
				}]
});