angular.module('administrative-order', ['ionic', 'administrative-order.utils', 'administrative-order.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  
  .state('app.todo', {
    url: "/todo",
    views: {
      'menuContent': {
        templateUrl: "templates/todo.html"
      }
    }
  })
  
  .state('app.initial', {
    url: "/initial",
    views: {
      'menuContent': {
        templateUrl: "templates/initial.html"
      }
    }
  })
  
  .state('app.resources', {
    url: "/resources",
    views: {
      'menuContent': {
        templateUrl: "templates/resources.html"
      }
    }
  })
  
  // Level 1
  .state('app.level-1', {
    url: "/level-1",
    views: {
      'menuContent': {
        templateUrl: "templates/level-1/tof.html",
        controller: 'Level1Ctrl'
      }
    }
  })

  // Level 1 - Chapter 1
  .state('app.level-1-1', {
    url: "/level-1-1",
    views: {
      'menuContent': {
        templateUrl: "templates/level-1/1.html",
        controller: 'Level11Ctrl'
      }
    }
  })
  
  .state('app.level-1-1-1', {
    url: "/level-1-1-1",
    views: {
      'menuContent': {
        templateUrl: "templates/level-1/1-1.html"
      }
    }
  })

  .state('app.level-1-1-2', {
    url: "/level-1-1-2",
    views: {
      'menuContent': {
        templateUrl: "templates/level-1/1-2.html"
      }
    }
  })
  
  .state('app.level-1-1-3', {
    url: "/level-1-1-3",
    views: {
      'menuContent': {
        templateUrl: "templates/level-1/1-3.html"
      }
    }
  })

  .state('app.level-1-ref', {
    url: "/level-1-ref",
    views: {
      'menuContent': {
        templateUrl: "templates/level-1/ref.html"
      }
    }
  })  
  
  $urlRouterProvider.otherwise('/app/initial');
});