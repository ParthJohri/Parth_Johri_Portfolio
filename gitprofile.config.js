// gitprofile.config.js

const config = {
  github: {
    username: 'ParthJohri',
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], 
    },
  },
  social: {
    linkedin: 'parthjohri07',
    twitter: 'complexpj',
    facebook: '',
    instagram: '',
    youtube: 'COLLEGEINSIDER07',  
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    skype: '',
    telegram: '',
    website: 'https://parthjohri.github.io',
    phone: '',
    email: 'parthjohri31@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1fpAnbgrx4lu30Id-bIgShJ2F1aHSIYTU/view?usp=share_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'Java',
    'Kotlin',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'HTML',
    'CSS',
    'Tailwind',
    'Bootstrap',
    'Python',
    'Selenium',
    'Beautiful Soup',
    'MongoDB',
    'SQLite',
    'Typescript',
    'AWS',
    'Google Cloud'
  ],
  experiences: [
    {
      company: 'Testbook',
      position: 'Content Strategist - MERN Stack Intern',
      from: 'October 2022',
      to: 'November 2022',
      companyLink: 'https://testbook.com/',
    },
    {
      company: 'Toppr',
      position: 'Content Writer Intern',
      from: 'July 2021',
      to: 'October 2021',
      companyLink: 'https://www.toppr.com/',
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
      institution: 'Delhi Technological University',
      degree: 'Degree',
      cgpa: '9.53',
      from: '2020',
      to: '2024',
    },
    {
      institution: "St. Peter's College",
      degree: 'XII',
      cgpa:'97.25%',
      from: '2017',
      to: '2019',
    },
    {
      institution: "St. Peter's College",
      degree: 'X',
      cgpa:'96.20%',
      from: '2013',
      to: '2017',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  // ],
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
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

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
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with ❤️ by<a 
      class="text-primary" href="https://www.linkedin.com/in/parthjohri07/"
      target="_blank"
      rel="noreferrer"
    >Parth Johri</a>`,
};

export default config;
