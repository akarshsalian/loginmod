Ext.define('log.view.list1', {
    extend: 'Ext.grid.Panel',
    xtype: 'list1',
    requires: [
        'log.store.Product'
    ],
    plugins: 'cellediting',

    title: 'listexample',

    store: {
        type: 'Product'
    },

    columns: [
        { text: 'Product Name', dataIndex: ' userId', editor: { xtype: 'textfield' } },
        { text: 'Category', dataIndex: 'id', flex: 1, editor: { xtype: 'textfield' } },
        { text: 'price', dataIndex: 'title', flex: 1, editor: { xtype: 'textfield' } },
        { text: 'quantity', dataIndex: 'body', flex: 1, editor: { xtype:'textfield' } }
        ],
    });