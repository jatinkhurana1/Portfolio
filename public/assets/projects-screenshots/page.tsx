"use client";
import Image from "next/image";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "The Duocean",
    description: "A creative portfolio website showcasing modern UI and smooth animations.",
    link: "https://theduocean.com/",
    images: [
      "/assets/projects-screenshots/duocean/1.png",
      "/assets/projects-screenshots/duocean/2.png",
      "/assets/projects-screenshots/duocean/3.png",
    ],
  },
  {
    id: 2,
    name: "Linsdon Home",
    description: "A home decor website with responsive design and elegant user experience.",
    link: "https://www.linsdonhome.com/",
    images: [
      "/assets/projects-screenshots/linsdonhome/1.png",
      "/assets/projects-screenshots/linsdonhome/2.png",
      "/assets/projects-screenshots/linsdonhome/3.png",
    ],
  },
  {
    id: 3,
    name: "Lazarev Silk",
    description: "An e-commerce style website for silk products with smooth animations.",
    link: "https://lazarev-silk.vercel.app/",
    images: [
      "/assets/projects-screenshots/lazarev-silk/1.png",
      "/assets/projects-screenshots/lazarev-silk/2.png",
      "/assets/projects-screenshots/lazarev-silk/3.png",
    ],
  },
  {
    id: 4,
    name: "DDD Animation",
    description: "A visually appealing animation project using modern front-end technologies.",
    link: "https://dddanimation.netlify.app/",
    images: [
      "/assets/projects-screenshots/dddanimation/1.png",
      "/assets/projects-screenshots/dddanimation/2.png",
      "/assets/projects-screenshots/dddanimation/3.png",
    ],
  },
  {
    id: 5,
    name: "Bodhgaya Marathon",
    description: "An event website for Bodhgaya Marathon with real-time updates and responsive design.",
    link: "https://bodhgayamarathon.com/",
    images: [
      "/assets/projects-screenshots/bodhgayamarathon/1.png",
      "/assets/projects-screenshots/bodhgayamarathon/2.png",
      "/assets/projects-screenshots/bodhgayamarathon/3.png",
    ],
  },
  {
    id: 6,
    name: "Zelt-XI",
    description: "A modern project landing page built with React and Tailwind, featuring animations and interactive sections.",
    link: "https://zelt-xi.vercel.app/",
    images: [
      "/assets/projects-screenshots/zelt-xi/1.png",
      "/assets/projects-screenshots/zelt-xi/2.png",
      "/assets/projects-screenshots/zelt-xi/3.png",
    ],
  },
];

function ProjectsPage() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
        {PROJECTS.map((project) => (
          <li
            className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
            key={project.id}
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="h-[200px]">
              <Splide
                options={{
                  type: "loop",
                  interval: 3000,
                  autoplay: true,
                  speed: 2000,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label={`${project.name} screenshots`}
              >
                {project.images.map((image) => (
                  <SplideSlide key={image}>
                    <Image
                      src={image}
                      alt={`Screenshot of ${project.name}`}
                      className="w-[300px] h-[200px] rounded-md bg-zinc-900"
                      width={300}
                      height={200}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="p-4 text-zinc-300">
              <h2 className="text-xl">{project.name}</h2>
              <p className="mt-2 text-xs text-zinc-500">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-blue-400 text-sm underline"
              >
                Live Project
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
