(function(win,doc){
	'user strict'
/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
function afterDomContentLoaded(){
	var fragment = doc.createDocumentFragment();

}

function DOM (elements){
this.element = doc.querySelectorAll(elements);
}	

DOM.prototype.on = function on (event, clallback){
	Array.prototype.forEach.call( this.element,function( button ){
		button.addEventListener(event,clallback,false);
	} );
};

DOM.prototype.off = function off (event, clallback){
	Array.prototype.forEach.call( this.element,function( button ){
		button.removeEventListener(event,clallback,false);
	} );
};

DOM.prototype.get = function get (){
	return this.element;
};

DOM.prototype.forEach = function forEach(){
	return Array.prototype.forEach.apply( this.element, arguments )
}
DOM.prototype.map = function map(){
	return Array.prototype.map.apply( this.element, arguments )
}

DOM.prototype.filter = function filter(){
	return Array.prototype.filter.apply( this.element, arguments )
}

DOM.prototype.reduce = function reduce(){
	return Array.prototype.reduce.apply( this.element, arguments )
}

DOM.prototype.reduceRight = function reduceRight(){
	return Array.prototype.reduceRight.apply( this.element, arguments )
}

DOM.prototype.every = function every(){
	return Array.prototype.every.apply( this.element, arguments )
}

DOM.prototype.some = function some(){
	return Array.prototype.some.apply( this.element, arguments )
}

DOM.prototype.isArray = function isArray (arr){
	return Object.prototype.toString.call(arr) === '[object array]' ? true : false ;
};

DOM.prototype.isObject = function isObject (obj){
	return Object.prototype.toString.call(obj) === '[object object]' ? true : false ;
};

DOM.prototype.isFunction = function isFunction ( func ){
	return Object.prototype.toString.call( func ) === '[object function]' ? true : false ;
};

DOM.prototype.isNumber = function isNumber ( number ){
	return Object.prototype.toString.call( number ) === '[object Number]' ? true : false;
};

DOM.prototype.isString = function isString (str){
	return Object.prototype.toString.call(str) === '[object String]' ? true : false ;
};


DOM.prototype.isBoolean = function isBoolean ( func ){
	return Object.prototype.toString.call( func ) === '[object Boolean]' ? true : false ;
};

DOM.prototype.isNull = function isNull ( nulo ){
	var aux = Object.prototype.toString.call( nulo ) 
	return aux === '[object Null]' || aux === '[object Undefined]'? true : false ;
};


var $a = new DOM('[data-js="link"]')


})(window,document);