angular.module('starter.controllers', [])

.controller('PageController', function($location, $scope, $http) {

  $scope.dados = {};

  $scope.enviar = function() {
    $http.post('http://192.168.100.189:8080/registrar-email', $scope.dados).then(function(resposta) {
      $scope.mensagem= "E-mail enviado com sucesso !";
    }, function(resposta) {
      if(resposta.status == 503){
        $scope.mensagem = "Tente novamente mais tarde, estamos com problema no servidor !";
      }
    })
  }

  // $scope.messageWeb = function () {
  //   var text = "DESENVOLVER WEB";
  //   var textChar = Array.from(text);
  //   for (var i = 0; i < textChar.length; i++) {
  //     $scope.textMSG = $scope.textMSG + textChar[i];
  //   }
  // }

  // while(0 < 1){
  //   $scope.messageWeb();
  // }
})
