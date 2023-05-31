import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import livecrickethub from "../assets/images/livecrickethub.png";
import CourseReview from "../assets/images/CourseReview.webp";
import ResumeBuilder from "../assets/images/ResumeBuilder.jpeg";
import SkyScrappers from "../assets/images/SkyScrappers.jpeg";
import TVMaze from "../assets/images/TVMaze.jpeg";
import TicketMaster from "../assets/images/TicketMaster.png";

const data = {
  name: "Rohith Reddy Gouni",
  title: "Full Stack Developer",
  university: "Stevens Institute of Technology",
  place: "Jersey City, New Jersey",
  email: "rgouni1@stevens.edu",
  phone: "5513596220",
  social: [
    {
      link: "https://github.com/RohithReddyGouni",
      text: "Github",
      profile: "RohithReddyGouni",
      icon: <GitHubIcon />,
    },
    {
      link: "https://www.linkedin.com/in/rohithreddygouni/",
      text: "LinkedIn",
      profile: "RohithReddyGouni",
      icon: <LinkedInIcon />,
    },
    {
      link: "https://leetcode.com/rohith4517/",
      text: "Leetcode",
      profile: "rohith4517",
      icon: <CodeIcon />,
    },
    {
      link: "https://rohithreddygouni.github.io/",
      text: "Website",
      profile: "RohithReddyGouni",
      icon: <LanguageIcon />,
    },
    {
      link: "https://twitter.com/rohith174518",
      text: "Twitter",
      profile: "RohithReddyGouni",
      icon: <TwitterIcon />,
    },
  ],

  aboutme:
    "Developer with a passion for solving challenging technical problems and building highly performant and scalable systems. Adaptable to new challenges and responsibilities. Passionate about technology, programming, and learning them. \n\n Highly motivated and ambitious graduate student, currently pursuing  Master’s degree in Computer Science at Stevens Institute of Technology. I posses strong passion for problem-solving and have demonstrated exceptional skills in a range of technologies, including Node.js, Express.js, React, J2EE, and DB2. Currently working as a Teaching Assistant for Software Development.",

  experiences: [
    {
      title: "Associate System Engineer",
      date: "July 2019 - July 2021",
      description:
        "•Coordinated with team in resolving inventory issues while moving from one warehouse to different warehouses\n\n. In addition, executed inbound and outbound operations in a warehouse. All these operations are done using Red Prairie and JDA Applications \n\n• Reconciled on fixing various application issues helped to identify mismatch of inventory quantities and functionality at warehouses \n\n• Utilized Lex edit tool to run various database operations across multiple warehouses, including data retrieval, manipulation, and analysis \n\n • Collaborated with cross-functional teams to identify and implement process improvements, reducing costs and increasing customer satisfaction",
    },
  ],

  education: [
    {
      title: "Masters in Computer Science",
      date: "Jan 2022 - Dec 2023",
      description:
        " Major: Computer Science\n\n Related Courses: CS546 - Web Development I, CS554 - Web Development II, CS561 - Database Management System, CS 524 - Cloud Computing, CS570 - DataStructures, CS590 - Algorithms, SSW500 - Software Development \n\n •	Worked as Graduate Teaching Assistant under Dr. Nafiseh Ghorbani for course Software Development: Conducted office hours, clarified students’ questions, and grading students’ mid-term and final project report and presentation",
    },
    {
      title: "Bachelors in Computer Science and Engineering",
      date: "Aug 2015 - May 2019",
      description: " Major: Computer Science and Engineering\n\n ",
    },
  ],

  skills: [
    {
      title: "Front-End",
      description: [
        "ReactJS",
        "Javascript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    { title: "Back-End", description: ["NodeJS", "Java", "Python", "J2EE"] },
    {
      title: "Databases",
      description: ["PostgreSQL", "DB2", "MongoDB", "Firebase"],
    },
    {
      title: "knowledge Areas",
      description: [
        "Git",
        "GitHub",
        "Jenkins",
        "Docker",
        "AWS",
        "Kubernetes",
        "Playwright",
        "Cypress",
        "SpringBoot",
      ],
    },
  ],

  projects: [
    {
      tag: "Live Cricket Hub",
      caption: "living and breathing cricket",
      imageUrl: livecrickethub,
      title: "Live Cricket Hub",
      description:
        "Live Cricket Hub is a web application that provides live cricket scores, commentary, and news. It also provides the user with the ability to search for a player and view their profile. The application is built using ReactJS, NodeJS, and MongoDB. The application is deployed on EC2.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        {
          link: "https://github.com/RohithReddyGouni/cs554-project",
          icon: <GitHubIcon />,
        },
        {
          link: "https://thirunaa.github.io/dsawebsite/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Ticket Booking System",
      caption:
        "A ticket booking system that allows users to book tickets for movies, concerts, and sports events.",
      imageUrl: TicketMaster,
      title: "Ticket Booking System",
      description:
        " A ticket booking system that allows users to book tickets for movies, concerts, and sports events. The application is built using ReactJS, NodeJS, and MongoDB.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        {
          link: "https://github.com/RohithReddyGouni/ticketHubMaster",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.kaggle.com/code/thirunaavukkarasu/random-forest-84-accuracy/notebook",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Course Review System",
      caption: "A course review system that allows users to review courses.",
      imageUrl: CourseReview,
      title: "Course Review System",
      description:
        " A course review system that allows users to review courses. The application is built using Javascript, NodeJS, and MongoDB.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        {
          link: "https://github.com/RohithReddyGouni/Course-Review-Rating",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Thirunaa/Data-Science-and-Machine-Learning/tree/master/Recommendation_System",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Resume Builder",
      caption:
        "A resume builder that allows users to build their Resume, CV and Cover letter.",
      imageUrl: ResumeBuilder,
      title: "Resume Builder",
      description:
        "A resume builder that allows users to build their Resume, CV and Cover letter. The application is built using Javascript, NodeJS, and MongoDB.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        {
          link: "https://github.com/RohithReddyGouni/Resume_Builder",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/Thirunaa/Design-6/blob/master/Design%20Search%20Autocomplete%20System.py",
          icon: <LanguageIcon />,
        },
      ],
    },

    {
      tag: "TV Maze",
      caption: " A web application that allows users to search for TV shows.",
      imageUrl: TVMaze,
      title: "TV Maze",
      description:
        " A web application that allows users to search for TV shows. The application is built using ReactJS, NodeJS, and MongoDB.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        {
          link: "https://github.com/RohithReddyGouni/tvMaze",
          icon: <GitHubIcon />,
        },
        {
          link: "https://thirunaa.github.io/ticketify/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: " Automating Code Maintenance for Web Skyscrapers",
      caption: "Deployed a web application on AWS using DevOps.",
      imageUrl: SkyScrappers,
      title: " Automating Code Maintenance for Web Skyscrapers",
      description:
        " Implemented an end-to-end DevOps solution using AWS and various tools to automate code maintenance for Web Skyscrapers. The project focused on integrating continuous integration and deployment practices to enhance the software development lifecycle.",
      links: [
        // { link: "https://www.google.com", icon: <YouTube /> },
        {
          link: "https://github.com/RohithReddyGouni/SkyScrappers",
          icon: <GitHubIcon />,
        },
        { link: "https://thirunaa.github.io/tvmaze/", icon: <LanguageIcon /> },
      ],
    },
  ],
};

let exportVariable = { data };

export default exportVariable;
