export const portfolioData = {
  name: "Owen Duardo",
  title: "National Taiwan Ocean University",
  email: "owenduardo@gmail.com",
  location: "Keelung, Taiwan",
  bio: "Computer Science Student at National Taiwan Ocean University",
  skills: [
    "HTML", "CSS", "JavaScript", "Python",
    "UI/UX Design", "Power Point", "Excel",
    "Canva", "Word", "JAVA", "React"
  ],
  socialLinks: [
    
    { name: "LinkedIn", url: "https://www.linkedin.com/in/owen-duardo-%E9%99%B3%E5%85%89%E4%BE%86-46356735a/", icon: "linkedin" },
    { name: "Instagram", url: "https://www.instagram.com/owenduardo.m/", icon: "instagram" }
  ],
  experiences: [
    {
      id: 1,
      company: "Unimicron Tech",
      position: "Summership Internship",
      location: "Taoyuan, Taiwan",
      date: "June 2023 - August 2023",
      duration: "2 Months",
      skills: ["Teamwork", "English", "Mandarin", "Time management"],
      logo: "/images/unimicron.png" // Add your company logos here
    },
    {
      id: 2,
      company: "RAIN DANCE 雨舞餐廳 in Hotel Begins",
      position: "Waiters",
      location: "Keelung, Taiwan",
      date: "October 2023 - January 2024",
      duration: "4 months",
      skills: ["Mandarin", "Teamwork", "Time management"],
      logo: "/images/begins.png"
    },
    {
      id: 3,
      company: "National Taiwan Ocean University",
      position: "Campus Health Center",
      location: "Keelung, Taiwan",
      date: "October 2023 - June 2024",
      duration: "8 months",
      skills: ["Mandarin", "Teamwork", "Time management"],
      logo: "/images/ntou.png"
    },
    {
      id: 4,
      company: "Unimicron Tech",
      position: "Summership Internship",
      location: "Taoyuan, Taiwan",
      date: "June 2024 - September 2024",
      duration: "3 Months",
      skills: ["Teamwork", "English", "Mandarin", "Time management"],
      logo: "/images/unimicron.png" 
    },
    {
       id: 5,
      company: "Unimicron Tech",
      position: "Summership Internship",
      location: "Taoyuan, Taiwan",
      date: "June 2024 - September 2024",
      duration: "3 Months",
      skills: ["Teamwork", "English", "Mandarin", "Time management"],
      logo: "/images/unimicron.png" 
    },
    {
       id: 6,
      company: "Kfc",
      position: "Chef",
      location: "Keelung, Taiwan",
      date: "October 2024 - June 2025",
      duration: "9 Months",
      skills: ["Teamwork", "English", "Mandarin", "Time management"],
      logo: "/images/kfc.png" 
    },
    {
      id: 7,
      company: "Uber Eats",
      position: "Driver",
      location: "Taiwan",
      date: "May 2025 - Present ",
      skills: ["English", "Mandarin", "Time management"],
      logo: "/images/uber.png" 
    },
    
  ],
  projects: [
    {
      id: 1,
      title: "A New Breakthrough in Machine Learning",
      description: "XAI-Based Ransomware Detection",
      overview: [
          "Ransomware continues to grow as a major threat, often bypassing traditional signature-based defenses. Many machine-learning systems also act as 'black boxes,' providing no clarity on why a file is flagged, which limits user trust.",
          "Our project combines machine learning with Explainable AI (XAI) to create a detection system that is both accurate and transparent. By analyzing PE file structures, the model identifies malicious patterns and clearly explains the features behind each prediction, improving reliability and user understanding against emerging threats."
      ],
      date: "March 2025 - October 2025",
      duration: "7 months",
      role: "Front-end Developer",
      mainImage: "/images/web2.png", // For portfolio card
      images: [ // For modal gallery
      "/images/web1.png",
      "/images/web2.png", 
      "/images/web3.png"
      ],
      videoUrl: "#",
      tags: ["HTML", "CSS", "JavaScript"],
      features: [
        "Explainable AI (XAI) Integration",
        "Machine Learning Ensemble System",
        "PE File Structural Analysis",
        "User-Friendly Web Interface",
        "Transparency + Accuracy",
        "Clear System Flow",
        "Future Work"
      ],
      liveUrl: "#",
      codeUrl: "#",
      pptUrl: "#",
    },
    
    {
      id: 2,
      title: "News Aggregator",
      description: "Nouvelles, Your centralized platform for streamlined news. Aggregating diverse sources via API to deliver a custom, efficient reading experience.",
      overview: "The news aggregator project aims to streamline news consumption by providing a centralized platform for accessing articles from various sources about current events and topics of interest. Through web scraping and APIs, it aggregates content, offering users a convenient way to browse headlines, read articles, and customize their news feeds.The news aggregator caters to a diverse audience of individuals, professionals, and news enthusiasts who value convenience, eǌciency, and access to a wide range of news sources.",
      date: "Dec 2023 - Feb 2024",
      duration: "3 months",
      role: "Design, UI/UX, Testing",
      mainImage: "/images/news1.png", // For portfolio card
      images: [ // For modal gallery
      "/images/news1.png",
      "/images/news2.png", 
      ],
      videoUrl: "#",
      features: [
        "Multiple news source support",
        "Personalized news feeds",
        "Search functionality",
        "Bookmarking favorites articles",
        "News collection",
        "Translate English to Chinese",
        "Download the news articles directly to local storage"
      ],
      tags: ["Java"],
      liveUrl: "#",
      codeUrl: "#",
      pptUrl: "#",
    },
    {
      id: 3,
      title: "To do list web (TacheWave)",
      description: "TacheWave, task management and organize and prioritize your tasks, also  schedule your events.",
      overview: "This website project could help them in task management and let them organize and prioritize their tasks, also let them schedule their events. Give them an easy-to-use productivity tool website.",
      date: "Sep 2023 - Nov 2023",
      duration: "3 months",
      role: "Front-end Developer",
       mainImage: "/images/task.png", // For portfolio card
      images: [ // For modal gallery
      "/images/task1.png",
      "/images/task2.png", 
      "/images/task3.png", 
      "/images/task4.png", 
      ],
      videoUrl: "#",
      features: [
        "Task Management",
        "Persistence",
        "Sorted task by dates",
        "Event Reminder",
        "Podomoro timer for focus mode",
        "Daily Motivation quote",
        "Simple, clean , and user-friendly design"
      ],
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      codeUrl: "#",
      pptUrl: "#",
    },
    {
      id: 4,
      title: "Portfolio web",
      description: "Owen Duardo Portfolio",
      date: "December 2025",
      duration: "1 week",
      role: "Developer",
       mainImage: "/images/por.png", // For portfolio card
      images: [ // For modal gallery
      "/images/por1.png",
      "/images/por2.png", 
      "/images/por2.png", 
      ],
      videoUrl: "#",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
      liveUrl: "#",
      codeUrl: "#",
      pptUrl: "#",
    }
  ]
};