import { Link } from "react-router-dom";
import canvasHero from "@assets/canvas-hero.png"

const ProjectsPage = () => {
  return (
    <main className="min-h-[calc(100vh-86px)] pt-24 pb-32 max-w-max-width mx-auto px-6 md:px-16">
      <section className="mb-12">
        <div className="bg-[#101010] p-6 rounded-lg border border-outline-variant/20 shadow-xl overflow-hidden relative">
          <div className="flex gap-1.5 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="font-mono text-2xl md:text-3xl text-white mb-2">
            <span className="text-primary mr-3">$</span>ls ./projects
          </div>
        </div>
      </section>
      {/* One project */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <article className="md:col-span-8 group bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden hover:border-accent-emerald/50 transition-all duration-300">
          <Link to={`/project-detail`}>
            <div className="relative aspect-video overflow-hidden">
              <img
                alt="Sketch_Engine"
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src={canvasHero}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-accent-emerald/90 text-white font-mono text-[10px] px-3 py-1 rounded-full">
                  FEATURED
                </span>
              </div>
            </div>
            <div className="p-8 text-left">
              <p className="font-mono text-[13px] text-on-surface-variant mb-1 uppercase">
                FRONTEND ARCHITECTURE
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-primary font-sans">
                Sketch_Engine
              </h2>
              <p className="font-sans text-on-surface-variant mb-6 max-w-2xl mt-4 text-base leading-relaxed">
                A robust vector drawing application built for performance.
                Leverages a low-level Canvas API wrapper to handle thousands of
                concurrent path objects.
              </p>
              <div className="flex gap-6 font-mono text-sm text-accent-emerald">
                <span className="flex items-center gap-2">View_Details</span>
              </div>
            </div>
          </Link>
        </article>
        <div className="md:col-span-4 flex flex-col gap-6 text-left">
          <article className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 hover:border-accent-emerald/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white">
                database
              </span>
            </div>
            <p className="font-mono text-[13px] text-on-surface-variant mb-1">
              BACKEND INFRASTRUCTURE
            </p>
            <h2 className="text-xl font-bold text-primary font-sans">
              Task Manager API
            </h2>
            <p className="font-sans text-on-surface-variant mt-2 text-sm">
              Enterprise-ready RESTful service with JWT authentication and RBAC.
            </p>
          </article>
          <article className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 hover:border-accent-emerald/50 transition-all flex-grow">
            <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-white">
                layers
              </span>
            </div>
            <p className="font-mono text-[13px] text-on-surface-variant mb-1">
              IDENTITY & UX
            </p>
            <h2 className="text-xl font-bold text-primary font-sans">
              Portfolio Website
            </h2>
            <p className="font-sans text-on-surface-variant mt-2 text-sm">
              Minimalist frame for creative output. SSR enabled.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
