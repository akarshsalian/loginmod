Ext.define('log.view.student',{
    extend: 'Ext.form.Panel',
    xtype:'cardi',
    bodyPadding:10,

    launch: function() {
        var form = Ext.create({
            xtype: 'form',
            renderTo: Ext.getBody(),
            title: 'Student Form',
            margin: 20,
            bodyPadding: 12,
            width: 400,
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Student Name',
                name: 'name'
            }, {
                xtype: 'combo',
                fieldLabel: 'Subject',
                name: 'className',
                queryMode: 'local',
                displayField: 'className',
                valueField: 'className',
                store: {
                    fields: ['className'],
                    data: [{
                        className: 'Geometry'
                    }, {
                        className: 'Biology'
                    }, {
                        className: 'Social Studies'
                    }, {
                        className: 'Recess'
                    }, {
                        className: 'History'
                    }]
                }
            }, {
                xtype: 'numberfield',
                fieldLabel: 'Grade',
                name: 'grade',
                minValue: 0,
                maxValue: 100
            }, {
                xtype: 'checkboxfield',
                fieldLabel: 'Attendance',
                name: 'attendance'
            }],
            buttons: [{
                text: 'Save Changes',
                handler: function () {
                    var currRecord = form.getRecord();
                    
                    if (currRecord) {
                        form.updateRecord();
                        form.reset();
                    }
                }
            }]
        });


        var grid = Ext.create({
            xtype: 'gridpanel',
            renderTo: Ext.getBody(),
            title: 'Students Grid',
            collapsible: true,
            margin: 20,
            height: 300,
            width: 400,
            store: {
                fields: ['name', 'className', 'attendance', {
                    name: 'grade',
                    type: 'number'
                }],
                data: [{
                    name: 'Louise',
                    className: 'Geometry',
                    grade: '77',
                    attendance: true
                }, {
                    name: 'Tina',
                    className: 'Geometry',
                    grade: '100',
                    attendance: true
                }, {
                    name: 'Gene',
                    className: 'Geometry',
                    grade: '84',
                    attendance: false
                }, {
                    name: 'Bob',
                    className: 'Geometry',
                    grade: '90',
                    attendance: true
                }, {
                    name: 'Linda',
                    className: 'Geometry',
                    grade: '99',
                    attendance: false
                }]
            },
            columns: [{
                text: 'Name',
                dataIndex: 'name',
                flex: 1
            }, {
                text: 'Class',
                dataIndex: 'className'
            }, {
                text: 'Grade',
                dataIndex: 'grade'
            }],
            listeners: {
                select: function (selModel, rec) {
                   	form.loadRecord(rec);
                }
            }
        });
    }
});