"use client";
import { Link } from "react-router-dom";
import { projects } from "../utils/projects";
import { useState } from "react";

const ProjectDetailPage = () => {
  const {
    about,
    deploy,
    githubLink,
    heroImage,
    liveLink,
    name,
    sideHero1,
    sideHero2,
    tech,
  } = projects["canvas"];
  return (
    <main className="px-6 md:px-16 min-h-screen">
      <section className="grid grid-cols-12 pt-32 pb-16 border-b border-b-on-surface-variant/80 gap-4">
        <div className="col-span-12 lg:col-span-7">
          <span className="font-mono border border-primary/60 text-primary/90 text-[14px] font-semibold uppercase tracking-wide p-2 rounded-full">
            System::deploy::{deploy ? "Success" : "pending"}
          </span>
          <h1 className="text-[48px] font-bold my-7">{name || "projects"}</h1>
          <p className="text-on-surface-variant max-w-165">{about}</p>

          <div className="flex gap-3 text-[12px] tracking-wider font-mono my-6 flex-wrap">
            {tech.map((el) => {
              return <TechElement el={el} />;
            })}
          </div>
          <div className="flex gap-4">
            {deploy && (
              <Link
                to={liveLink}
                className="font-mono uppercase flex justify-center align-middle px-6 py-3 bg-primary-container text-[14px] text-on-tertiary gap-1 font-semibold tracking-wide hover:bg-primary"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "20px" }}
                >
                  play_arrow
                </span>
                Live demo
              </Link>
            )}
            <Link
              to={githubLink}
              className="font-mono uppercase flex justify-center align-middle px-6 py-3 text-[14px] text-on-surface-variant gap-3 font-extralight tracking-wide border border-on-surface-variant/40 hover:text-primary hover:border-primary"
            >
              {" "}
              <span
                className="material-symbols-outlined translate-y-0.5"
                style={{ fontSize: "16px" }}
              >
                terminal
              </span>{" "}
              github repo
            </Link>
          </div>
        </div>
        <div className="col-span-5 hidden lg:flex justify-center items-center px-6">
          <div className="flex flex-col border rounded-2xl p-2 border-on-surface-variant/60 w-full max-w-92.5">
            <div className="flex gap-2 justify-between w-full border-b border-b-on-surface-variant/60 p-2">
              <div className="flex gap-2 justify-between items-center">
                <div className="bg-red-600 rounded-full w-3 h-3"></div>
                <div className="bg-yellow-400 rounded-full w-3 h-3"></div>
                <div className="bg-green-400 rounded-full w-3 h-3"></div>
              </div>
              <div className="text-on-surface-variant tracking-wide font-semibold">
                canvas_renderer.ts
              </div>
            </div>
            <div className="text-[14px] p-1.5">
              <pre>
                <code>{`  const 
  renderLoop = () => {
  const ctx = 
  canvasRef.current.getContext('2d');
  // Optimize for 60fps
  window.requestAnimationFrame(draw);
  }`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 md:px-16 border-b border-b-on-surface-variant/80 py-16">
        <h1 className="text-[36px] font-bold mb-8">Glance</h1>
        <div className="flex flex-col gap-8">
          <div className="border border-gray-700 p-4 max-w-2xl rounded-xl bg-gray-900 shadow-md mx-auto">
            <img
              src={heroImage}
              alt="hero"
              className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="border border-gray-700 rounded-xl p-3 max-w-sm bg-gray-800 shadow-md hover:shadow-lg transition">
              <img
                src={sideHero1}
                alt="side-hero-1"
                className="w-full h-64 rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="border border-gray-700 rounded-xl p-3 max-w-sm bg-gray-800 shadow-md hover:shadow-lg transition">
              <img
                src={sideHero2}
                alt="side-hero-2"
                className="w-full h-64 rounded-lg object-cover shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 border-b border-b-on-surface-variant/80">
        <h1 className="text-[36px] font-bold mb-6 text-center">Core Feature</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-3 border-2 border-on-tertiary-container w-full p-4 col-span-1 font-sans tracking-wider">
            <span className="material-symbols-outlined text-primary">
              brush
            </span>
            <p className="text-[18px] font-semibold">Custom Brush Dynamics</p>
            <p className="text-on-surface-variant">
              Algorithmic brush generation using Bezier curves for smooth, fluid
              strokes at any resolution
            </p>
          </div>
          {/* <div className="flex flex-col gap-3 border-2 border-on-tertiary-container w-full p-4 col-span-1 font-sans tracking-wider">
            <span className="material-symbols-outlined text-primary">
              history
            </span>
            <p className="text-[18px] font-semibold">State-Driven Undo/Redo</p>
            <p className="text-on-surface-variant">
              Optimized snapshot system utilizing Command Pattern to handle thousands of actions without memory leaks.
            </p>
          </div> */}
          <div className="flex flex-col gap-3 border-2 border-on-tertiary-container w-full p-4 col-span-1 font-sans tracking-wider">
            <span className="material-symbols-outlined text-primary">
              palette
            </span>
            <p className="text-[18px] font-semibold">Color Palette Manager</p>
            <p className="text-on-surface-variant">
              Algorithmic brush generation using Bezier curves for smooth, fluid
              strokes at any resolution
            </p>
          </div>
          <div className="flex flex-col gap-3 border-2 border-on-tertiary-container w-full p-4 col-span-1 font-sans tracking-wider">
            <span className="material-symbols-outlined text-primary">
              download
            </span>
            <p className="text-[18px] font-semibold">Canvas Exporting</p>
            <p className="text-on-surface-variant">
              Algorithmic brush generation using Bezier curves for smooth, fluid
              strokes at any resolution
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-12 flex-col gap-6 pt-16">
        <div className="col-span-1 lg:col-span-5">
          <h1 className="text-[36px] font-bold">Future Roadmap</h1>
          <p className="font-medium text-on-surface-variant tracking-tight">
            The architecture is built for scale. Here is what's next in the
            deployment pipeline.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-4 pb-48">
          <div className="flex justify-between items-center w-full border p-6 border-tertiary/30 bg-surface border-l-6 border-l-primary">
            <span className="flex gap-4">
              <span className="text-primary font-mono tracking-wide">01</span>
              <span className="font-mono tracking-tight">
                Designing better UI
              </span>
            </span>
            <span className="tracking-tighter text-surface-bright bg-primary text-[10px] font-bold px-2 py-1">
              DEVELOPING
            </span>
          </div>
          <div className="flex justify-between items-center w-full border p-6 border-tertiary/30 bg-surface">
            <span className="flex gap-4">
              <span className="text-on-tertiary font-mono tracking-wide">
                02
              </span>
              <span className="font-mono tracking-tight">
                Testing Pipeline using Jest
              </span>
            </span>
            <span className="tracking-tighter text-primary bg-surface-bright text-[10px] font-bold px-2 py-1">
              PENDING
            </span>
          </div>
          <div className="flex justify-between items-center w-full border p-6 border-tertiary/30 bg-surface">
            <span className="flex gap-4">
              <span className="text-on-tertiary font-mono tracking-wide">
                03
              </span>
              <span className="font-mono tracking-tight">
                WebSocket Connection
              </span>
            </span>
            <span className="tracking-tighter text-primary bg-surface-bright text-[10px] font-bold px-2 py-1">
              PENDING
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

const TechElement = ({ el }: { el: string }) => {
  const [randomNumber] = useState<number>(() => {
    return Math.ceil(Math.random() * 1000);
  });
  const colors = [
    "text-slate-300 border-slate-700 bg-slate-800/50",
    "text-teal-300 border-teal-700 bg-teal-800/50",
    "text-blue-300 border-blue-700 bg-blue-800/50",
    "text-purple-300 border-purple-700 bg-purple-800/50",
    "text-red-300 border-red-700 bg-red-800/50",
    "text-orange-300 border-orange-700 bg-orange-800/50",
    "text-amber-300 border-amber-700 bg-amber-800/50",
    "text-yellow-300 border-yellow-700 bg-yellow-800/50",
    "text-lime-300 border-lime-700 bg-lime-800/50",
    "text-green-300 border-green-700 bg-green-800/50",
    "text-emerald-300 border-emerald-700 bg-emerald-800/50",
    "text-cyan-300 border-cyan-700 bg-cyan-800/50",
    "text-indigo-300 border-indigo-700 bg-indigo-800/50",
    "text-pink-300 border-pink-700 bg-pink-800/50",
    "text-rose-300 border-rose-700 bg-rose-800/50",
  ];

  const stringCharSum = el
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const assignedIndex = (stringCharSum + randomNumber + 1) % colors.length;
  const uniqueColor = colors[assignedIndex];

  return (
    <div
      key={el}
      className={`border px-2.5 py-0.5 ${uniqueColor} rounded-sm font-semibold`}
    >
      {el}
    </div>
  );
};

export default ProjectDetailPage;
