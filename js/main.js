const root = document.getElementById('root');

// Creamos el formulario
let formulario = document.createElement("form");

root.append(formulario) // Une el form al #root del HTML

// Creamos el campo de nombre
let labelNombre = document.createElement("label");
labelNombre.for = "nombre";
labelNombre.innerHTML = "Nombre:";
let inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.id = "nombre";
inputNombre.name = "nombre";
inputNombre.required = true;

// Creamos el campo de apellido
let labelApellido = document.createElement("label");
labelApellido.for = "apellido";
labelApellido.innerHTML = "Apellido:";
let inputApellido = document.createElement("input");
inputApellido.type = "text";
inputApellido.id = "apellido";
inputApellido.name = "apellido";
inputApellido.required = true;

// Creamos el campo de correo electrónico
let labelEmail = document.createElement("label");
labelEmail.for = "email";
labelEmail.innerHTML = "Correo electrónico:";
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.name = "email";
inputEmail.required = true;

// Creamos el campo de celular
let labelCelular = document.createElement("label");
labelCelular.for = "celular";
labelCelular.innerHTML = "Celular:";
let inputCelular = document.createElement("input");
inputCelular.type = "tel";
inputCelular.id = "celular";
inputCelular.name = "celular";
inputCelular.required = true;

// Creamos el botón de submit
let inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
inputSubmit.value = "Registrar";

// Añadimos los elementos al formulario
formulario.append(labelNombre);
formulario.append(inputNombre);
formulario.append(labelApellido);
formulario.append(inputApellido);
formulario.append(labelEmail);
formulario.append(inputEmail);
formulario.append(labelCelular);
formulario.append(inputCelular);
formulario.append(inputSubmit)
