Ext.define('log.view.detailscontroller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.detailscontroller',
    openDialog: function(){
    Ext.create({
                        xtype: 'dialog',
                        title: 'Dialog',
                        html: 'This is arizona zone',
                        });
     dialog.show();}
});