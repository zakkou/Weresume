import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "Hamdi Baklouti",
    summary:
      "Software engineer obsessed with building exceptional products that people love",
    email: "test@gmail.com",
    phone: "00123-45-678-900",
    location: "SO,TUN",
    url: "your_url",
    url_github: "github.com/username",
    url_linkedin: "linkedin.com/in/user_profile"
  },
  workExperiences: [
    {
      company: "ABC Company",
      jobTitle: "Software Engineer",
      date: "May 2023 - Present",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
    {
      company: "DEF Organization",
      jobTitle: "Software Engineer",
      date: "May 2022 - May 2023",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
    {
      company: "XYZ Company",
      jobTitle: "Software Engineer",
      date: "May 2021 - May 2022",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
  ],
  educations: [
    {
      school: "XYZ University",
      degree: "Bachelor of Science in Computer Science",
      date: "Sep 2018 - Aug 2022",
      gpa: "8.55",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
  ],
  projects: [
    {
      project: "Project1",
      date: "Fall 2021",
      descriptions: [
        "Contributed and Collaborated with cross functional teams to build the scalable product consumned by larger audiences",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "Python", rating: 3 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
    ],
    descriptions: [
      "Tech: React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  custom: {
    descriptions: [],
  },
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
};
