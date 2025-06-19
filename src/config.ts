export const SITE = {
  website: "https://jeoste.github.io/", // replace this with your deployed domain
  author: "jeoste",
  profile: "https://github.com/jeoste",
  desc: "My personal website",
  title: "<span class='text-accent'>jeo</span>ffrey.<span class='text-accent'>sté</span>phan",
  browserTitle: "jeoste", // Titre affiché dans l'onglet du navigateur
  //ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  dynamicOgImage: true,  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  editPost: {
    enabled: false,
    url: "https://github.com/jeoste/jeoste.github.io/edit/main/", // Update if your repo path is different
    text: "Suggest changes",
  },
} as const;
