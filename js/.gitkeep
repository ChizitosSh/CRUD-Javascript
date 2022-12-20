
const root = document.getElementById("root");
let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
  ]

  const seccionUsers = document.createElement("section");
  seccionUsers.classList.add("container", "mt-5");
  root.append(seccionUsers)

const tabla = document.createElement("table");
tabla.classList.add("table");
tabla.setAttribute("border", "2");
seccionUsers.append(tabla);
crearTabla();
function crearTabla() {
  tabla.innerHTML = "";
  const thead = document.createElement("thead");
  tabla.append(thead);
  crearCabezadoUsuarios();
  construirCuerpo();
}

  
  //Botón Agregar
  const crearUsuario = document.createElement("section");
  seccionUsers.append(crearUsuario);
  const btnCrear = document.createElement("button");
  btnCrear.classList.add("btn", "btn-primary");
  btnCrear.textContent = "Crear Usuario";
  crearUsuario.append(btnCrear);
  btnCrear.addEventListener("click", () => {
    crearDatosUsuario(users);
    crearTabla();
  });


  //Botón Modificar
  const modificar = document.createElement("section");
  seccionUsers.append(modificar);
  const btnModificar = document.createElement("button");
  btnModificar.classList.add("btn", "btn-primary");
  btnModificar.textContent = "Modificar";
  modificar.append(btnModificar);
  btnModificar.addEventListener("click", () => {
    modificarDatos(users);
    crearTabla();
  });
  

function construirCuerpo(){
    for (const index in users){
        const tr = document.createElement("tr")
            for (const key in users[index]){
                const td = document.createElement("td")
                td.textContent = users[index][key]
                tr.append(td)
            }
        tabla.append(tr)
    }
}

function crearCabezadoUsuarios(){
    const encabezados = document.createElement("thead");
    const tr = document.createElement("tr");
    for (const key in users[0]){
        const th = document.createElement("th")
        th.textContent = key;
        th.style.cursor = "pointer";
        th.addEventListener("click", () =>{
            ordenarPorArgumento(key)
            tabla.innerHTML = ""
            tabla.append(encabezados)
            construirCuerpo()
        })
        tr.append(th)
    }
    
    encabezados.append(tr);
    tabla.append(encabezados);
    }


function crearDatosUsuario() {
    let datosUsuario = prompt(`Ingrese la información del usuario (nombre, apellido, edad, profesión)`);
    if(datosUsuario!==null){

    let usuarioArray = datosUsuario.split(", "); 
    let objeto ={id: id(),}
    objeto.nombre = usuarioArray[0];
    objeto.apellido = usuarioArray[1];
    objeto.edad = usuarioArray[2];
    objeto.profesion = usuarioArray[3];
    users.push(usuario);
  }
return users
}

function id(){
  let array = []
    users.map((argumento)=>{array.push(argumento.id)});

    let numeroMayor = Math.max();
    return numeroMayor + 1

  }

  function modificarDatos(argumento){
    let id = prompt(`Ingrese el id del usuario`);
    if(id==""){
      return "Para modificar debes ingresar el id"
    }
    let objeto = users
    argumento.forEach((user, i) => {
      if(user.id == id){
        objeto[i].nombre = prompt(`Nombre es:`);
        objeto[i].apellido = prompt(`Apellido es:`);
        objeto[i].edad = prompt(`Edad es:`);
        objeto[i].profesion = prompt(`Profesión es:`);
      }
      
    });

    users = objeto;
    return users;
  }
