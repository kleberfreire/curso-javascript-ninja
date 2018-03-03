(function(){
/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');

function iniciar(){
  initEventButton();
  
}

function initEventButton(){
  Array.prototype.forEach.call($buttonsNumbers, function(button) {
    button.addEventListener('click', handleClickNumber, false);
  });
  Array.prototype.forEach.call($buttonsOperations, function(button) {
    button.addEventListener('click', handleClickOperation, false);
  });

  $buttonCE.addEventListener('click', handleClickCE, false);
  $buttonEqual.addEventListener('click', handleClickEqual, false);
}

function handleClickNumber() {
 ($visor.value === '0') ? $visor.value = this.value : $visor.value += this.value;
}

function handleClickOperation() {
  removeLastItemIfItIsAnOperator()
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = 0;
}

function isLastItemAnOperation() {
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = $visor.value.split('').pop();
  return operations.some(function(operations) {
    return operations === lastItem;
  });
}

function removeLastItemIfItIsAnOperator() {
  if(isLastItemAnOperation()) {
    $visor.value = $visor.value.slice(0, -1);
  }
}

function handleClickEqual() {
  removeLastItemIfItIsAnOperator()
  var allNumbers = $visor.value.split(/[+÷x\-]/);
  var allOperadores = $visor.value.match(/[+÷x\-]/g);
  var i =0;
  var result = allNumbers.reduce(function(accumulated, actual,index) {
    if(i <= allOperadores.length)
      i++
    return calculos(accumulated,actual, allOperadores[i-1]);    
  });
  return $visor.value = result;
}

function calculos(accumulated,actual,operator){
  switch(operator) {
    case '+':
      return +accumulated + +actual ;
    case '-':
      return +accumulated - +actual;  
    case 'x':
      return +accumulated * +actual;
    case '÷':
      return +accumulated / +actual;
  }
}



iniciar();

})();