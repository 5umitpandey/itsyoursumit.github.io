module.exports = {
  siteTitle: 'Sumit Pandey | Data Scientist | Football Expert',
  siteDescription:
    'Sumit Pandey is an Aspiring Data Scientist in India, who loves Football and Music.',
  siteKeywords:
    'Sumit Pandey, Sumit, Pandey, sumitpandey, software developer, software engineer, data science, face mask, face mask detection, web developer, uber, epl, adypu',
  siteUrl: 'https://itsyoursumit.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sumit Pandey',
  location: 'Raigarh, India',
  email: 'spppandey252@gmail.com',
  github: 'https://github.com/itsyoursumit',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/itsyoursumit',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/itsyoursumit/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sumi1pandey',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
