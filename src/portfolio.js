const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'JA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jose Alberto',
  role: 'FullStack Developer',
  description:
    'Hi there! Im a fullStack developer with a passion for creating robust, scalable and secure web applications. My experience includes designing and implementing APIs, microservices, databases and server-side logic and app web. As well as real-time administrative web pages.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jose-zamarripa',
    github: 'https://github.com/Albertzam',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Administrative web application for Point sale',
    description:
      'This system allows users to process sales transactions, inventory movements in real time. This system is event oriented so it feeds an application made in electron that consumes the queued events.',
    stack: ['TypeScript', 'React', 'Redux', 'Socket.io', 'RTK Query'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Point of sale',
    description:
      'This project consumes the events given by the administrative web issuing confirmation or failed events to the backend to retry to send or continue with the queued events.',
    stack: [
      'TypeScript',
      'React',
      'Electron',
      'Express',
      'Redux',
      'Socket.io',
      'RTK Query',
      'Prisma',
      'Sqlite',
    ],
  },
  {
    name: 'Api and microservices for POS',
    description:
      'Is server central for communication web and Electron App, where the web performs actions, the backend receives it and we create the events to the connected points of sale in real time.',
    stack: [
      'NestJs',
      'Microservices',
      'TypeScript',
      'Socket.io',
      'MongoDb',
      'Docker',
      'Redis',
      'BullMq',
      'Nats',
    ],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'NestJs',
  'Socket.io',
  'Docker',
  'Microservices',
  'Message Broker',
  'BullMq',
  'Test integration',
  'Test end to end',
  'Express',
  'Electron',
  'HTML',
  'CSS',
  'TypeScript',
  'React',
  'Redux',
  'RTK Query',
  'Material UI',
  'Git',
  'CI/CD (Basic)',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'josealbertozm@hotmail.com',
}

export { header, about, projects, skills, contact }
