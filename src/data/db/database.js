import Mock from "../mock";

const database = {
  information: {
    name: 'Zion Brown',
    aboutContent: `
    As a Full Stack developer I use powerful technologies to develop intuitive code for applications/websites. 
    I am certified in Full Stack Development by UNC Charlotte, 
    My goal is to expand my learning on to other languages as well as maintaining continuous growth in the
    ones I already know. My plan to achieve this goal is to further my knowledge
    in React to an advanced level first by working with best practices in my current and future projects, 
    then begin working in Angular to have a good grasp
    on the differences between the Javascript frameworks, before moving on to Java and Python in my journey
    to become a well rounded, but proficient Developer. I am proud of everything I create and I put my best into it, 
    and my best will continue to improve.`,
    phone: '704-968-2695',
    email: 'zabs95@gmail.com',
    freelanceStatus: '',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      instagram: 'https://www.instagram.com/reboot_assigned/',
      linkedin: 'https://www.linkedin.com/in/zion-brown-2559b793/',
      dribbble: '',
      github: 'https://github.com/LardianGH'
    },
    brandImage: '/images/zb-logo.jpg',
    aboutImage: '/images/myself.jpg',
    aboutImageLg: '/images/myself.jpg',
    cvfile: '/files/Zion-resume.pdf'
  },
  services: [
    
  ],
  reviews: [
    {
      id: 1,
      content: "Zion is an extremely talented individual and challenges himself to apply technical concepts very quickly. As one of Zion's teaching assistants during the UNC Charlotte Coding Bootcamp, I saw him excel at the course's activities, homework assignments and three group projects. He always submitted high-quality code and web applications, asked compelling questions during class and added additional requirements to his applications in order to further solidify his knowledge. He also collaborated well with the other students and exhibited a natural curiosity about the material. Zion worked very hard in this program and provided himself an excellent foundation for the start of his technical career. I know he will be a top-performing software developer no matter where he works.",
      author: {
        name: 'Emily Armstrong',
        designation: "Bootcamp Teacher Assistant"
      }
    }
  ],
  skills: [
    {
      title: "Javascript",
      
    },
    {
      title: "Cascading Style Sheets",
      
    },
    {
      title: "ReactJS",
      
    },
    {
      title: "MongoDB with Mongoose",
     
    },
    {
      title: "NodeJS",
    
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "GroupLearn",
      subtitle: "Mern Stack app. Form study groups with other people in your area.",
      imageUrl: "/images/grouplearn-menu.png",
      largeImageUrl: ["/images/grouplearn-menu.png"],
      url: 'https://github.com/LardianGH/Grouplearn',
      url2: 'https://grouplearn.herokuapp.com/'
    },
    {
      id: 2,
      title: "Starwars RPG",
      subtitle: "A click based, extended universe Star Wars themed, fighting RPG using jquery.",
      imageUrl: "/images/starwars.png",
      largeImageUrl: ["/images/starwars.png"],
      url: 'https://github.com/LardianGH/Starwars-RPG',
      url2: 'https://lardiangh.github.io/Starwars-RPG/'
    },
    {
      id: 4,
      title: "Taria Bot",
      subtitle: "A node inquirer text based assistant, deployment not possible but videos are available.",
      imageUrl: "/images/taria-menu.png",
      largeImageUrl: ["/images/taria-menu.png"],
      url: 'https://github.com/LardianGH/taria-bot'
    },
   
   {
      id: 3,
      title: "Sound-Community",
      subtitle: "Mern Stack app in progress, An online community-driven soundboard.",
      imageUrl: "/images/sc-browse.png",
      largeImageUrl: ["/images/sc-browse.png"],
      url: 'https://github.com/LardianGH/sound-community',
      url2: 'https://sound-community.herokuapp.com/'
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