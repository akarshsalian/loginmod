/*
 * This Controller controls the Concept and Execution Screen, 
 * All the handlers and listeners for concept panel resides in this file
 * 
 * */
Ext.define('picm.concepts.view.intake.ExecutionConceptController', {
	extend	: 'picm.concepts.controllers.BaseController',
	alias	: 'controller.ExecutionConceptController',       
	requires: [ 'picm.concepts.model.Config',
		        'picm.concepts.model.ReferenceDataGlobalModel',		       
		        'picm.concepts.util.ConceptsMediator',
		        'picm.concepts.util.ConceptsUtil',
		        'picm.concepts.util.ConstantsUtil',
		        'picm.concepts.util.AlertsUtil',
		        'picm.concepts.controllers.BaseController',
		        'picm.concepts.util.AlertsUtil'],
	
	loadView   : function() {
		
	},
	populateView : function() {
		
		this.isViewLoadInProgress = true;
	
		if(this.getView().mode == ConstantsUtil.CREATE_MODE) {	
			this.loadViewForCreate();
		} else if (this.getView().mode == ConstantsUtil.EDIT_FROM_VIEWMODE) {
			this.loadViewForEdit();
		} else if (this.getView().mode == ConstantsUtil.EDIT_FROM_LIST) {
			this.loadViewForEdit();
		} else if (this.getView().mode == ConstantsUtil.CREATE_FROM_VIEWMODE){
			this.loadViewForViewMode();
		}
	
		
		this.isViewLoadInProgress = false;
		this.resetViewDirtyFlag();
		if(undefined != this.mask) {
			this.mask.hide();	
		}
		
	},
	findServiceTypeId : function(refModel, serviceTypeName) {
		
		var medicalId = undefined;
		
		for(var i =0 ; i < refModel.get('serviceType').length; i++) {
			if(refModel.get('serviceType')[i].name == serviceTypeName) {
				medicalId = refModel.get('serviceType')[i].appCodesId;
				break;	
			}
			
		}
		
		return medicalId;
		
		
	},
	loadViewForViewMode: function() {
		var refModel = picm.concepts.model.ReferenceDataGlobalModel;		
		this.lookupReference('claimSystem').getStore().loadData(refModel.get('claimSystem'));
		this.lookupReference('serviceType').getStore().loadData(refModel.get('serviceType'));
		this.lookupReference('serviceType').setValue(this.findServiceTypeId(refModel,ConstantsUtil.MEDICAL));
		this.lookupReference('recoverySystem').getStore().loadData(refModel.get('recoverySystem'));		
		this.lookupReference('conceptSource').getStore().loadData(refModel.get('conceptSource'));		
		this.lookupReference('priority').setValue(0);		
		this.lookupReference('stateRegion').getStore().loadData(refModel.get('region'));		
		//this.addSelectAllFunctionalityInDropDown(this.lookupReference('stateRegion'));
		this.lookupReference('errorType').getStore().loadData(refModel.get('errorType'));
		if (undefined != refModel.get('businessArea')) {
			this.lookupReference('businessArea').getStore().loadData(refModel.get('businessArea'));	
		}
		
				
		this.lookupReference('priorityCategory').getStore().loadData(refModel.get('priorityCategory'));		
		this.lookupReference('productLob').getStore().loadData(refModel.get('lob'));	
		//this.addSelectAllFunctionalityInDropDown(this.lookupReference('productLob'));
		this.lookupReference('errorId').getStore().loadData(refModel.get('errorId'));	
			
		this.lookupReference('saveConceptButton').setText('Add Execution Concept');
		this.lookupReference('cEvaluator').hide();
    	this.lookupReference('cVerifier').hide();
    	this.lookupReference('qAnalyst').hide();
		
	},
	loadViewForCreate : function() {
		
		var refModel = picm.concepts.model.ReferenceDataGlobalModel;		
		this.lookupReference('claimSystem').getStore().loadData(refModel.get('claimSystem'));				
		this.lookupReference('recoverySystem').getStore().loadData(refModel.get('recoverySystem'));	
		this.lookupReference('serviceType').getStore().loadData(refModel.get('serviceType'));
		this.lookupReference('serviceType').setValue(this.findServiceTypeId(refModel,ConstantsUtil.MEDICAL));	
		this.lookupReference('conceptSource').getStore().loadData(refModel.get('conceptSource'));		
		this.lookupReference('priority').setValue(0);		
		this.lookupReference('stateRegion').getStore().loadData(refModel.get('region'));	
		
		// adding select all in tag field, method is generic for tag fields
		//this.addSelectAllFunctionalityInDropDown(this.lookupReference('stateRegion'));
		
		this.lookupReference('errorType').getStore().loadData(refModel.get('errorType'));	
		if (undefined  != refModel.get('businessArea')) {
			this.lookupReference('businessArea').getStore().loadData(refModel.get('businessArea'));
		}		
		this.lookupReference('priorityCategory').getStore().loadData(refModel.get('priorityCategory'));	
		
		this.lookupReference('productLob').getStore().loadData(refModel.get('lob'));			
		//this.addSelectAllFunctionalityInDropDown(this.lookupReference('productLob'));
		
		this.lookupReference('errorId').getStore().loadData(refModel.get('errorId'));	
		this.lookupReference('saveConceptButton').setText('Add Execution Concept');
		this.lookupReference('cEvaluator').hide();
    	this.lookupReference('cVerifier').hide();
    	this.lookupReference('qAnalyst').hide();
	},
	loadViewForEdit : function() {
		
		var refModel = picm.concepts.model.ReferenceDataGlobalModel;		
		this.lookupReference('claimSystem').getStore().loadData(refModel.get('claimSystem'));
		this.lookupReference('serviceType').getStore().loadData(refModel.get('serviceType'));	
		this.lookupReference('recoverySystem').getStore().loadData(refModel.get('recoverySystem'));		
		this.lookupReference('conceptSource').getStore().loadData(refModel.get('conceptSource'));		
		this.lookupReference('priority').setValue(0);		
		this.lookupReference('stateRegion').getStore().loadData(refModel.get('region'));
		
		// adding select all in tag field, method is generic for tag fields
		//this.addSelectAllFunctionalityInDropDown(this.lookupReference('stateRegion'));
		
		this.lookupReference('errorType').getStore().loadData(refModel.get('errorType'));	
		if(undefined != refModel.get('businessArea')) {
			this.lookupReference('businessArea').getStore().loadData(refModel.get('businessArea'));
		}
		this.lookupReference('priorityCategory').getStore().loadData(refModel.get('priorityCategory'));	
		
		this.lookupReference('productLob').getStore().loadData(refModel.get('lob'));	
		//this.addSelectAllFunctionalityInDropDown(this.lookupReference('productLob'));
		
		this.lookupReference('errorId').getStore().loadData(refModel.get('errorId'));	
		this.lookupReference('saveConceptButton').setText('Save Changes');
    	
    	this.lookupReference('cEvaluator').getStore().loadData(refModel.get('ConceptEvaluator'));
    	this.lookupReference('cVerifier').getStore().loadData(refModel.get('ConceptVerifier'));
    	this.lookupReference('qAnalyst').getStore().loadData(refModel.get('QueryDataAnalyst'));
    	
    	//populate preselected options
    	
    	var data = this.getView().executionConceptData;
    	
    	
    	this.lookupReference('claimSystem').setValue(data.claimSystemId);
    	PICMLogsUtil.log(this.lookupReference('claimSystem'));

    	this.lookupReference('serviceType').setValue(this.findServiceTypeId(refModel,data.serviceType))
    	
    	this.lookupReference('stateRegion').setValue(data.regionIdAr);
    	
    	this.lookupReference('productLob').setValue(data.lobIdAr);
    	this.lookupReference('businessArea').setValue(data.businessAreaId);
    	this.lookupReference('queryType').setValue(data.queryType);
    	this.lookupReference('conceptSource').setValue(data.conceptSource);
    	this.lookupReference('recoverySystem').select(data.recoverySystemId);
    	if(data.errorTypeId !== 0)
    	{
    		this.lookupReference('errorType').nextValue = data.errorTypeId;
    	}
    	if(data.errorCodeId !== 0)
    	{
    		this.lookupReference('errorId').nextValue = data.errorCodeId;
    	}
    	
    	if(data.recoveryOtherValue !== 0)
    	{
    		this.lookupReference('specialInstructions').setValue(data.recoveryOtherValue);;
    		this.lookupReference('recoveryCode').setValue(data.recoveryOtherValue);;
    	}
    	
    	if(data.isHighPriority)
    	{
    		var priorityRef = this.lookupReference('priority');
    		for(var i =0;i<priorityRef.items.items.length;i++)
			{
    			PICMLogsUtil.log(priorityRef.items);
    			if(priorityRef.items.items[i].boxLabel === 'Yes')
				{
    				priorityRef.items.items[i].setValue(1);
				}
			}
    		
    		this.lookupReference('priorityCategory').setValue(data.priorityName).setVisible(true);
    	}else{
    		var priorityRef = this.lookupReference('priority');
    		for(var i =0;i<priorityRef.items.items.length;i++)
			{
    			
    			PICMLogsUtil.log(priorityRef.items);
    			if(priorityRef.items.items[i].boxLabel === 'No')
				{
    				priorityRef.items.items[i].setValue(0);
				}
			}
    	}
    	
                              //--------------------------------------- Populate Assignments for E.Concept
    	var execConceptAssignments = data.execConceptAssignments;
    	for(var i=0 ; i < execConceptAssignments.length;i++ )
    	{
    		if(execConceptAssignments[i].roleId === this.lookupReference('cEvaluator').roleId)
    		{
    			this.lookupReference('cEvaluator').setValue(execConceptAssignments[i].userId.toUpperCase()+'|'+execConceptAssignments[i].roleId);
    		}
    		if(execConceptAssignments[i].roleId === this.lookupReference('cVerifier').roleId)
    		{
    			this.lookupReference('cVerifier').setValue(execConceptAssignments[i].userId.toUpperCase()+'|'+execConceptAssignments[i].roleId);
    		}
    		if(execConceptAssignments[i].roleId === this.lookupReference('qAnalyst').roleId)
    		{
    			this.lookupReference('qAnalyst').setValue(execConceptAssignments[i].userId.toUpperCase()+'|'+execConceptAssignments[i].roleId);
    		}
    		
    	}
		
	},	
	saveConceptButton: function(){		
		var form = this.lookupReference('executionConceptForm');
		if(form.isValid()) {
			var data = {};
			Ext.iterate(form.getValues(), function(key, value) {
				data[key] = value;
			}, this);
			
			if(data.priorityName && data.priorityName!= '') {
				
				data['priorityCode'] = this.getValueFromStore('priorityCategory','name',data.priorityName).get('appCodesId');
			}
			 

			if(data.serviceType && data.serviceType!= '') {
				data['appCodeId'] = data.serviceType;
			}
			
			this.getView().hide();
			
		
			if (this.getView().mode == ConstantsUtil.CREATE_MODE) 
			{		
				data['conceptTypeId'] = 1;
				data['executionConceptId'] = 0;
				data['busSystemName'] = this.getValueFromStore('claimSystemStore','systemId',data.busSystem).get('name');
				data['businessAreaName'] = this.getValueFromStore('businessAreaStore','businessAreaId',data.businessArea).get('name');
				data['conceptStatusName'] = 'New';
				
				var region = this.transformRegionAndLob(data.region,'region','regionId');
				data['region'] = region;
				var lobList = this.transformRegionAndLob(data.lobList,'lob','lobId');
				data['lobList'] = lobList;
				
				data['executionConceptsAssignment'] = this.populateUserRoleObjects();
				
				this.getView().parentRef.createJsonForSaveConceptDetail(data,this.getView().parentRef);
			} else if (this.getView().mode == ConstantsUtil.EDIT_FROM_LIST || this.getView().mode == ConstantsUtil.EDIT_FROM_VIEWMODE) {
				var objectToSave = {};
				var executionConceptAr = [];
				var regionObj = {};
				var lobObj ={};
				var userObj = {};
				
				var executionConceptsAssignment = [];
				
				var origData = this.getView().executionConceptData;
				
				data['executionConceptId'] = origData.executionConceptId;
				
				data['conceptStatusName'] = origData.conceptStatusName;
				var busSystemName = this.getValueFromStore('claimSystemStore','systemId',data.busSystem).get('name');
				data['busSystemName'] = busSystemName;
				
				var busAreaName = this.getValueFromStore('businessAreaStore','businessAreaId',data.businessArea).get('name');
				data['businessAreaName'] = busAreaName;
				
				objectToSave['conceptId'] = origData.conceptId;
				objectToSave['description'] = origData.description;
				objectToSave['conceptCategoryID'] = origData.conceptCategoryID;
				objectToSave['conceptCategoryName'] = origData.conceptCategory;
				objectToSave['conceptName'] = origData.conceptName;
				
				var region = this.transformRegionAndLob(data.region,'region','regionId');
				data['region'] = region;
				
				var lobList = this.transformRegionAndLob(data.lobList,'lob','lobId');
				data['lobList'] = lobList;
				
				data['conceptTypeId']= 1;
				
				this.populateConceptAssignment('cEvaluator',executionConceptsAssignment);
				this.populateConceptAssignment('qAnalyst',executionConceptsAssignment);
				this.populateConceptAssignment('cVerifier',executionConceptsAssignment);
				
				data['executionConceptsAssignment'] = executionConceptsAssignment;
				executionConceptAr.push(data);
				
				objectToSave['executionConcepts'] = executionConceptAr;
				
				PICMLogsUtil.log(objectToSave);
				
				var url = picm.concepts.model.Config.get('updateExecutionConcept');
				var promise = ConceptsUtil.postDataFromAPIPromise(url,objectToSave);
				var me = this;
				promise.then(function(success) 
						      {
								var msg  = 'Execution Concept  '+origData.hybridConceptId + ' ' + origData.claimSystems + '  was updated successfully'; 
					          	AlertsUtil.showGoodToast(msg)
					          	if(me.getView().mode == ConstantsUtil.EDIT_FROM_LIST)
					          	{
					          		
					          		me.publish('updateBusinessConcept',origData.conceptId);
					          		me.publish('updateExecutionConcept',origData.conceptId);
					          		me.publish('updateExecutionConceptList');
					          	} else if(me.getView().mode == ConstantsUtil.EDIT_FROM_VIEWMODE)
					          	{
					          		me.publish('updateBusinessConcept',origData.conceptId);
					          		me.publish(origData['eventName'],origData.conceptId);
					          		me.publish('updateExecutionConceptList');
					          	}
					          	
					          	
					        })
					   .otherwise(function(error)
						   	  {
						   		PICMLogsUtil.log(error);
						   		AlertsUtil.showDangerToast(ConstantsUtil.SAVE_FAILURE_MESSAGE);
				      			
					      	  })
				       .done();
			
			} else if (this.getView().mode == ConstantsUtil.CREATE_FROM_VIEWMODE) {
				data['conceptTypeId'] = 1;
				data['executionConceptId'] = 0;
				data['busSystemName'] = this.getValueFromStore('claimSystemStore','systemId',data.busSystem).get('name');
				data['businessAreaName'] = this.getValueFromStore('businessAreaStore','businessAreaId',data.businessArea).get('name');
				data['conceptStatusName'] = 'New';
				
				var region = this.transformRegionAndLob(data.region,'region','regionId');
				data['region'] = region;
				var lobList = this.transformRegionAndLob(data.lobList,'lob','lobId');
				data['lobList'] = lobList;
				data['executionConceptsAssignment'] = this.populateUserRoleObjects();
				this.getView().parentRef.createJsonForSaveConceptDetail(data);
				
				
			}
			
			
		} else {
			ModalUtil.showErrorModal();
		}		
	},
	onAfterLayout: function() {
		this.lookupReference('claimSystem').focus();
		this.lookupReference('claimSystem').reset();	
	},
	onShow : function() {
		if (this.getView().mode !== ConstantsUtil.EDIT_FROM_LIST) 
		{
			this.lookupReference('errorType').setVisible(true);
			this.lookupReference('errorId').setVisible(true);	
			
		}
		this.populateView();
	},
	navigateCallBack : function(controllerRef)
	{
		
	},
	onPriorityChange : function( combo, newValue, oldValue, eOpts ){
		
		if(newValue.isHighPriority == 1) {
			this.lookupReference('priorityCategory').show();
		} else {
			this.lookupReference('priorityCategory').hide();
		}

	},
	makeFieldMandatory : function(component)  {  
		if (!component.allowBlank) {
			
			component.labelSeparator += '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>';
		
		}
	},
	onCancelConceptButton : function() {		
		this.getView().hide();
	},
	transformRegionAndLob : function(data,storeId,searchKey)
	{
		var obj = {};
		for(var i=0 ;i<data.length;i++)
		{
			var name = this.getValueFromGlobalStore(storeId,searchKey,data[i]).name;
			obj[name] = data[i];
		}
		return obj;
	},
	populateConceptAssignment : function(roleName,executionConceptsAssignment)
	{
		var userObj = {};
		var comboVal = this.lookupReference(roleName).getValue();
		
		if(comboVal !== null && comboVal !== undefined)
		{
			var comboValAr = comboVal.split("|");
			userObj['userId'] =  comboValAr[0];
			userObj['roleId'] =  comboValAr[1];
			userObj['assignee'] = this.lookupReference(roleName).getDisplayValue();
			executionConceptsAssignment.push(userObj);
		}
	},
	populateUserRoleObjects : function()
	{
		var executionConceptsAssignment = [];
		var userObj = {};
		userObj['userId'] = '-1';
		userObj['roleId'] = this.lookupReference('cEvaluator').roleId;  
		userObj['assignee'] = 'Unassigned';
		executionConceptsAssignment.push(userObj);
		
		userObj = {};
		userObj['userId'] = '-1';
		userObj['roleId'] = this.lookupReference('qAnalyst').roleId;  
		userObj['assignee'] = 'Unassigned';
		executionConceptsAssignment.push(userObj);
		
		userObj = {};
		userObj['userId'] = '-1';
		userObj['roleId'] = this.lookupReference('cVerifier').roleId;  
		userObj['assignee'] = 'Unassigned';
		executionConceptsAssignment.push(userObj);
		
		userObj = {};
		userObj['userId'] = '-1';
		userObj['roleId'] = picm.concepts.model.ReferenceDataGlobalModel.get('authenticatorRoleID');
		userObj['assignee'] = 'Unassigned';
		executionConceptsAssignment.push(userObj);
		
		return executionConceptsAssignment;
	},
	fetchValuesForTarget : function(combo, oldValue, newValue,eOpts)
    {
           var me = this;
           switch(eOpts.targetId)
           {
                  case "region":
                        me.lookupReference('productLob').setDisabled(true);
                        me.lookupReference('stateRegion').setDisabled(true);
                        me.lookupReference('productLob').reset();
                        me.lookupReference('stateRegion').reset();
                        
                        var claimsystem = me.lookupReference('claimSystem').getValue();
                        
                        var name = Ext.getStore('claimSystemStore').findRecord('systemId', claimsystem).get('name');
                        
                        var url = '/conceptconfig/'+claimsystem+'/regions';
                        
                        this.promiseHandler(url,'stateRegionStore','stateRegion');
                        
                        
                        break;
                        
                  case "lob":   
                        
                        var claimSystem = me.lookupReference('claimSystem').getValue();
                        var region = me.lookupReference('stateRegion').getValue();
                        me.lookupReference('productLob').reset();
                        me.lookupReference('productLob').setDisabled(true);
                        var claimSystemName = Ext.getStore('claimSystemStore').findRecord('systemId', claimSystem).get('name');
                        var regionName = Ext.getStore('stateRegionStore').findRecord('regionId', region).get('name'); 
                        
                        if(regionName.indexOf('(') != -1) {
                               regionName = regionName.substring(0,(regionName.indexOf('(')-1)); 
                        }
                        
                        var url = "/conceptconfig/"+claimSystem+"/"+region+"/lobs";
                        
                        this.promiseHandler(url,'productLobStore','productLob');      
                        
                        break;
                  case "recoverySystem":
                        var recSystem = me.lookupReference('recoverySystem').getValue();
                        
                        
                        var recSystemName = Ext.getStore('recoverySystemStore').findRecord('systemId', recSystem).get('name');
                        if(recSystemName === ConstantsUtil.ACR || recSystemName === ConstantsUtil.COB_Prevention 
                        	|| recSystemName === ConstantsUtil.DENTAL  || recSystemName === ConstantsUtil.PHARMACY 
                        		|| recSystemName === ConstantsUtil.PROVIDER_AUDIT || recSystemName === ConstantsUtil.VAFEP
                        			|| recSystemName === ConstantsUtil.VAITS || recSystemName === ConstantsUtil.VENDOR || recSystemName === ConstantsUtil.VISION)
                        {
                        	 me.lookupReference('specialInstructions').setVisible(false);
                             me.lookupReference('errorType').setVisible(true);
                             me.lookupReference('errorId').setVisible(true);                             
                             
                             me.lookupReference('errorType').setDisabled(true);
                             me.lookupReference('errorId').setDisabled(true);
                             me.lookupReference('specialInstructions').setDisabled(true);
                             me.lookupReference('recoveryCode').setDisabled(true);
                             
                             
                             me.lookupReference('errorType').suspendEvents();
                             me.lookupReference('errorType').reset();
                             me.lookupReference('errorType').resumeEvents();
                             
                             
                             me.lookupReference('errorId').reset();
                             
                             var url = "/conceptconfig/ACR/error";
                             this.promiseHandler(url,'errorTypeStore','errorType');         
                               
                        }else if(recSystemName === ConstantsUtil.VRDB)
                        {
                            
                            me.lookupReference('errorType').setVisible(false);
                            me.lookupReference('errorId').setVisible(false);
                            me.lookupReference('specialInstructions').setVisible(false);
                            me.lookupReference('recoveryCode').setVisible(true);
                            
                            me.lookupReference('specialInstructions').setDisabled(true);
                            me.lookupReference('recoveryCode').setDisabled(false);
                            
                        } else if (recSystemName === ConstantsUtil.CCERT) {
                            me.lookupReference('errorType').setVisible(false);
                            me.lookupReference('errorId').setVisible(false);
                            me.lookupReference('specialInstructions').setVisible(false);
                            me.lookupReference('recoveryCode').setVisible(false);
                            
                            me.lookupReference('specialInstructions').setDisabled(true);
                            me.lookupReference('recoveryCode').setDisabled(true);
                            
                        } else if (recSystemName === ConstantsUtil.OTHER) {
                        	me.lookupReference('errorType').setVisible(false);
                        	me.lookupReference('errorId').setVisible(false);
                        	me.lookupReference('specialInstructions').setVisible(true);
                        	me.lookupReference('recoveryCode').setVisible(false);
                         
                        	me.lookupReference('specialInstructions').setDisabled(false);
                        	me.lookupReference('recoveryCode').setDisabled(true);
                         
                        }
                     
                        
                        
                        break;
                        
                  case "errorId":
                        me.lookupReference('errorId').reset();
                        me.lookupReference('errorId').setDisabled(true);
                        var errorTypeId = me.lookupReference('errorType').getValue();
                              var url = '/conceptconfig/'+errorTypeId+'/errorid';
                              this.promiseHandler(url,'errorIdStore','errorId');
                        
                        break; 
                   
           }
           
           
    },
	errorHandler : function(error,ref) {
		PICMLogsUtil.log(error);
		Ext.MessageBox.show({
            title: 'Error',
            belongsTo 	: ConstantsUtil.MODAL_DIALOG_OWNER,
            msg: 'Your request cannot be processed at this time due to an internal error, please try again later',
            width: 400,
            icon: Ext.MessageBox.INFO,
            buttons: Ext.Msg.OK,
            closable: true,
            fn: function(btn) {}
        });
	},
	successHandler : function(success) {
		
		Ext.MessageBox.show({
            title: 'Success',
            msg: 'Your changes were saved successfully',
            width: 400,
            belongsTo 	: ConstantsUtil.MODAL_DIALOG_OWNER,
            icon: Ext.MessageBox.INFO,
            buttons: Ext.Msg.OK,
            closable: true,
            fn: function(btn) {}
        });
	},
	promiseHandler: function(url,storeId,idToEnable) {

		var promise = ConceptsUtil.getDataFromAPIPromise(url);
		var me = this;
		promise.then(function(successResponse)
		{
			
			var errorIdStore =   Ext.getStore(storeId);
			errorIdStore.loadData(successResponse);
											//------------------ Need timeout to coordinate delay to enable Dropdowns
			Ext.Function.defer(function () {
				var ref = me.lookupReference(idToEnable);
				if(ref.nextValue !== undefined && ref.nextValue !== null)
				{
					ref.setValue(ref.nextValue);
					ref.nextValue = null;
				}
				ref.setDisabled(false);
			}, 500);
        	
		})
		.otherwise(this.errorHandler)
		.done();
	}
});