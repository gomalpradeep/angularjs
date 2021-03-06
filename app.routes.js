'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'sections/home/home.tpl.html',
            controller: 'HomeController as home'

        })
        .when('/new_category', {
            templateUrl: 'sections/category/newcategory.tpl.html',
            controller: 'newcategoryController'
        })
        .when('/edit_category/:id',{
            templateUrl: 'sections/category/newcategory.tpl.html',
            controller: 'editcategoryController'
        })
        .when('/category', {
            templateUrl: 'sections/category/category.tpl.html',
            controller: 'categoryController as category'
        })
        .when('/new_product', {
            templateUrl: 'sections/product/newproduct.tpl.html',
            controller: 'newproductController'
        })
        .when('/edit_product/:id',{
            templateUrl: 'sections/product/newproduct.tpl.html',
            controller: 'editproductController'
        })
        .when('/product', {
            templateUrl: 'sections/product/product.tpl.html',
            controller: 'productController as product'
        })
        .when('/premieres', {
            templateUrl: 'sections/premieres/premieres.tpl.html',
            controller: 'PremieresController as premieres',
            resolve: {
                shows: function(ShowService) {
                    return ShowService.getPremieres();
                }
            }
        })
        .when('/search', {
            templateUrl: 'sections/search/search.tpl.html',
            controller: 'SearchController as search'
        })
        .when('/search/:query', {
            templateUrl: 'sections/search/search.tpl.html',
            controller: 'SearchController as search'
        })
        .when('/popular', {
            templateUrl: 'sections/popular/popular.tpl.html',
            controller: 'PopularController as popular',
            resolve: {
                shows: function(ShowService) {
                    return ShowService.getPopular();
                }
            }
        })
        .when('/view/:id', {
            templateUrl: 'sections/view/view.tpl.html',
            controller: 'ViewController as view',
            resolve: {
                show: function(ShowService, $route) {
                    return ShowService.get($route.current.params.id);
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
}