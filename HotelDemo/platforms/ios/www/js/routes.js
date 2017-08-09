angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.page2', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('tabsController.page3', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('tabsController.page4', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.page6', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('Bak', {
    url: '/page10',
    templateUrl: 'templates/Bak.html',
    controller: 'BakCtrl'
  })

  .state('tabsController.page8', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/page8.html',
        controller: 'page8Ctrl'
      }
    }
  })

  .state('tabsController.my', {
    url: '/page12',
    views: {
      'tab4': {
        templateUrl: 'templates/my.html',
        controller: 'myCtrl'
      }
    }
  })

  .state('tabsController.page9', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/page9.html',
        controller: 'page9Ctrl'
      }
    }
  })

  .state('tabsController.page11', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/page11.html',
        controller: 'page11Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});