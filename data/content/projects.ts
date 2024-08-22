import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Hardware Shack",
    desc: "Created India's Biggest Hardware online store.",
    img: "/static/projects/hardwareshack.png",
    link: "https://hardwareshack.in/",
    tags: ["SEO", "E-commerce management", "Data Analysis", "User Acquisition", "Brand development"],
  },
  {
    id: 1,
    title: "Hulu UX Research",
    desc: "Research on marketing strategies to attract and engage new users more effectively.",
    img: "/static/projects/hulu.png",
    link: "#",
    tags: ["Competitive analysis", "Growth Hacking", "Performance metrics", "Retention Strategies"],
  },
  {
    id: 2,
    title: "Marker Man",
    desc: "Platformer game with sketch art style",
    img: "/static/projects/markerman.png",
    link: "https://antelope-games.itch.io/marker-man",
    tags: ["Agile", "Roadmapping", "UI/UX Oversight", "Product strategy", "Feature Prioritization"],
  },
  {
    id: 3,
    title: "Ambur Online",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "/static/projects/amburonline.png",
    link: "https://amburonline.in",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
