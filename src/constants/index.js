import { meta, shopify, starbucks, tesla } from "../assets_3d_portfolio/assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    aws,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript, 
    cpp, 
    java, 
    python
} from "../assets_3d_portfolio/assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "Amazon Web Services",
        type: "Cloud",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Dolphin Industries",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "July 2022 - August 2023",
        points: [
            "Designed an engaging and user-friendly UI with React and Typescript, implementing state management using  Redux, and exceeded initial user base projections by 12%, driving higher user engagement.",
            "Orchestrated deployment and management of cloud-native applications and Linux based virtual machines on the Amazon Web Services (AWS) platform, leveraging EC2, S3, Lambda, and RDS reducing operational costs by 30%.",
            "Developed robust RESTful APIs using Java and Spring Boot, and optimized API endpoints, resulting in a 13% reduction in ordering time. ",
            "Containerized microservices using Docker and defined multi-container applications with Docker Compose, resulting in a 15% reduction in server costs.",
            "Managed the software development lifecycle (SDLC) from requirements to deployment, improving delivery times by 25% and reducing defects by 20% through effective quality assurance.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Anicode Digital",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "May 2021 - July 2022",
        points: [
            "Created advanced full stack applications for local businesses, utilizing React for the frontend and Node.js for the backend, integrated with a mySQL database, leading to 15% increase in online sales.",
            "Utilized GitLab for version control and CI/CD, reducing deployment time by 20% and improving code integration. ",
            "Facilitated iterative collaboration with clients using agile methodologies, gathering project requirements, and resulting in a 16% reduction in development time",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/aayush237',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/aayush2378',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aayush-soni-/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Eventure',
        description: 'Developed a web application that enables booking tickets and management of events taking place across the colleg campus.',
        link: 'https://github.com/aayush2378/INFO-6150_GroupProject',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Scoresense',
        description: 'Created a football scoring application for users to be up to date on the scores and fixtures of their favorite football teams.',
        link: 'https://github.com/aayush2378/ScoreSense',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Mapz',
        description: 'Designed a full stack application enabling users to view location of various locations across the city on Google Maps.',
        link: 'https://github.com/aayush2378/TakeHome_SupplyTrace',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Blogging Application',
        description: 'Built a blogging application leveraging technologies like Spring Boot and Hibernate, enabling users to share their blogs on the go.',
        link: 'https://github.com/aayush2378/BlogSphere',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'iNotebook',
        description: 'Developed a real-time note-taking web application, designed to enhance productivity by allowing users to create, organize, and manage notes seamlessly.',
        link: 'https://github.com/aayush237/iNotebook',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'News-App',
        description: 'Developed an app that integrates with a news API to provide users with up-to-date news on the go, offering a seamless and personalized news experience.',
        link: 'https://github.com/aayush237/News-App',
    }
];