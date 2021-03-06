var app = angular.module('blogger.factories', []);



app.factory('Post', ['$resource', function($resource) {
    return $resource('/api/posts/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
}]);

app.factory('User', ['$resource', function($resource) {
    return $resource('/api/users/:id');
}]);