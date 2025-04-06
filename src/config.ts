export const SITE = {
  website: "https://jeoste.github.io/", // replace this with your deployed domain
  author: "jeoste",
  profile: "https://github.com/jeoste",
  desc: "Mon portfolio et blog personnel",
  title: "<span class='text-accent'>jeo</span>ffrey.<span class='text-accent'>ste</span>phan",
  browserTitle: "jeoste", // Titre affiché dans l'onglet du navigateur
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/jeoste/jeoste.github.io/edit/main/",
  },
  dynamicOgImage: true,
  lang: "fr", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Paris", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
