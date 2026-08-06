// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Reverse-chronological. First-author work is starred and featured on the home page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "Research and engineering roles across spaceflight, robotics, and manufacturing.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Research and outreach talks on robotic manipulation, dexterous hands and wrists, and the path into engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-personal-projects",
          title: "Personal Projects",
          description: "A decade of my personal engineering projects, written up in varying levels of detail.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My full CV: education, research, publications, and engineering experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Reach me by email or send a quick note with the form below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-dexwrist-a-robotic-wrist-for-constrained-and-dynamic-manipulation",
        
          title: 'DexWrist: A Robotic Wrist for Constrained and Dynamic Manipulation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Project page for DexWrist, a compliant, back-drivable 2-DoF robotic wrist for constrained and dynamic manipulation.",
        section: "Posts",
        handler: () => {
          
            window.open("https://martinpeticco.com/dexwrist/", "_blank");
          
        },
      },{id: "news-accepted-to-the-mit-marine-robotics-summer-school-mit-portugal",
          title: 'Accepted to the MIT Marine Robotics Summer School (MIT–Portugal).',
          description: "",
          section: "News",},{id: "news-presented-dexwrist-at-the-rss-2025-dexterous-manipulation-workshop",
          title: 'Presented DexWrist at the RSS 2025 Dexterous Manipulation Workshop.',
          description: "",
          section: "News",},{id: "news-gave-a-research-talk-to-incoming-mit-students-at-discover-mechanical-engineering",
          title: 'Gave a research talk to incoming MIT students at Discover Mechanical Engineering.',
          description: "",
          section: "News",},{id: "news-selected-for-the-2026-robotelite-summer-school-at-the-university-of-southern-denmark",
          title: 'Selected for the 2026 RobotElite Summer School at the University of Southern Denmark....',
          description: "",
          section: "News",},{id: "news-received-my-s-m-from-mit-thesis-hardware-priors-for-dexterous-robotic-manipulation",
          title: 'Received my S.M. from MIT (thesis: Hardware Priors for Dexterous Robotic Manipulation).',
          description: "",
          section: "News",},{id: "news-presented-dexwrist-talk-and-poster-and-a-karma-poster-at-nems-2026-new-england-manipulation-symposium",
          title: 'Presented DexWrist (talk and poster) and a KaRMA poster at NEMS 2026 (New...',
          description: "",
          section: "News",},{id: "news-karma-was-accepted-to-iros-2026",
          title: 'KaRMA was accepted to IROS 2026.',
          description: "",
          section: "News",},{id: "projects-portable-wii",
          title: 'Portable Wii',
          description: "A Nintendo Wii re-engineered into a single-cable tablet",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_portable_wii/";
            },},{id: "projects-combat-robot-tombstone-replica",
          title: 'Combat Robot — Tombstone Replica',
          description: "A 30 lb &quot;Battlebots&quot;-style spinner",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_combat_robot/";
            },},{id: "projects-life-size-dalek",
          title: 'Life-size Dalek',
          description: "A 6 ft Doctor Who Dalek for a themed party",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_dalek/";
            },},{id: "projects-sumo-robot-me72",
          title: 'Sumo Robot (ME72)',
          description: "3 kg robot that pushes 100+ kg, 1st place at Caltech",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_sumo_robot/";
            },},{id: "projects-domino-placing-robot",
          title: 'Domino Placing Robot',
          description: "A 5-DoF arm that lays out user-drawn domino patterns",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_domino_robot/";
            },},{id: "projects-drones-part-107",
          title: 'Drones + Part 107',
          description: "A phone-camera drone and an ultra-compact GoPro Karma competitor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_drones/";
            },},{id: "projects-3-axis-camera-gimbal",
          title: '3-Axis Camera Gimbal',
          description: "A DIY brushless phone stabilizer, for a fraction of the price",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_gimbal/";
            },},{id: "projects-3d-printing-amp-design",
          title: '3D Printing &amp;amp; Design',
          description: "One-off parts and machines for everything else",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_3d_printing/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=AED82XMAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-1494-9042", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mfpeticco", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/martinpeticco", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://improbableai.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
