(function () {
    'use strict';
    angular
        .module('formlyApp', ['formly', 'formlyBootstrap'])
        .controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.contactFields = [
            {
                key  : 'name',
                type : 'input',
                templateOptions: {
                    type        : 'text',
                    label       : 'Full Name',
                    placeholder : 'Enter your full name',
                    required    : true,
                }
            },
            {
                key  : 'email',
                type : 'input',
                templateOptions : {
                    type        : 'email',
                    label       : 'Email Address',
                    placeholder : 'Enter your email',
                    required    : true
                }
            }
        ];
        vm.model = [
            awesome: true
        ];
    }

}());
