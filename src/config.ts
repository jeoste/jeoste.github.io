export const SITE = {
  website: "https://jeoste.github.io/", // replace this with your deployed domain
  author: "jeoste",
  profile: "https://github.com/jeoste",
  desc: "My personal website",
  title: "jeoste",
  browserTitle: "jeoste", // Titre affiché dans l'onglet du navigateur
  ogImage: "astropaper-og.jpg",
  twitterSite: "", // e.g. "@your_handle" (optional)
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showBackButton: true, // show back button in post detail
  dynamicOgImage: true,
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  editPost: {
    enabled: false,
    url: "https://github.com/jeoste/jeoste.github.io/edit/main/", // Update if your repo path is different
    text: "Suggest changes",
  },
} as const;
