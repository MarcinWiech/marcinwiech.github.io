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
        },{id: "nav-photographs",
          title: "photographs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photographs/";
          },
        },{id: "post-lucerne-steals-the-show",
      
        title: "Lucerne Steals the Show",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/switzerland/";
        
      },
    },{id: "post-becoming-friends-with-running",
      
        title: "Becoming friends with running",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/running/";
        
      },
    },{id: "post-devoxx-uk-2023",
      
        title: "Devoxx UK 2023",
      
      description: "The Developer Community Conference",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/devoxx/";
        
      },
    },{id: "post-visiting-sopot",
      
        title: "Visiting Sopot",
      
      description: "One of the coolest towns in northern Poland",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sopot/";
        
      },
    },{id: "news-a-simple-inline-announcement",
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
          section: "News",},{
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
