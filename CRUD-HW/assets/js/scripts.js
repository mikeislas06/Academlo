const users = [
  {
    nombre: "Daniel",
    correo: "daniel.academlo@gmail.com",
    pais: "México",
    social: [
      {
        nombre: "Facebook",
        url: "facebook.com/daniel",
      },
      {
        nombre: "Youtube",
        url: "youtube.com/daniel",
      },
    ],
  },
  {
    nombre: "Francisco",
    correo: "francisco.academlo@gmail.com",
    pais: "Venezuela",
    social: [
      {
        nombre: "Facebook",
        url: "facebook.com/francisco",
      },
      {
        nombre: "Youtube",
        url: "youtube.com/francisco",
      },
      {
        nombre: "Twitter",
        url: "twitter.com/francisco",
      },
    ],
  },
  {
    nombre: "Raul",
    correo: "raul.academlo@gmail.com",
    pais: "Colombia",
    social: [
      {
        nombre: "Facebook",
        url: "facebook.com/raul",
      },
      {
        nombre: "Youtube",
        url: "youtube.com/raul",
      },
    ],
  },
  {
    nombre: "Jorge",
    correo: "jorge.academlo@gmail.com",
    pais: "Chile",
    social: [
      {
        nombre: "Facebook",
        url: "facebook.com/jorge",
      },
      {
        nombre: "Youtube",
        url: "youtube.com/jorge",
      },
      {
        nombre: "Instagram",
        url: "instagram.com/jorge",
      },
      {
        nombre: "Github",
        url: "github.com/jorge",
      },
    ],
  },
];

//Crear una tabla con cualquier técnica (flex, grid, tables, divs) que muestre cada objeto del arreglo users

const createUser = (e) => {
  // No ejecute su comportamiento por defecto
  e.preventDefault();

  //Verificar Redes sociales seleccionadas
  let socialMedia = [];
  if (document.getElementById("Facebook").checked) {
    const social = {
      nombre: "Facebook",
      url: "facebook.com/" + document.getElementById("name").value,
    };
    socialMedia.push(social);
  }
  if (document.getElementById("Youtube").checked) {
    const social = {
      nombre: "Youtube",
      url: "youtube.com/" + document.getElementById("name").value,
    };
    socialMedia.push(social);
  }
  if (document.getElementById("Twitter").checked) {
    const social = {
      nombre: "Twitter",
      url: "twitter.com/" + document.getElementById("name").value,
    };
    socialMedia.push(social);
  }
  if (document.getElementById("Instagram").checked) {
    const social = {
      nombre: "Instagram",
      url: "instagram.com/" + document.getElementById("name").value,
    };
    socialMedia.push(social);
  }
  if (document.getElementById("Github").checked) {
    const social = {
      nombre: "Github",
      url: "github.com/" + document.getElementById("name").value,
    };
    socialMedia.push(social);
  }

  // Crear un objeto con la informacion de los inputs
  let user = {
    nombre: document.getElementById("name").value,
    correo: document.getElementById("email").value,
    pais: document.getElementById("country").value,
    social: socialMedia,
  };

  // Agregamos el objeto al arreglo
  users.push(user);
  renderList();

  //Limpiar campos
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("country").value = "";
  document.getElementById("Facebook").checked = false;
  document.getElementById("Youtube").checked = false;
  document.getElementById("Twitter").checked = false;
  document.getElementById("Instagram").checked = false;
  document.getElementById("Github").checked = false;
};

const tbody = document.getElementById("tbody");

const renderList = () => {
  tbody.innerHTML = "";
  if (users.length > 0) {
    users.forEach((user) => {
      const userRow = document.createElement("tr");
      const userName = document.createElement("td");
      const userEmail = document.createElement("td");
      const userCountry = document.createElement("td");
      const userSocial = document.createElement("td");

      user.social.forEach((social) => {
        const socialMedia = document.createElement("span");
        const socialContainer = document.createElement("a");
        const socialIcon = document.createElement("i");

        switch (social.nombre) {
          case "Facebook":
            socialIcon.classList = "fab fa-facebook-square fb-color";
            break;
          case "Twitter":
            socialIcon.classList = "fab fa-twitter-square tw-color";
            break;
          case "Youtube":
            socialIcon.classList = "fab fa-youtube-square yt-color";
            break;
          case "Github":
            socialIcon.classList = "fab fa-github-square gh-color";
            break;
          case "Instagram":
            socialIcon.classList = "fab fa-instagram-square ig-color";
            break;
        }

        socialContainer.setAttribute("href", social.url);
        socialContainer.appendChild(socialIcon);
        socialMedia.appendChild(socialContainer);
        userSocial.appendChild(socialMedia);
      });

      userName.innerText = user.nombre;
      userEmail.innerText = user.correo;
      userCountry.innerText = user.pais;

      userRow.appendChild(userName);
      userRow.appendChild(userEmail);
      userRow.appendChild(userCountry);
      userRow.appendChild(userSocial);
      tbody.appendChild(userRow);
    });
  }
};

const form = document.getElementById("main-form");

// Eventos
renderList();
form.onsubmit = createUser;
