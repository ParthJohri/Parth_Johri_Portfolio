// gitprofile.config.js

const config = {
  github: {
    username: "parthjohri",
    sortBy: "updated", // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [],
    },
  },
  social: {
    linkedin: "parthjohri07",
    twitter: "complexpj",
    facebook: "",
    instagram: "",
    youtube: "COLLEGEINSIDER07",
    dribbble: "",
    behance: "",
    medium: "",
    dev: "",
    stackoverflow: "",
    skype: "",
    telegram: "",
    website: "https://parth-johri.vercel.app/",
    phone: "",
    email: "parthjohri31@gmail.com",
  },

  resume: {
    fileUrl:
      "https://drive.google.com/file/d/1fpAnbgrx4lu30Id-bIgShJ2F1aHSIYTU/view?usp=share_link", // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "C",
    "C++",
    "Java",
    "Kotlin",
    "JavaScript",
    "React.js",
    "Node.js",
    "MySQL",
    "Git",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Python",
    "Selenium",
    "Beautiful Soup",
    "MongoDB",
    "SQLite",
    "Typescript",
    "AWS",
    "Google Cloud",
  ],
  experiences: [
    {
      company: "Testbook",
      position: "Content Strategist - MERN Stack Intern",
      from: "October 2022",
      to: "November 2022",
      companyLink: "https://testbook.com/",
    },
    {
      company: "Toppr",
      position: "Content Writer Intern",
      from: "July 2021",
      to: "October 2021",
      companyLink: "https://www.toppr.com/",
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: "Delhi Technological University",
      degree: "B.Tech - ECE (Major) & COE (Minor)",
      cgpa: "9.53",
      from: "2020",
      to: "2024",
    },
    {
      institution: "St. Peter's College",
      degree: "XII",
      cgpa: "97.25%",
      from: "2017",
      to: "2019",
    },
    {
      institution: "St. Peter's College",
      degree: "X",
      cgpa: "96.20%",
      from: "2013",
      to: "2017",
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: "RMNotices",
      description:
        "This is DTU RM Portal Bot! 🤖 Are you looking for information on companies visiting DTU's Recruitment Management (RM) Portal? Look no further! This bot is designed to gather the latest information about companies accessing the DTU RM Portal, informing you with updated informations and prospects.",
      imageUrl: "robot.png",
      link: "https://github.com/ParthJohri/rm-whatsapp-bot",
    },
    {
      title: "Medicine Tracker",
      description:
        "Many a times we forget to take our medicines at the given time which would cause trouble in the long run. Moreover in this unexpected situation of COVID-19, tracking of mental and physical health is the most important task.This android application reminds the user to take it's medicines on time.",
      imageUrl: "medicine.png",
      link: "https://github.com/ParthJohri/Medicine-Tracker",
    },
    {
      title: "DTU Seat Alert",
      description:
        "Welcome to the DTU Seat Bot! Stay updated with the latest seat availability information for various courses at Delhi Technological University. Get real-time information on available seats for different subject codes and their respective groups. Whether you're a student planning your course selection.",
      imageUrl: "alert.png",
      link: "https://github.com/ParthJohri/DTU-SeatAlertBot",
    },
    {
      title: "Krishi Market",
      description:
        "This is a web application which will not only reduce the dependency of Farmers on Middlemen but also help them to sell their crops to retailers, wholesalers, consumers at a better price. Not only this but this web app would help them to keep track of all their transactions.",
      imageUrl: "farmer.png",
      link: "https://intrepid-axle-386617.el.r.appspot.com/",
    },
    {
      title: "Parth WBot",
      description:
        "This whatsapp helps you to invoke everyone in the group, with additional functionalities like downloading a youtube video or answering your queries.",
      imageUrl: "bot.png",
      link: "https://github.com/ParthJohri/Parth-Wbot",
    },
    {
      title: "Tip Calci",
      description:
        "This is tip calculator which would give you the total and tip value with some cool interaction feedback after entering the Bill amount with the tip percent. This app is made on Kotlin programming language.",
      imageUrl: "calculator.png",
      link: "https://github.com/ParthJohri/tip-calci",
    },
  ],
  // // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: "",
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: "synthwave",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "procyon",
    ],

    // Custom theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem",
    },
  },

  footer: `Made with ❤️ by<a 
      class="text-primary" href="https://www.linkedin.com/in/parthjohri07/"
      target="_blank"
      rel="noreferrer"
    > Parth Johri</a>`,
};

export default config;
