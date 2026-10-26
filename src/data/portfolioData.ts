export interface SkillItem {
  icon: string
  name: string
}

export interface WorkProject {
  image: string
  title: string
  category: string
}

export interface DetailProject {
  id: string
  menuTitle: string
  role: string
  company: string
  period: string
  responsibilities: string[]
}

export const skillsData: SkillItem[] = [
  { icon: "6313e.svg", name: "Figma" },
  { icon: "23018.svg", name: "Laravel" },
  { icon: "862eb.svg", name: "CSS" },
  { icon: "8cb80.svg", name: "HTML" },
  { icon: "9bcc0.svg", name: "PHP" },
  { icon: "1a0a2.svg", name: "Flutter" },
  { icon: "cf18d.svg", name: "React" },
]

export const workProjects: WorkProject[] = [
  { image: "kyu-apk.png", title: "KYU Mobile App", category: "Mobile App" },
  { image: "evento-web.png", title: "Evento Web", category: "Web App" },
  { image: "pbl-mmt-web-lp.png", title: "Web Portal Lab MMT", category: "Landing Page" },
  { image: "96373.png", title: "Maxim App Redesign", category: "Mobile App" },
  { image: "evento-2.png", title: "Evento Web", category: "Web App" },
  { image: "3cc27.png", title: "Evento Workflow", category: "System Design" },
]

export const detailProjectsData: DetailProject[] = [
  {
    id: "evento",
    menuTitle: "EVENTO",
    role: "Full-Stack Developer",
    company: "Evento",
    period: "SEP 2026 - PRESENT",
    responsibilities: [
      "Designed and implemented a full-stack event management platform in a 5-person team using Laravel, React Native, and PostgreSQL.",
      "Streamlined Event Organizer (EO) operations by integrating centralized client booking features and vendor package management systems.",
    ],
  },
  {
    id: "kyu",
    menuTitle: "KYU",
    role: "Mobile App Developer",
    company: "KYU",
    period: "FEB 2026 - JUN 2026",
    responsibilities: [
      "Designed and developed a mobile application for efficient project tracking and task management within a 4-person team using Dart, Flutter, and Supabase.",
      "Designed an intuitive UI to enable real-time collaboration and seamless task delegation for users.",
    ],
  },
  {
    id: "pbl-lab-mmt",
    menuTitle: "PBL LAB MMT",
    role: "Web Developer",
    company: "PBL Lab MMT",
    period: "OCT 2025 - DEC 2025",
    responsibilities: [
      "Built a comprehensive web portal for the Multimedia and Mobile Tech Laboratory using PHP, PostgreSQL, and Bootstrap.",
      "Created a public-facing homepage for general visitors and a secure admin panel for internal lab management.",
    ],
  },
]

export interface LinkedInEmbed {
  url: string
  height: number
  width: number
  title: string
}

export const linkedinEmbeds: LinkedInEmbed[] = [
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7520571045498560512?collapsed=1",
    height: 635,
    width: 504,
    title: "Posting tersemat",
  },
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7520568416701808641?collapsed=1",
    height: 635,
    width: 504,
    title: "Posting tersemat",
  },
]

export const linkedinEmbedUrls: string[] = linkedinEmbeds.map((item) => item.url)

export const socialLinks = {
  email: "mailto:dian.paramitha156@gmail.com",
  github: "https://github.com/HzlMitha",
  linkedin: "https://www.linkedin.com/in/dian-paramitha-tech/",
  resume: "https://drive.google.com/drive/folders/1Nk4PFUVrW7OnpILgFgbdfHsVYWCQEGaW?usp=sharing",
}
