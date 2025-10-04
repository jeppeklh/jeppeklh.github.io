import type { SkillCategory } from "../types/skills";
import type { Language } from "../context/LanguageContext";

type LocalizedSkillItem = {
  name: string;
  iconUrl: string;
  borderClass?: string;
  invertOnDark?: boolean;
  whiteBg?: boolean;
  flip?: boolean;
  backText?: Record<Language, string>;
};

type LocalizedSkillCategory = {
  title: Record<Language, string>;
  items: LocalizedSkillItem[];
  topMargin?: boolean;
};

const categories: LocalizedSkillCategory[] = [
  {
    title: {
      da: "Programmeringssprog",
      en: "Programming Languages",
    },
    items: [
      {
        name: "C#",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        borderClass: "border-csharp",
        flip: true,
        backText: {
          da: "Stærk i objektorienteret programmering og backend-udvikling i C#.",
          en: "Strong in object-oriented programming and backend development in C#.",
        },
      },
      {
        name: "Python",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        borderClass: "border-python",
        flip: true,
        backText: {
          da: "Jeg har brugt Python til machine learning-projekter og databehandling og har erfaring med at bygge services til integration.",
          en: "I have used Python for machine learning projects and data processing and have experience building integration services.",
        },
      },
      {
        name: "JavaScript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        borderClass: "border-js",
        flip: true,
        backText: {
          da: "Jeg har erfaring med JavaScript til både web- og native-udvikling",
          en: "I have experience with JavaScript for both web and native development.",
        },
      },
      {
        name: "TypeScript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        borderClass: "border-typescript",
        flip: true,
        backText: {
          da: "Jeg har brugt TypeScript i React-projekter for at sikre bedre struktur og færre fejl.",
          en: "I have used TypeScript in React projects to ensure better structure and fewer bugs.",
        },
      },
    ],
  },
  {
    title: {
      da: "Frameworks & Libraries",
      en: "Frameworks & Libraries",
    },
    topMargin: true,
    items: [
      {
        name: ".NET",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        borderClass: "border-dotnet",
        flip: true,
        backText: {
          da: "Jeg har arbejdet med .NET til at udvikle stabile backend-løsninger med REST API’er og databaseintegration.",
          en: "I have worked with .NET to build robust backend solutions with REST APIs and database integrations.",
        },
      },
      {
        name: "Blazor",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png",
        borderClass: "border-blazor",
        flip: true,
        backText: {
          da: "Jeg har udviklet webapplikationer i Blazor, hvor C# frontend er koblet tæt til backend-logikken.",
          en: "I have built web applications in Blazor where the C# frontend is tightly connected to the backend logic.",
        },
      },
      {
        name: "WPF",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
        borderClass: "border-wpf",
        flip: true,
        backText: {
          da: "Jeg har bygget desktopværktøjer i WPF, blandt andet til planlægnings- og administrationssystemer.",
          en: "I have created desktop tools in WPF, including planning and administration systems.",
        },
      },
      {
        name: "React",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        borderClass: "border-react",
        flip: true,
        backText: {
          da: "Jeg har arbejdet med React til moderne frontend-udvikling med fokus på komponentstruktur og brugeroplevelse.",
          en: "I have worked with React for modern frontend development with a focus on component structure and user experience.",
        },
      },
      {
        name: "Node.js",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        borderClass: "border-node",
        flip: true,
        backText: {
          da: "Jeg har anvendt Node.js til server-side logik og API-udvikling i fullstack-projekter.",
          en: "I have used Node.js for server-side logic and API development in fullstack projects.",
        },
      },
      {
        name: "Express",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        borderClass: "border-express",
        invertOnDark: true,
        flip: true,
        backText: {
          da: "Jeg har udviklet simple REST API’er i Express til integration med frontend og eksterne services.",
          en: "I have developed straightforward REST APIs in Express for integrations with frontends and external services.",
        },
      },
    ],
  },
  {
    title: {
      da: "Databaser",
      en: "Databases",
    },
    topMargin: true,
    items: [
      {
        name: "SQL Server",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        borderClass: "border-mssql",
        flip: true,
        backText: {
          da: "Jeg har modelleret og optimeret databaser i SQL Server, ofte i forbindelse med .NET-projekter.",
          en: "I have modelled and optimised databases in SQL Server, often alongside .NET projects.",
        },
      },
      {
        name: "MySQL",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        borderClass: "border-mysql",
        flip: true,
        backText: {
          da: "Jeg har brugt MySQL i webprojekter til håndtering af relationelle data.",
          en: "I have used MySQL in web projects to handle relational data.",
        },
      },
      {
        name: "MongoDB",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        borderClass: "border-mongo",
        flip: true,
        backText: {
          da: "Jeg har anvendt MongoDB i prototyper, hvor en fleksibel datastruktur var nødvendig.",
          en: "I have used MongoDB in prototypes where a flexible data structure was required.",
        },
      },
    ],
  },
  {
    title: {
      da: "DevOps & Cloud",
      en: "DevOps & Cloud",
    },
    topMargin: true,
    items: [
      {
        name: "Docker",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        borderClass: "border-docker",
        flip: true,
        backText: {
          da: "Jeg har brugt Docker til containerisering af services og til at gøre deployment mere ensartet.",
          en: "I have used Docker to containerise services and make deployment more consistent.",
        },
      },
      {
        name: "GitHub Actions",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        borderClass: "border-actions",
        invertOnDark: true,
        flip: true,
        backText: {
          da: "Jeg har opsat CI/CD pipelines i GitHub Actions til at automatisere test og deployment.",
          en: "I have set up CI/CD pipelines in GitHub Actions to automate testing and deployment.",
        },
      },
      {
        name: "Azure",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        borderClass: "border-azure",
        flip: true,
        backText: {
          da: "Jeg har erfaring med at deploye webapps og databaser i Azure.",
          en: "I have experience deploying web apps and databases in Azure.",
        },
      },
      {
        name: "Git",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        borderClass: "border-git",
        flip: true,
        backText: {
          da: "Jeg har arbejdet med Git til versionsstyring og samarbejde i alle mine projekter.",
          en: "I have used Git for version control and collaboration in all of my projects.",
        },
      },
      {
        name: "Postman",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        borderClass: "border-postman",
        flip: true,
        backText: {
          da: "Jeg har brugt Postman til at designe, teste og dokumentere API’er.",
          en: "I have used Postman to design, test, and document APIs.",
        },
      },
    ],
  },
  {
    title: {
      da: "Data Science & ML",
      en: "Data Science & ML",
    },
    topMargin: true,
    items: [
      {
        name: "TensorFlow",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        borderClass: "border-ai",
        flip: true,
        backText: {
          da: "Jeg har eksperimenteret med neurale netværk og billedgenkendelse i TensorFlow.",
          en: "I have experimented with neural networks and image recognition in TensorFlow.",
        },
      },
      {
        name: "Scikit-learn",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        borderClass: "border-scikit",
        flip: true,
        backText: {
          da: "Jeg har brugt Scikit-learn til klassiske ML-modeller som regression og clustering i projekter.",
          en: "I have used scikit-learn for classical ML models such as regression and clustering in projects.",
        },
      },
      {
        name: "PyTorch",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        borderClass: "border-pytorch",
        flip: true,
        backText: {
          da: "Jeg har bygget og trænet machine learning-modeller i PyTorch som en del af min specialisering.",
          en: "I have built and trained machine learning models in PyTorch as part of my specialisation.",
        },
      },
    ],
  },
  {
    title: {
      da: "Web & UI",
      en: "Web & UI",
    },
    topMargin: true,
    items: [
      {
        name: "HTML",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        borderClass: "border-html",
        flip: true,
        backText: {
          da: "Jeg har brugt HTML som grundlag i alle webprojekter og har styr på semantisk struktur.",
          en: "I have used HTML as the foundation for all web projects and understand semantic structure.",
        },
      },
      {
        name: "CSS",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        borderClass: "border-css",
        flip: true,
        backText: {
          da: "Jeg har arbejdet med CSS til styling af webapps og har erfaring med responsive layouts.",
          en: "I have worked with CSS to style web apps and have experience with responsive layouts.",
        },
      },
    ],
  },
  {
    title: {
      da: "Monitoring & Analyse",
      en: "Monitoring & Analytics",
    },
    topMargin: true,
    items: [
      {
        name: "Grafana",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
        borderClass: "border-grafana",
        flip: true,
        backText: {
          da: "Jeg har opsat dashboards i Grafana til at visualisere logs og performance metrics.",
          en: "I have set up dashboards in Grafana to visualise logs and performance metrics.",
        },
      },
    ],
  },
];

export function getSkillCategories(language: Language): SkillCategory[] {
  return categories.map((category) => ({
    title: category.title[language],
    topMargin: category.topMargin,
    items: category.items.map((item) => ({
      name: item.name,
      iconUrl: item.iconUrl,
      borderClass: item.borderClass,
      invertOnDark: item.invertOnDark,
      whiteBg: item.whiteBg,
      flip: item.flip,
      backText: item.backText ? item.backText[language] : undefined,
    })),
  }));
}
