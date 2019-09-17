import files from './components/FileLoader';
const content = {
  menubar: {
    left: [
      { text: 'Home', link: '#home', observed: true },
      { text: 'Portfolio', link: '#portfolio', observed: true },
      { text: 'Contact', link: '#contact', observed: true },
      { text: 'Resume', link: files.jasonsResume, target: "_blank" }
    ],
    right: [
      { text: 'Linkedin', icon: 'linkedin', link: 'https://www.linkedin.com/in/lujason2015/' },
      { text: 'GitHub', icon: 'github', link: 'https://github.com/Muosvr' },
      { text: 'Medium', icon: 'medium', link: 'https://medium.com/@jasonwu_49390' },
      { text: 'Twitter', icon: 'twitter', link: 'https://twitter.com/Muosvr' }
    ]
  },
  contact: {
    image: files.portrait,
    name: "Jason Wu",
    email: "lujason2015@gmail.com",

  },
  cards: [
    {
      name: "Menu Translator",
      description: "A mobile optimized AI-powered web app that instantly translates any restaurant menus to over 100 languages.",
      image: files.menuTranslator,
      links: {
        demo: "https://menu-translator.herokuapp.com/",
        repo: "https://github.com/Muosvr/menu-translation"
      }

    },
    {
      name: "Smart Task Scheduler",
      description: "An assistant that helps you intelligently and quickly schedule daily tasks based on priority stack and availability",
      image: files.smartTaskScheduler,
      links: {
        demo: "https://smarttaskscheduler.herokuapp.com/",
        repo: "https://github.com/Muosvr/smart-task-scheduler"
      }
    },
    {
      name: "Raspberry Pi Powered Self Driving Car",
      description: "Lane following using computer vision, machine learning, and video processing",
      image: files.selfDrivingCar,
      links: {
        repo: "https://github.com/Muosvr/mycar",
        "blog posts": "https://medium.com/@jasonwu_49390/how-to-build-a-self-driving-car-in-two-days-and-learn-about-deep-learning-8b8826baad4b"
      }
    },
    {
      name: "Game of Dice",
      description: "Multiplayer game based on web socket technology with real time game play, player log in, and game notification",
      image: files.gameOfDice,
      links: {
        repo: "https://github.com/Muosvr/gameofdice",
        "play game": "http://letsplaydice.herokuapp.com/"
      }
    },
    {
      name: "Movie Reviews Sentiment Analysis",
      description: "Perform NLP sentiment analysis on movie review data set from kaggle",
      image: files.sentimentAnalysis,
      links: {
        repo: "https://github.com/Muosvr",
        competition: "https://www.kaggle.com/c/movie-review-sentiment-analysis-kernels-only"
      }
    },
    {
      name: "Home Credit Default Risk Predictive Analytics",
      description: "Kaggle competition entry on evaluating home credit default risk using machine learning",
      image: files.homeCreditDefaultRisk,
      links: {
        repo: "https://github.com/Muosvr/home-credit-default-risk",
        competition: "https://www.kaggle.com/c/home-credit-default-risk"
      }

    },
    {
      name: "Nasdaq Stock Tracker",
      description: "Developed a financial tracker following the Agile Scrum methodology in collaboration with a team of developers",
      image: files.tradeTracker,
      links: {
        repo: "https://github.com/Muosvr/trade-tracker"
      }
    },
    {
      name: "Planet Understanding the Amazon from Space",
      description: "Competition entry of multi-label classification on satellite images using convolutional neural net",
      image: files.planet,
      links: {
        repo: "https://github.com/Muosvr/planet-understanding-the-amazon-from-space/blob/master/planet-understanding-the-amazon-from-space.ipynb"
      }
    }
  ]
}

const settings = {
  cardholder: {
    itemsPerRow: 3
  }
}

export { content, settings } 