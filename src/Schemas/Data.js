export const Data = {
  profile: {
    name: "Hrishikesh Patil",
    ocupation: "FullStack Software Developer",
    location: "Bangalore, India",
    email: "hrishikeshpatil.754@gmail.com",
    telephone: "+91 9448478823",
    image: "images/me.jpg",
  },
  aboutMe: {
    label: "Profile",
    description:
      "Experienced Senior Developer with a demonstrated history of working in the information technology and services industry. Graduated with a Bachelor of Engineering  in Electrical and Electronics Engineering from Birla Institute of Technology and Science, Pilani - Goa Campus. ",
  },
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Skills",
    technicalSkills: [
      "React",
      "Nodejs",
      "Nextjs",
      "Linux",
      "CI/CD",
      "Rust",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Java",
      "Spring Boot",
      "Git",
      "ESP32/ESP8266",
    ],
    softSkills: [
      "Problem solving",
      "Critical thinking",
      "Communication",
      "Teamwork",
      "Mentorship",
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Visit profile of Hrishikesh Patil on LinkedIn",
        name: "linkedin",
        url: "https://www.linkedin.com/in/riskycase",
        className: "bxl-linkedin-square",
      },
      {
        label: "Visit profile of Hrishikesh Patil on GitHub",
        name: "github",
        url: "https://github.com/riskycase",
        className: "bxl-github",
      },
    ],
  },
  experience: {
    works: [
      {
        title: "Software Development Engineer Intern",
        period: "July 2023 - December 2023",
        company: "Amazon.com Inc",
        description: [
          "Added refund ARN information to transactions screen in AU region for customers to track refund status directly with the bank.",
          "Estimated to reduce 30K customer support tickets in AU/SG region and approximately 4.7MN customer support tickets globally.",
          "Used Java and Groovy in backend and Scala for frontend.",
        ],
      },
      {
        title: "Summer Intern",
        period: "June 2022 - July 2022",
        company: "Shalaka Connected Devices LLP",
        description: [
          "Used python plugin for VLC media player to make digital screen controller.",
          "Deployed to 100 factory floors with about 350 screens",
          "Used Python on Raspberry Pi and HiveMQ MQTT server to control VLC instance which is broadcasted to digital display",
        ],
      },
    ],
    academic: [
      {
        career: "Bachelor’s in Electrical and Electronics Engineering",
        period: "2020 - 2024",
        grade: "8.07/10 CGPA",
        institution:
          "Birla Institute of Technology and Science Pilani, Goa Campus",
      },
    ],
    proyects: [
      {
        name: "HD44780 and AHT21 unified I2C driver for Raspberry Pi",
        description: [
          "Linux device driver which uses I2C protocol to communicate with a temperature sensor and LCD display.",
        ],
      },
      {
        name: "Pipelined 5 staged MIPS compatible processor",
        description: [
          "5 staged MIPS compatible processor, which supports forwarding, stall and branch prediction written in verilog.",
        ],
      },
      {
        name: "Auto-campnet",
        link: "https://github.com/Devsoc-BPGC/auto-campnet/",
        description: [
          "Desktop application developed using the Tauri framework in Rustlang",
          "Allows automated login in laptops to on campus wifi for all 4000+ students of BITS Goa Campus",
        ],
      },
      {
        name: "MQTT-Mock Application",
        link: "https://mqtt-mock.riskycase.in/",
        description: [
          "WebSocket server implemented in NodeJS, demonstrating the concept of topic based publisher-subscriber communication model.",
          "Emulated popular MQTT protocol implemented by brokers like HiveMQ",
        ],
      },
      {
        name: "Linkscape",
        link: "https://linkscape.riskycase.in/",
        description: [
          "ReactJS based web application which allows any student to add relevant links about any academic courses.",
          "Used by 12K+ students in all BITS campuses.",
        ],
      },
    ],
  },
};
