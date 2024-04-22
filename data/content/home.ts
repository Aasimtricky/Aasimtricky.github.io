type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
  },
  {
    title: "Trello",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg",
  },
  {
    title: "AdobeXd",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
  },
  {
    title: "Sketch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    title: "WooCommerce",
    icon: "https://www.svgrepo.com/show/354569/woocommerce-icon.svg",
  },
  {
    title: "Notion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    title: "Slack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
  },
  {
    title: "Asana",
    icon: "https://www.svgrepo.com/show/473547/asana.svg",
  },
  {
    title: "Crunchbase",
    icon: "https://www.svgrepo.com/show/305916/crunchbase.svg",
  },
  {
    title: "GoogleAnalytics",
    icon: "https://www.svgrepo.com/show/353804/google-analytics.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];
