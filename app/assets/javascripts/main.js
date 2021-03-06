(function (requirejs) {
    'use strict';

    // -- RequireJS config --
    requirejs.config({
        // Packages = top-level folders; loads a contained file named 'main.js"
        packages: ['common', 'home', 'person', 'event', 'contact', 'account', 'user'],
        shim: {
            'jsRoutes': {
                deps: [],
                // it's not a RequireJS module, so we have to tell it what var is returned
                exports: 'jsRoutes'
            },
            // Hopefully this all will not be necessary but can be fetched from WebJars in the future
            'angular': {
                deps: ['jquery'],
                exports: 'angular'
            },
            underscore: {
                exports: '_'
            },
            'angular-route': ['angular'],
            'angular-cookies': ['angular'],
           /* 'angular-animate': ['angular'],*/
            'angular-growl': ['angular'],
            'ng-table': ['angular'],
            'bootstrap': ['jquery'],
            'ui-bootstrap': ['angular']
        },
        paths: {
            'requirejs': ['../lib/requirejs/require'],
            'underscore': ['../lib/underscorejs/underscore'],
            'jquery': ['../lib/jquery/jquery'],
            'angular': ['../lib/angularjs/angular'],
            'angular-route': ['../lib/angularjs/angular-route'],
            'angular-cookies': ['../lib/angularjs/angular-cookies'],
            /*'angular-animate': ['libs/angularjs/angular-animate'],*/
            'angular-growl': ['../lib/angular-growl-2/angular-growl'],
            'bootstrap': ['../lib/bootstrap/js/bootstrap'],
            'ui-bootstrap': ['../lib/angular-ui-bootstrap/ui-bootstrap-tpls'],
            'ng-table': ['../lib/ng-table/ng-table'],
            'jsRoutes': ['/jsroutes']
        }
    });

    requirejs.onError = function (err) {
        console.log(err);
    };

    // Load the app. This is kept minimal so it doesn't need much updating.
    require(['angular', 'angular-cookies', 'angular-route', 'jquery', 'bootstrap', 'angular-growl', 'underscore', './app'],
        function (angular) {
            angular.bootstrap(document, ['app']);
        }
    );
})(requirejs);
