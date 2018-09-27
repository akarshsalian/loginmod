Ext.define('log.view.catgrp', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.layout.container.Card', 'Ext.layout.container.Fit','log.view.list1'],
    xtype: 'grouplist',
    defaults: {
        bodyPadding: 20,
        layout: 'fit'
    },
    items: [{
            
            title: 'Category Group',
            closable: true,
            xtype: 'list1',
        }
    ]
});