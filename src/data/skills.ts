import type { SkillCategory } from "../types/skills";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programmeringssprog",
    items: [
      {
        name: "C#",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        borderClass: "border-csharp",
        flip: true,
        backText:
          "Stærk i objektorienteret programmering og backend-udvikling i C#.",
      },
      {
        name: "Python",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        borderClass: "border-python",
        flip: true,
        backText:
          "Jeg har brugt Python til machine learning-projekter og databehandling og har erfaring med at bygge services til integration.",
      },
      {
        name: "JavaScript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        borderClass: "border-js",
        flip: true,
        backText:
          "Jeg har erfaring med JavaScript til både web- og native-udvikling",
      },
      {
        name: "TypeScript",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        borderClass: "border-typescript",
        flip: true,
        backText:
          "Jeg har brugt TypeScript i React-projekter for at sikre bedre struktur og færre fejl.",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    topMargin: true,
    items: [
      {
        name: ".NET",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        borderClass: "border-dotnet",
        flip: true,
        backText:
          "Jeg har arbejdet med .NET til at udvikle stabile backend-løsninger med REST API’er og databaseintegration.",
      },
      {
        name: "Blazor",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png",
        borderClass: "border-blazor",
        flip: true,
        backText:
          "Jeg har udviklet webapplikationer i Blazor, hvor C# frontend er koblet tæt til backend-logikken.",
      },
      {
        name: "WPF",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
        borderClass: "border-wpf",
        flip: true,
        backText:
          "Jeg har bygget desktopværktøjer i WPF, blandt andet til planlægnings- og administrationssystemer.",
      },
      {
        name: "React",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        borderClass: "border-react",
        flip: true,
        backText:
          "Jeg har arbejdet med React til moderne frontend-udvikling med fokus på komponentstruktur og brugeroplevelse.",
      },
      {
        name: "Node.js",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        borderClass: "border-node",
        flip: true,
        backText:
          "Jeg har anvendt Node.js til server-side logik og API-udvikling i fullstack-projekter.",
      },
      {
        name: "Express",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        borderClass: "border-express",
        invertOnDark: true,
        flip: true,
        backText:
          "Jeg har udviklet simple REST API’er i Express til integration med frontend og eksterne services.",
      },
    ],
  },
  {
    title: "Databaser",
    topMargin: true,
    items: [
      {
        name: "SQL Server",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        borderClass: "border-mssql",
        flip: true,
        backText:
          "Jeg har modelleret og optimeret databaser i SQL Server, ofte i forbindelse med .NET-projekter.",
      },
      {
        name: "MySQL",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        borderClass: "border-mysql",
        flip: true,
        backText:
          "Jeg har brugt MySQL i webprojekter til håndtering af relationelle data.",
      },
      {
        name: "MongoDB",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        borderClass: "border-mongo",
        flip: true,
        backText:
          "Jeg har anvendt MongoDB i prototyper, hvor en fleksibel datastruktur var nødvendig.",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    topMargin: true,
    items: [
      {
        name: "Docker",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        borderClass: "border-docker",
        flip: true,
        backText:
          "Jeg har brugt Docker til containerisering af services og til at gøre deployment mere ensartet.",
      },
      {
        name: "GitHub Actions",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        borderClass: "border-actions",
        invertOnDark: true,
        flip: true,
        backText:
          "Jeg har opsat CI/CD pipelines i GitHub Actions til at automatisere test og deployment.",
      },
      {
        name: "Azure",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        borderClass: "border-azure",
        flip: true,
        backText:
          "Jeg har erfaring med at deploye webapps og databaser i Azure.",
      },
      {
        name: "Git",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        borderClass: "border-git",
        flip: true,
        backText:
          "Jeg har arbejdet med Git til versionsstyring og samarbejde i alle mine projekter.",
      },
      {
        name: "Postman",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        borderClass: "border-postman",
        flip: true,
        backText:
          "Jeg har brugt Postman til at designe, teste og dokumentere API’er.",
      },
    ],
  },
  {
    title: "Data Science & ML",
    topMargin: true,
    items: [
      {
        name: "TensorFlow",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        borderClass: "border-ai",
        flip: true,
        backText:
          "Jeg har eksperimenteret med neurale netværk og billedgenkendelse i TensorFlow.",
      },
      {
        name: "Scikit-learn",
        iconUrl:
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        borderClass: "border-scikit",
        flip: true,
        backText:
          "Jeg har brugt Scikit-learn til klassiske ML-modeller som regression og clustering i projekter.",
      },
      {
        name: "PyTorch",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        borderClass: "border-pytorch",
        flip: true,
        backText:
          "Jeg har bygget og trænet machine learning-modeller i PyTorch som en del af min specialisering.",
      },
    ],
  },
  {
    title: "Web & UI",
    topMargin: true,
    items: [
      {
        name: "HTML",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        borderClass: "border-html",
        flip: true,
        backText:
          "Jeg har brugt HTML som grundlag i alle webprojekter og har styr på semantisk struktur.",
      },
      {
        name: "CSS",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        borderClass: "border-css",
        flip: true,
        backText:
          "Jeg har arbejdet med CSS til styling af webapps og har erfaring med responsive layouts.",
      },
    ],
  },
  {
    title: "Monitoring & Analyse",
    topMargin: true,
    items: [
      {
        name: "Grafana",
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
        borderClass: "border-grafana",
        flip: true,
        backText:
          "Jeg har opsat dashboards i Grafana til at visualisere logs og performance metrics.",
      },
    ],
  },
];
