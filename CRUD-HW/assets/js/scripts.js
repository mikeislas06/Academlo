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

const tbody = document.getElementById("tbody");

const renderList = () => {
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

renderList();
