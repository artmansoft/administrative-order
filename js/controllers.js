angular.module('administrative-order.controllers', [])

.controller('AppCtrl', function($scope, common) {
  $scope.levels = [
    { title: common.cn('سطح 1 (کلاس دهم)'), url: '#/app/level-1' },
    { title: common.cn('سطح 2 (کلاس یازدهم)'), url: '#/app/todo' },
    { title: common.cn('سطح 3 (کلاس دوازدهم)'), url: '#/app/todo' },
	{ title: common.cn('منابع'), url: '#/app/resources' }
  ];
})

.controller('Level1Ctrl', function($scope) {
  $scope.chapters = [
    { title: 'جايگاه نظم اداري بهايي', url: '#/app/level-1-1'},
    { title: 'جايگاه مشورت در امر بهايي', url: '#/app/todo' }
  ];
})

.controller('Level11Ctrl', function($scope) {
  $scope.sections = [
    { title: 'روح نظم اداري بهايي و تفاوت آن با اديان گذشته', url: '#/app/level-1-1-1'},
    { title: 'هدف و نقش نظم اداري', url: '#/app/level-1-1-2' },
	{ title: 'لزوم اطاعت از تشکيلات', url: '#/app/level-1-1-3' },
	{ title: 'فهرست منابع', url: '#/app/level-1-ref' }
  ];
})
