'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */
angular.module('angularTec1App')
  .controller('MainCtrl', function ($scope) {
  	var modelo={
  		libros:[{id: 1,titulo: "Life of Pi",autor: "Yann Martel",editorial:"Mariner Books", isbn : "0547848412", anioP : 2012,
                numEdi : "9780547848419", pasta : "Alemana", costo : "255 MXN", proveedor : "Proveedor 1",
                usuario : "José Ballesteros", estatus: false, fecha : "25/Febrero/2017"},
        {id: 2, titulo: "The Great Gasby",autor: "F. Scott Fitzgerald",editorial:"Rooster Books Limited", isbn : "9781871510195",
          anioP : 2014, numEdi : "9781871510195", pasta : "Holandesa", costo : "431 MXN", proveedor : "Proveedor 3",
                usuario : "Yukio Tsuru", estatus: true, fecha : "25/Febrero/2017"}]
  	};
  	$scope.modelo = modelo;

    $scope.addLibro = function(libro){
      if(libro.id == undefined || libro.id == null){
        $scope.modelo.libros.push({id:$scope.modelo.libros.length + 1,titulo: libro.titulo,autor: libro.autor,
          editorial: libro.editorial, isbn : libro.isbn, anioP : libro.anioP,
          numEdi : libro.numEdi, pasta : libro.pasta, costo : libro.costo, proveedor : libro.proveedor,
          usuario : "José Ballesteros", estatus: false, fecha : "25/Febrero/2017"});
      }else{
        $scope.libroInput = null;
      }
    }

    $scope.editarLibro = function(libro){
      $scope.libroInput = libro;
    }

    $scope.borrarLibro = function(libro){
      $scope.modelo.libros.splice($scope.modelo.libros.indexOf(libro),1);
    }

  });
