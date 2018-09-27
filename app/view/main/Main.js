/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 Ext.define('log.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    /*requires: [
        
        'log.view.main.MainController',
        'log.view.main.MainModel'

    ],*/

    //controller: 'main',
    //viewModel: 'main',

   /* ui: 'navigation',

    tabBarHeaderPosition: 1,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },
    defaults: {
        bodyPadding: 15
    },*/
    items:[{

        title: 'MainList',
        xtype: 'mainlist'},{
        title:'DRive',
        xtype:'cardo'},{
        title:'List',
        xtype:'grouplist'},{
        title:'Student',
        xtype:'cardi'

        
    }]

    // items: [{
    //     title:'UserDetails',
    //     items: [{
    //         xtype: 'textfield',
    //         placeHolder:'Enter your first name..'
    //         fieldLabel:'First name',
    //         name: 'firstname'
    //     },{
    //         xtype:'textfield',
    //         placeHolder:'Enter your last name..'
    //         fieldLabel:'Last name',
    //         name: 'lastname' 
    //     },{
    //         xtype: 'datefield',
    //         placeHolder:'Enter your date of birth..'
    //         fieldLabel: 'Date of birth',
    //         name: 'dob',
    //         maxValue:new Date();
    //     },{
    //         xtype: 'numberfield',
    //         placeHolder:'Enter your contact number..'
    //         fieldLabel: 'Contact Number',
    //         name: 'contactnumber',
    //         vtype:'number'
    //     },{
    //         xtype: 'textfield',
    //         placeHolder:'Enter your email address.'
    //         fieldLabel: 'Email',
    //         name: 'email',
    //         vtype:'email'
    //     }],
    //     buttons:[{
    //         text:'Register',
    //         disabled:false;
    //     }] }, {
    //     title: 'About',
    //     bind: {
    //         html: 'This app takes all your details to be stored as a security for your better access'
    //     }
    // }]


});