/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'log.Application',

    name: 'log',
    plugins: 'viewport',

    requires: [
        // This will automatically load all classes in the log namespace
        // so that application classes do not need to require each other.
        'log.*'
    ],

    // The name of the initial view to create.
    mainView: 'log.view.main.Main'
});