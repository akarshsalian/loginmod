Ext.define('log.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    layout: 'center',
    closable: false,
    maximized: true,
    autoShow: true,
    onEsc: function() {
        return false;
    },
    requires: [
        'log.view.login.LoginController',
        'Ext.form.Panel'
    ],
    controller: 'login',
    bodyPadding: 10,
    title: 'Login to the App',
    closable: false,
    autoShow: true,
    items: {
        xtype: 'form',
        reference: 'form',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center',
        },
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            fieldLabel: 'password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            align:'left',
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});