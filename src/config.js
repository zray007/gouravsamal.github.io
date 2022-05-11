module.exports = {
  siteTitle: 'Gourav Samal',
  siteDescription:
    'Chandrika Deb is a Software Developer at Amdocs, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Gourav Samal, Gourav, Samal, zray, developer, engineer, meta, content creator, gaming, web developer, NITR, NIT, NIT Rourkela, Rourkela',
  siteUrl: 'https://chandrikadeb7.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Chandrika Deb',
  location: 'Jamshedpur, India',
  email: 'samalgourav2000@gmail.com',
  github: 'https://github.com/zray007',
  twitterHandle: '@chandrikadeb7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/zray007',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gourav-samal/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/chandrikadeb7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_gourav_samal_/?hl=en',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/samal_gourav',
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
