Ext.define('log.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    onLoginClick: function() {
        // localStorage.setItem('isUserLoggedIn', true);
        //getting ref to login window and destroy it 
       this.getView().destroy();
        Ext.create({
       xtype: 'app-main'
        })
    }
});