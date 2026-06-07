import { Link, useLocation } from "react-router-dom";

const TopAppBar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname == path;
  return (
    <header className="fixed top-0 flex justify-between w-screen p-6 md:px-16 h-16 z-50 bg-background/70 backdrop-blur-sm border-b border-surface-variant">
      <Link className="flex items-center" to={"/"}>
        <span className="material-symbols-outlined text-primary pr-2">
          terminal
        </span>
        <span className="text-primary text-[12px] tracking-tight font-mono">
          DEV_SHELL_V1
        </span>
      </Link>
      <nav className="hidden md:flex gap-8">
        <Link
          className={`hover:text-primary font-mono text-[13px] ${isActive("/") ? "text-primary underline" : "text-on-surface-variant"}`}
          to={"/"}
        >
          Home
        </Link>
        <Link
          className={`hover:text-primary font-mono text-[13px] ${isActive("/projects") ? "text-primary underline" : "text-on-surface-variant"}`}
          to={"/projects"}
        >
          Projects
        </Link>
        <Link
          className={`hover:text-primary font-mono text-[13px] ${isActive("/stack") ? "text-primary underline" : "text-on-surface-variant"}`}
          to={"/stack"}
        >
          Stack
        </Link>
        <Link
          className={`hover:text-primary font-mono text-[13px] ${isActive("/profile") ? "text-primary underline" : "text-on-surface-variant"}`}
          to={"/profile"}
        >
          Profile
        </Link>
      </nav>
    </header>
  );
};

export default TopAppBar;
