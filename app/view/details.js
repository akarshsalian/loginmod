Ext.define('log.view.details', {
    extend: 'Ext.form.Panel',
    xtype:'cardo',
    bodyPadding:10,
    title:'UserDetails',
     width: 300,
    bodyPadding: 10,
    scrollable:true,
    //requries:['log.store.States'],
    viewModel: {
                data: {
                    user: new Ext.data.Model({
                        fn:'',
                        ln:'',
                        dob:'',
                        phon:'',
                        stat:'',
                        email:''
                    })
                }
            },
    items:[{
           xtype: 'fieldset',
            title: 'User Info',
            defaultType: 'textfield',
            width:300,
            defaults: {
                anchor:'100%'
            }, 
            items: [{
            xtype:'textfield',
            placeHolder:'Enter your first name..',
            fieldLabel:'First name',
            name: 'firstname',
            bind: '{user.fn}'
         },{
             xtype:'textfield',
             placeHolder:'Enter your last name..',
             fieldLabel:'Last name',
             name: 'lastname',
             bind: '{user.ln}'
         },{
             xtype: 'datefield',
             placeHolder:'Enter your date of birth..',
             fieldLabel: 'Date of birth',
             name: 'dob',
             maxValue:new Date(),
              bind: '{user.dob}'
         },{
             xtype: 'numberfield',
             placeHolder:'Enter your contact number..',
             fieldLabel: 'Contact Number',
             name: 'contactnumber',
             //vtype:'Number',
             bind: '{user.phon}'
         },{
            xtype: 'combobox',
            fieldLabel: 'State',
            name: 'state',
            store: {
                type: 'states'
            },
            valueField: 'state',
            displayField: 'state',
            bind:'{user.stat}',
            listeners: {
            select: function(combo, records) {
                    if (combo.getValue() == 'Arizona'){
                           // Ext.Msg.alert('Alert box', 'State is Arizona');
                        var dialog = Ext.create({
                        xtype: 'dialog',
                        title: 'Dialog',
                        html: 'This is arizona zone',
                        });
                        dialog.show();
                    };
            }              
            }
         },{
             xtype: 'textfield',
             placeHolder:'Enter your email address.',
             fieldLabel: 'Email',
             name: 'email',
             vtype:'email',
             bind: '{user.email}'
         },{
             xtype:'button',
             name:'submit',
             text:'Submit',
             disabled:false,
             docked:'left',
             width:50
         }]
    },
    {
           xtype: 'fieldset',
            title: 'Details',
            defaultType: 'textfield',
            width:300,
            defaults: {
                anchor:'100%'
            }, 
         items:[{
                xtype: 'displayfield',
                fieldLabel: 'First Name',
                bind: '{user.fn}'
            }, {
                xtype: 'displayfield',
                fieldLabel: 'Last Name',
                bind: '{user.ln}'
            }, {
                xtype: 'displayfield',
                fieldLabel: 'Date of birth',
                bind: '{user.dob}'
            },{
                xtype: 'displayfield',
                fieldLabel: 'Contact Number',
                bind: '{user.phon}' 
            },{
                xtype: 'displayfield',
                fieldLabel: 'State',
                bind: '{user.stat}'
            },{
                 xtype: 'displayfield',
                fieldLabel: 'Email',
                bind: '{user.email}'
            }]
     }]

});