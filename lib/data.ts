export const siteConfig = {
  name: "Clinton",
  role: "Developer",
  tagline: "I build clean, fast web experiences.",
  bio: "TODO: Replace this bio with 2-3 sentences about you — what you build, what you care about, and what you're looking for next.",
  location: "Buea, Cameroon",
  email: "clintonlikuka@gmail.com",
  profileImage: "/clinton.jpg",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/101clinton" },
  { label: "LinkedIn", href: "https://linkedin.com/in/clintonlikuka" },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML & CSS",
  "Python",
  "Git & GitHub",
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "Project One — TODO",
    description: "TODO: 1-2 sentences — what it does, who it's for, and what you learned.",
    stack: ["Next.js", "TypeScript"],
    liveUrl: "TODO: https://example.com",
    repoUrl: "TODO: https://github.com/101clinton/your-repo",
  },
  {
    title: "Project Two — TODO",
    description: "TODO: 1-2 sentences — what it does, who it's for, and what you learned.",
    stack: ["React", "JavaScript"],
    liveUrl: "TODO: https://example.com",
    repoUrl: "TODO: https://github.com/101clinton/your-repo",
  },
  {
    title: "Project Three — TODO",
    description: "TODO: 1-2 sentences — what it does, who it's for, and what you learned.",
    stack: ["Python", "JavaScript"],
    liveUrl: "TODO: https://example.com",
    repoUrl: "TODO: https://github.com/101clinton/your-repo",
  },
];
