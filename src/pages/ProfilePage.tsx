"use client";
import { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Transmission sent:", { name, message });
    setName("");
    setMessage("");
  };
  return (
    <main className="pt-24 pb-32 max-w-[1200px] mx-auto px-6 md:px-16">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 text-left">
        <div className="md:col-span-4 border border-[rgba(255,255,255,0.08)] bg-surface-container-low p-6 rounded-xl flex flex-col items-center text-center">
          <div className="relative w-48 h-48 mb-6 group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>
            <img
              alt="Profile"
              className="relative w-full h-full object-cover rounded-xl border-2 border-primary grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmXhOwJMG5VA5iBLcQFTfcMiLqBHLr3TO0OwbN2FSZpS6cG4LBW6UppH6bD9tQAUjeEJcHOXECEoW37BGYE-tdVBTQYT-Ai3CVGrsg2_8tUQMBJnfKnteqAxOTjR5-6wEzFnb40KLykDk630yYUfWGryYd-hkEXdT2ZBElPxbhGZjp9fcnqFUxYpdd4pCM_xSBv6tnuWNZoJDmWk9EG7yQkMMkadhAhnAfMe1NqsL-eSqoOpbbPCJbDCRiZm1nz_FKKTWp4qHyJxM"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight font-sans mb-1">
            Alex Rivera
          </h1>
          <p className="font-mono text-sm text-primary uppercase tracking-widest mb-4">
            Software Engineer Intern
          </p>
          <div className="flex gap-3">
            <span className="p-2 border border-[rgba(255,255,255,0.08)] rounded-lg hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined translate-y-[2px]">
                hub
              </span>
            </span>
            <span className="p-2 border border-[rgba(255,255,255,0.08)] rounded-lg hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined translate-y-[2px]">
                link
              </span>
            </span>
          </div>
        </div>
        <div className="md:col-span-8 glass-edge bg-surface-container-low p-8 rounded-lg flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-6">
            Building the web,
            <span className="text-primary italic font-serif font-normal">
              one bit
            </span>
            at a time.
          </h2>
          <p className="font-sans text-on-surface-variant max-w-2xl text-base leading-relaxed">
            Focused on building high-performance, type-safe applications that
            bridge the gap between complex backend systems and intuitive user
            interfaces.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-10 text-center">
          Core Technical Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="glass-edge glow-hover bg-surface-container-low p-4 flex flex-col items-center gap-3 transition-all duration-300">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="javascript"
            >
              javascript
            </span>
            <span className="font-code-block text-code-block">TypeScript</span>
          </div>
          <div className="glass-edge glow-hover bg-surface-container-low p-4 flex flex-col items-center gap-3 transition-all duration-300">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="data_object"
            >
              data_object
            </span>
            <span className="font-code-block text-code-block">React</span>
          </div>
          <div className="glass-edge glow-hover bg-surface-container-low p-4 flex flex-col items-center gap-3 transition-all duration-300">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="storage"
            >
              storage
            </span>
            <span className="font-code-block text-code-block">PostgreSQL</span>
          </div>
          <div className="glass-edge glow-hover bg-surface-container-low p-4 flex flex-col items-center gap-3 transition-all duration-300">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="api"
            >
              api
            </span>
            <span className="font-code-block text-code-block">GraphQL</span>
          </div>
          <div className="glass-edge glow-hover bg-surface-container-low p-4 flex flex-col items-center gap-3 transition-all duration-300">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="cloud"
            >
              cloud
            </span>
            <span className="font-code-block text-code-block">Docker</span>
          </div>
          <div className="glass-edge glow-hover bg-surface-container-low p-4 flex flex-col items-center gap-3 transition-all duration-300">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="terminal"
            >
              terminal
            </span>
            <span className="font-code-block text-code-block">Go</span>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-left">
        <div className="bg-surface-container-lowest border border-surface-variant rounded-lg overflow-hidden">
          <div className="bg-surface-container-highest px-4 py-2 flex items-center justify-between border-b border-surface-variant">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/40"></div>
              <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
              <div className="w-3 h-3 rounded-full bg-primary/40"></div>
            </div>
            <span className="font-mono text-[11px] text-outline">
              bash — contact.sh
            </span>
            <div></div>
          </div>
          <div className="p-6 space-y-4">
            <div className="relative">
              <label className="block font-mono text-xs text-outline mb-1">
                NAME_ID
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary rounded p-3 font-mono text-sm outline-none text-on-surface"
                placeholder="guest_user"
                type="text"
              />
            </div>
            <div className="relative">
              <label className="block font-mono text-xs text-outline mb-1">
                MESSAGE_PAYLOAD
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-background border border-surface-variant focus:border-primary focus:ring-1 focus:ring-primary rounded p-3 font-mono text-sm outline-none resize-none text-on-surface"
                placeholder="Enter your transmission..."
                rows={4}
              ></textarea>
            </div>
            <button
              onClick={handleSend}
              className="w-full py-3 bg-primary text-on-primary font-mono font-bold rounded flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">send</span>{" "}
              EXECUTE_SEND
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
