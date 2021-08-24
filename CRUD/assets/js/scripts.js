const form = document.getElementById("main-form");
const usersContainer = document.getElementById("usersContainer");
const modalContent = document.getElementById("modalContent");

// Variables útlies

const users = [
  {
    nombre: "Daniel",
    ocupacion: "Front End",
  },
  {
    nombre: "Miguel",
    ocupacion: "Front End",
  },
  {
    nombre: "Jorge",
    ocupacion: "UX/UI",
  },
];

// Funciones

// Función para crear registros
const createUser = (e) => {
  // No ejecute su comportamiento por defecto
  e.preventDefault();

  // Crear un objeto con la informacion de los inputs
  let user = {
    nombre: document.getElementById("name").value,
    ocupacion: document.getElementById("job").value,
  };

  // Agregamos el objeto al arreglo
  users.push(user);
  renderList();
};

//Función encargada de mostrar todos los usuarios
const renderList = () => {
  usersContainer.innerHTML = "";
  if (users.length > 0) {
    users.forEach((user, index) => {
      //Creamos el contenedor principal para el usuario
      const userContainer = document.createElement("div");
      userContainer.classList.add("userItem");

      //Creamos el contenedor y el contenido para la información del usuario
      const userInfo = document.createElement("div");
      userInfo.classList.add("userInfo");

      const userInfoName = document.createElement("h4");
      const userInfoJob = document.createElement("h4");

      userInfoName.innerText = user.nombre;
      userInfoJob.innerText = user.ocupacion;

      //Creamos el contenedor y el contenido para los botones de acción
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("actions");

      const updateButton = document.createElement("button");
      const deleteButton = document.createElement("button");

      updateButton.innerText = "Editar";
      updateButton.classList.add("update");
      updateButton.id = "edit" + index;
      deleteButton.innerText = "Eliminar";
      deleteButton.classList.add("delete");

      //Eventos a los botones
      //Eliminar
      deleteButton.onclick = () => deleteUser(index);

      //Editar
      updateButton.onclick = () => editUser(index);

      //Agregar al respectivo container
      usersContainer.appendChild(userContainer);
      userContainer.appendChild(userInfo);
      userInfo.appendChild(userInfoName);
      userInfo.appendChild(userInfoJob);
      userContainer.appendChild(buttonContainer);
      buttonContainer.appendChild(updateButton);
      buttonContainer.appendChild(deleteButton);
    });
  }
};

//Funcion para eliminar registros
const deleteUser = (index) => {
  users.splice(index, 1);
  renderList();
};

//Funcion para editar registro
const editUser = (index) => {
  console.log(users[index]);
  modal.style.display = "block";
  const inputName = document.createElement("input");
  const labelName = document.createElement("label");
  const inputJob = document.createElement("input");
  const labelJob = document.createElement("label");
};

// Eventos
document.addEventListener("DOMContentLoaded", renderList);
form.onsubmit = createUser;
console.log(users);

//Modal script
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
