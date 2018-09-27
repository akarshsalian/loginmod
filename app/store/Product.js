Ext.define('log.store.Product', {
    extend: 'Ext.data.Store',
	alias: 'store.Product',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/posts',
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success',
        },
        writer: {
            type: 'json'
        }
    }

});