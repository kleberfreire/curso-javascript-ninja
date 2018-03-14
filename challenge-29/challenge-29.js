(function($) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
    var app;
    app = (function () {

        return {
            init: function () {
                this.companyInfo();
                this.initEvents();
            },

            companyInfo: function companyInfo() {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', 'http://localhost:63342/Curso_JS_Ninja/challenge-29/company.json');
                ajax.send(null);
                ajax.addEventListener('onreadystatechange', this.getCompanyInfo, false)

            },

            initEvents: function initEvents() {
               $('[data-js="form-carro"]').on('submit', this.handleSubmit);
               console.log('testando evento');

            },

            handleSubmit: function handleSubmit(event) {
                event.preventDefault();
                var $tableCar = $('[data-js="tabela-carro"]').get();
                $tableCar.appendChild( app.createNewCar() );
            },

            createNewCar: function createNewCar() {
                var $fragment = document.createDocumentFragment();
                var $tr = document.createElement('tr');
                var $td = document.createElement('td');
                var $tdImage = document.createElement('td');
                var $image = document.createElement('img');
                var $tdModelo = document.createElement('td');
                var $tdAno = document.createElement('td');
                var $tdPlaca = document.createElement('td');
                var $tdCor = document.createElement('td');

                $image.setAttribute( 'src', $('[data-js="img-carro"]').get().value );
                $tdImage.appendChild($image);

                $tdModelo.textContent = $('[data-js="marca-carro"]').get().value;
                $tdAno.textContent = $('[data-js="ano-carro"]').get().value;
                $tdPlaca.textContent = $('[data-js="placa-carro"]').get().value;
                $tdCor.textContent = $('[data-js="cor-carro"]').get().value;

                $tr.appendChild($tdImage);
                $tr.appendChild($tdModelo);
                $tr.appendChild($tdAno);
                $tr.appendChild($tdPlaca);
                $tr.appendChild($tdCor);

                return $fragment.appendChild($tr);
            },


            getCompanyInfo: function getCompanyInfo() {
                if (!app.isReady.call(this))
                    return;
                var data = JSON.parse(this.reponseText);
                var $companyName = $('[data-js="company-name"]');
                var $companyPhone = $('[data-js="company-phone"]');
                $companyName.textContent = data.name;
                $companyPhone.textContent = data.phone;

            },

            isReady: function isReady() {
                return this.readyState === 4 && this.status === 200
            },



        }
    })();
  app.init()

})(window.DOM);
