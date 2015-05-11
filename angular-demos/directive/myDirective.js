directive = {
    "compile" : function compile(tElement, tAttrs, transclude) {},
    "link" : function linkFn(scope, element, attrs) {},
    "restrict" : 'A'|| 'E'|| 'AE',
    "name" : "name",
    "index" : 0,
    "priority" : 0,
    "require" : [],
    "controller": controllerFn,
    "transclude": true,
    "scope" : {
        customerInfo: '=info'
    },
    "template": 'Name: {{customer.name}} Address: {{customer.address}}',
    "templateUrl": 'my-customer.html'
}
