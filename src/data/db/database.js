import Mock from "../mock";

const database = {
  information: {
    name: 'Zion Brown',
    aboutContent: "As a Full Stack developer I use powerful technologies to develop intuitive code for applications/websites. I recently earned a certificate in Full Stack Development from UNC Charlotte, my initial education was on Javascript however it carried with it portable knowledge, I can research new technologies and languages on my own. My goal is to expand my learning on to other languages as well as maintaining continuous growth in the understanding of the ones I already know, I am proud of everything I create and I put my best into it, and my best will continue to improve.",
    age: 20,
    phone: '704-968-2695',
    nationality: 'American',
    language: 'English',
    email: 'zabs95@gmail.com',
    address: '8001 Ponderosa Pine Lane, Charlotte, NC',
    freelanceStatus: '',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/zion-brown-2559b793/',
      dribbble: '',
      github: 'https://github.com/LardianGH'
    },
    brandImage: '/images/zb-logo.jpg',
    aboutImage: '/images/myself.jpg',
    aboutImageLg: '/images/myself.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    
  ],
  reviews: [
    {
      id: 1,
      content: "Waiting for letter",
      author: {
        name: 'Darin Boesch',
        designation: 'Bootcamp Instructor'
      }
    },
    {
      id: 2,
      content: "Waiting for letter",
      author: {
        name: 'Kevin Fauth',
        designation: 'Bootcamp Instructor'
      }
    },
    {
      id: 3,
      content: "Waiting for letter",
      author: {
        name: 'Kevin Fauth',
        designation: "Bootcamp Teacher Assistant"
      }
    }
  ],
  skills: [
    {
      title: "Javascript",
      value: 85
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 90
    },
    {
      title: "MongoDB with Mongoose",
      value: 80
    },
    {
      title: "SQL with Sequelize",
      value: 65
    },

    {
      title: "Thinking these skill bar things are dumb",
      value: 250
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "GroupLearn",
      subtitle: "Mern Stack app. Form study groups with other people in your area.",
      imageUrl: "/images/grouplearn-menu.png",
      largeImageUrl: ["/images/grouplearn-menu.png"],
      url: 'https://grouplearn-pj3.herokuapp.com/'
    },
    {
      id: 2,
      title: "Taria Bot",
      subtitle: "A node inquirer text based assistant.",
      imageUrl: "/images/taria-menu.png",
      largeImageUrl: [
        "/images/taria-menu.png",
        "/images/taria-menu.png"
      ],
      url: 'https://github.com/LardianGH/taria-bot'
    },
    {
      id: 3,
      title: "Starwars RPG",
      subtitle: "An text based, extended universe Starwars themed, fighting RPG using jquery.",
      imageUrl: "/images/starwars.png",
      largeImageUrl: ["/images/starwars.png"],
      url: 'https://lardiangh.github.io/unit-4-game/'
    }
  ],
  experience: {
    workingExperience: [
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2020",
        graduation: "Fullstack Developer",
        university: "UNC Charlotte",
        details: "A 24 week fullstack development bootcamp"
      }
    ]
  },
  blogs: [

  ],
  contactInfo: {
    phoneNumbers: ['Cell: 704-968-2695', 'Home: 980-299-7321'],
    emailAddress: ['zabs95@gmail.com'],
    address: "8001 Ponderosa Pine Lane"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});