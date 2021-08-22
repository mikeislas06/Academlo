function countApplicationsByChannel(users) {
    let channels = [];
    const channelsObj = {};
    for (let i = 0; i < users.length; i++) {
        if(users[i].application != null){
            if(channels.indexOf(users[i].channel) !== -1){

            }
            else{
                channels.push(users[i].channel);
            }
        }
        
    }
    for (let i = 0; i < channels.length; i++) {
        channelsObj[channels[i]] = 0;
    }

    for (let i = 0; i < users.length; i++) {
        if(users[i].application != null){
            for (let j = 0; j < channels.length; j++) {
                if(users[i].channel === channels[j]){
                    channelsObj[channels[j]] = channelsObj[channels[j]] + 1;
                }
            }
        }
    }

    return channelsObj;
}

const users = [
  {
    name: "Andrea",
    email: "andrea@gmail.com",
    channel: "youtube",
    application: null,
  },
  {
    name: "Daniela",
    email: "daniela@gmail.com",
    channel: "youtube",
    application: { country: "Colombia", state: "Bogotá" },
  },
  {
    name: "Alondra",
    email: "alondra@gmail.com",
    channel: "twitter",
    application: { country: "Colombia", state: "Bogotá" },
  },
  {
    name: "Luis",
    email: "luisa@gmail.com",
    channel: "twitter",
    application: { country: "México", state: "Nuevo León" },
  },
];

console.log(countApplicationsByChannel(users));