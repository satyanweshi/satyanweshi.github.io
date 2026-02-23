// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications-and-patents",
          title: "publications and patents",
          description: "I have been fortunate enough to work with some great minds during my Research Engineering days. Below are some publications and patents by the team that I was part of.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Varun Sharma is an experienced technologist with experience building complex products in the domain of Finance, Healthcare, and Travel. He has spent time as a Research Engineer in the field of Distributed Computing. His current focus is on building enterprise AI platform that production ready and impact real KPIs for an enterprise.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-good-posts-feb-2026",
        
          title: "Good Posts - Feb 2026",
        
        description: "Articles worth reading",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/good-posts-feb-2026/";
          
        },
      },{id: "post-agentic-coding-improving-code-coverage",
        
          title: "Agentic Coding - Improving Code Coverage",
        
        description: "OpenCode Agentic Coding - Improving Code Coverage",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/agentic-coding-improving-coverage/";
          
        },
      },{id: "post-agentic-coding-personality-of-language-models",
        
          title: "Agentic Coding - Personality of Language Models",
        
        description: "OpenCode Agentic Coding - Personality of Language Models",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/personality-of-models/";
          
        },
      },{id: "post-notes-on-agentic-coding-opencode",
        
          title: "Notes on agentic coding - OpenCode",
        
        description: "OpenCode - Learning agentic coding",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/coding-agents-opencode/";
          
        },
      },{id: "post-learnings-in-2025",
        
          title: "Learnings in 2025",
        
        description: "Notes and takeaways from readings and explorations in 2025",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ai-takeaways-2025/";
          
        },
      },{id: "books-banaras-city-of-light",
          title: 'Banaras City of Light',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/banaras_city_of_light/";
            },},{id: "books-nehru-the-debates-that-defined-india",
          title: 'Nehru The Debates that Defined India',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/nehru_debates_that%20defined_india/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shvarun", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
