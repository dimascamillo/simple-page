let menu = document.getElementById('menu');
let createSpan = document.createElement('span')
let form = document.querySelector('form')

function openMenu() {
  if (menu.classList.contains("disabled")) {
    menu.classList.remove("disabled")
    menu.classList.add("active");
  } else if (!menu.classList.contains("disabled")) {
    menu.classList.remove("active")
    menu.classList.add("disabled");
  }
}

function closedMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active")
    menu.classList.add("disabled");
  } else if (!menu.classList.contains("disabled")) {
    menu.classList.remove("disabled")
    menu.classList.add("active");
  } 
}

function addSpanError () {
  form.appendChild(createSpan);
}

function validityForm() {
  let inputNome = document.getElementById('inputNome');
  let inputEmail = document.getElementById('inputEmail');
  let inputTelefone = document.getElementById('inputTelefone');

  if(inputNome.value == "") {
    inputNome.classList.add('error');
    createSpan.innerText = "Preencha o campo Nome corretamente!"
  } else if(inputEmail.value == "") {
    inputEmail.classList.add('error');
    createSpan.innerText = "Preencha o campo Email corretamente!"
  } else if (inputTelefone.value == "") {
    inputTelefone.classList.add('error');
    createSpan.innerText = "Preencha o campo Telefone corretamente!"
  } else {
    inputNome.classList.remove('error');
    inputEmail.classList.remove('error');
    inputTelefone.classList.remove('error');
    createSpan.innerText = "Mensagem enviada com sucesso!"
  }
}

addSpanError();