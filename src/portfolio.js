import emoji from "react-easy-emoji";

const greeting = {
  username: "Nur Alam",
  title: "Hi, I'm Nur Alam",
  subTitle: emoji("A passionate Competitive Programmer & Software Developer 🚀 having an experience of building Web applications with JavaScript / NodeJS / ReactJS and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1xh4tIbOr2Cl7wDMOC-DYKkfQUYKbZXQ2/view?usp=sharing"
};

// Your Social Media Link
const socialMediaLinks = {
  github: "https://github.com/nuralam24",
  linkedin: "https://www.linkedin.com/in/nuralam024/",
  gmail: "nuralamcse024@gmail.com",
  facebook: "https://www.facebook.com/Nuralamcse/",
  medium: "https://www.stopstalk.com/user/profile/nur_alam",
  stackoverflow: "https://stackoverflow.com/users/12930536/nur-alam"
};

// Your Skills Section
const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop Restful API & highly interactive User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    }
  ]
};

// Your education background
const educationInfo = {
  viewEducation: true,
  schools: [
    {
      schoolName: "Eastern University",
      logo: require("./assets/images/eastern.png"),
      subHeader: "BSC in Computer Science & Engineering",
      duration: "September 2015 - October 2019"
    }
  ]
}


const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Competitive Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",  
      progressPercentage: "58%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "68%"
    },
    {
      Stack: "DataBase",
      progressPercentage: "65%"
    }
  ]
};


// Your top 3 work experiences
const workExperiences = {
  viewExperiences: true, 
  experience: [
    {
      role: "Full Stack (JavaScript) Developer",
      company: "Star IT Ltd",
      companylogo: require("./assets/images/starit.png"),
      date: "March 2020 – Present",
      desc: "Developed Restful API, Admin Panel & Deployment. Technology: Node.js, Express.js, Hapi.js, React.js, Redux, Next.js, MongoDB & Material UI",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Full Stack (JavaScript) Developer",
      company: "MeedEz Ltd",
      companylogo: require("./assets/images/meedez.png"),
      date: "Dec 2019 – February 2020",
      desc: "Ecommerce website Bug fixes, new features added & Maintenance. Technology: Node.js, Express.js, React.js, Redux, Next.js, MongoDB."
    }
  ]
};


const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "nuralam24", 
  showGithubProfile :"true" 
};


// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Projects",
  subtitle: "Click to see the project details",
  projects: [
    {
      image: require("./assets/images/digital.png"),
      link: "https://www.digitalpathshalabd.com/"
    },
    {
      image: require("./assets/images/com.png"),
      link: "https://github.com/nuralam24/Ecommerce-site"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More
const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award",

  achievementsCards: [
    {
      title: "CodeForces Expert Coder",
      subtitle: "CodeForces 100+ Live contest & achieved 1639 max rating. Good knowledge in data-structures and algorithms.",
      image: require("./assets/images/codeforces.png"),
      footerLink: [
        { name: "Profile Link", url: "https://codeforces.com/profile/nuralamcse024" }
      ]
    },
    {
      title: "Google Kick Start",
      subtitle: "Google Kick-Start Coding Competition Round-C. 17th-May-2020. place: (1182nd place out of 10104).",
      image: require("./assets/images/google-kick.png"),
      footerLink: [{ name: "Certificate", url: "https://drive.google.com/file/d/1CwEKYGNrHVe_rNLftQe4UN7IUiqVfj4_/view?usp=sharing" }]
    }
  ]
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "This is my javascript blog.",
  blogs: [
    {
      url: "http://jsnur.blogspot.com/",
      title: "jsnur.blogspot.com",
      description: "Welcome to the jsnur blog to get all kinds of JavaScript resources"
    }
  ]
};

// Talks Sections
const talkSection = {
  title: "TALKS",

  talks: [
    {
      title: "Connect to me ",
      subtitle: "You can contact me on Facebook.",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/Nuralamcse/"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801627-077257",
  email_address: "nuralamcse024@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo };
