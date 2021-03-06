'use strict';

/**
 * @ngdoc function
 * @name app.route:gefeature3Route
 * @description
 * # gefeature3Route
 * Route of the github explorer app feature 3
 * @author Antoine Drabble
 * @author Guillaume Serneels
 */

angular.module('gefeature3')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('gefeature3', {
				url: '/gefeature3',
				templateUrl: 'app/modules/gefeature3/gefeature3.html',
				controller: 'Gefeature3Ctrl',
				controllerAs: 'vm'
			});

	}]);
