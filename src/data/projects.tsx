import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiNextdotjs, SiTailwindcss, SiReact, SiVite, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link rel="noopener" target="_new" href={live}>
        <Button variant="default" size="sm">
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link rel="noopener" target="_new" href={repo}>
          <Button variant="default" size="sm">
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <SiNextdotjs /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <SiReact /> },
  vite: { title: "Vite", bg: "black", fg: "white", icon: <SiVite /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  html: { title: "HTML5", bg: "black", fg: "white", icon: <SiHtml5 /> },
  css: { title: "CSS3", bg: "black", fg: "white", icon: <SiCss3 /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
  id: "duocean",
  category: "Web Development",
  title: "The Duocean",
  src: `${BASE_PATH}/duocean/1.png`,
  screenshots: ["1.png", "2.png", "3.png"],
  live: "https://theduocean.com/",
  github: "https://github.com/jatin/duocean",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          The Duocean website showcases your creative portfolio with modern UI and smooth animations.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={this.screenshots.map((img) => `${BASE_PATH}/duocean/${img}`)}
        />
      </div>
    );
  },
},


  {
    id: "linsdonhome",
    category: "E-commerce",
    title: "Linsdon Home",
    src: `${BASE_PATH}/linsdonhome/landing.png`,
    screenshots: ["landing.png", "products.png", "checkout.png"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "https://www.linsdonhome.com/",
    content: (
      <div>
        <TypographyP className="font-mono">
          Linsdon Living brings you luxury bedding and home products with elegant design and comfort.
        </TypographyP>
        <ProjectsLinks live="https://www.linsdonhome.com/" />
        <SlideShow images={[
          `${BASE_PATH}/linsdonhome/landing.png`,
          `${BASE_PATH}/linsdonhome/products.png`,
          `${BASE_PATH}/linsdonhome/checkout.png`,
        ]}/>
      </div>
    ),
  },
  {
    id: "lazarev",
    category: "Digital Product Design",
    title: "Lazarev Silk",
    src: `${BASE_PATH}/lazarev/landing.png`,
    screenshots: ["landing.png", "projects.png", "contact.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "https://lazarev-silk.vercel.app/",
    content: (
      <div>
        <TypographyP className="font-mono">
          Lazarev Labs specializes in UI/UX and digital product design for AI, fintech, and Web3 industries.
        </TypographyP>
        <ProjectsLinks live="https://lazarev-silk.vercel.app/" />
        <SlideShow images={[
          `${BASE_PATH}/lazarev/landing.png`,
          `${BASE_PATH}/lazarev/projects.png`,
          `${BASE_PATH}/lazarev/contact.png`,
        ]}/>
      </div>
    ),
  },
  {
    id: "dddanimation",
    category: "Metaverse Storytelling",
    title: "DDD Animation",
    src: `${BASE_PATH}/dddanimation/landing.png`,
    screenshots: ["landing.png", "stories.png", "community.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "https://dddanimation.netlify.app/",
    content: (
      <div>
        <TypographyP className="font-mono">
          CyberFiction Studios brings decentralized storytelling to the metaverse.
        </TypographyP>
        <ProjectsLinks live="https://dddanimation.netlify.app/" />
        <SlideShow images={[
          `${BASE_PATH}/dddanimation/landing.png`,
          `${BASE_PATH}/dddanimation/stories.png`,
          `${BASE_PATH}/dddanimation/community.png`,
        ]}/>
      </div>
    ),
  },
  {
    id: "bodhgayamarathon",
    category: "Event/Marathon",
    title: "Bodh Gaya Marathon",
    src: `${BASE_PATH}/bodhgayamarathon/landing.png`,
    screenshots: ["landing.png", "route.png", "participants.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    live: "https://bodhgayamarathon.com/",
    content: (
      <div>
        <TypographyP className="font-mono">
          Run for Peace – Bodh Gaya Marathon encourages running with a spiritual and peaceful experience.
        </TypographyP>
        <ProjectsLinks live="https://bodhgayamarathon.com/" />
        <SlideShow images={[
          `${BASE_PATH}/bodhgayamarathon/landing.png`,
          `${BASE_PATH}/bodhgayamarathon/route.png`,
          `${BASE_PATH}/bodhgayamarathon/participants.png`,
        ]}/>
      </div>
    ),
  },
  {
    id: "zeltxi",
    category: "HR Platform",
    title: "Zelt XI",
    src: `${BASE_PATH}/zeltxi/landing.png`,
    screenshots: ["landing.png", "dashboard.png", "team.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "https://zelt-xi.vercel.app/",
    content: (
      <div>
        <TypographyP className="font-mono">
          Zelt HR is an HRIS platform integrating HR, IT, and finance for better people operations.
        </TypographyP>
        <ProjectsLinks live="https://zelt-xi.vercel.app/" />
        <SlideShow images={[
          `${BASE_PATH}/zeltxi/landing.png`,
          `${BASE_PATH}/zeltxi/dashboard.png`,
          `${BASE_PATH}/zeltxi/team.png`,
        ]}/>
      </div>
    ),
  },
];

export default projects;
