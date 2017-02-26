'use strict';

/**
 * @ngdoc filter
 * @name angularTec1App.filter:asistentes
 * @function
 * @description
 * # asistentes
 * Filter in the angularTec1App.
 */
angular.module('angularTec1App')
  .filter('asistentes', function () {
    return function (items, mostrarTodos) {
      //return 'asistentes filter: ' + input;
      var resultado=[];
      angular.forEach(items, function(item){
        if(item.estatus == false){
          mostrarTodos = true;
          resultado.push(item);
        }
      });
      return resultado;
    };
  });
