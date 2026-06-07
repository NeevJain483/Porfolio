import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="min-h-[calc(100vh-86px)] pt-24 pb-32 px-6 md:px-16 max-w-max-width">
      <section className="mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-[13px] text-primary border border-primary/20 px-3 py-1 mb-6 inline-block uppercase tracking-wider">
              Fullstack Developer Intern
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-on-surface font-sans">
              Engineering Scalable <br className="hidden md:block" /> Digital
              Experiences
            </h1>
            <p className="font-sans text-on-surface-variant text-base mb-8 max-w-xl">
              Specializing in high-performance web applications, distributed
              systems, and modern technical stacks. Building the future of the
              web, one commit at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="font-mono text-[13px] bg-primary text-on-primary px-6 py-3 hover:text-primary hover:bg-transparent border border-primary transition-all duration-300">
                DOWNLOAD_CV
              </button>
              <Link
                className="font-mono text-[13px] border border-outline px-6 py-3 hover:text-primary hover:border-primary transition-all duration-300"
                to="/projects"
              >
                VIEW_PROJECTS
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#000f21] border border-surface-variant rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 py-4 px-3 bg-surface-container border-b border-surface-variant">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="font-mono text-[14px] text-on-surface-variant ml-2">
                  profile.json
                </span>
              </div>
              <div className="p-6 font-mono text-[14px] overflow-x-auto min-h-300px">
                <pre className="text-secondary text-left">
                  {`  {
    "name":"Neev Jain",
    "role":"FULLSTACK",
    "stack": [
      "React", "Node.js", 
      "PostgreSQL"
    ],
    "location": "Remote/NYC",
    "status": "Optimizing"
  }`}
                  <span className="inline-block w-2 h-4 bg-primary ml-1 cursor-blink translate-y-[4px]"></span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
