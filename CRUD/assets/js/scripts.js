const form = document.getElementById("main-form");
const usersContainer = document.getElementById("usersContainer");

// Variables útlies

const users = [];

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
  console.log(users);
};

//Función encargada de mostrar todos los usuarios
const renderList = () => {
  usersContainer.innerHTML = "";
  if (users.length > 0) {
    users.forEach((user) => {
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
      deleteButton.innerText = "Eliminar";
      deleteButton.classList.add("delete");

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

// Eventos
form.onsubmit = createUser;
console.log(users);
