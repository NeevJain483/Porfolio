import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return (
    <nav className="fixed bottom-0 flex w-screen justify-around py-2 backdrop-blur-md border-t border-surface-variant bg-background/80 md:hidden">
      <Link
        className={`hover:text-primary font-mono flex flex-col items-center justify-center text-[10px] ${isActive("/") ? "text-primary" : "text-on-surface-variant"}`}
        to={"/"}
      >
        <span className="material-symbols-outlined">home</span>
        <span>Home</span>
      </Link>
      <Link
        className={`hover:text-primary font-mono flex flex-col items-center justify-center text-[10px] ${isActive("/projects") ? "text-primary" : "text-on-surface-variant"}`}
        to={"/projects"}
      >
        <span className="material-symbols-outlined">code</span>
        <span>Projects</span>
      </Link>
      <Link
        className={`hover:text-primary font-mono flex flex-col items-center justify-center text-[10px] ${isActive("/stack") ? "text-primary" : "text-on-surface-variant"}`}
        to={"/stack"}
      >
        <span className="material-symbols-outlined">layers</span>
        <span>Stack</span>
      </Link>
      <Link
        className={`hover:text-primary font-mono flex flex-col items-center justify-center text-[10px] ${isActive("/profile") ? "text-primary" : "text-on-surface-variant"}`}
        to={"/profile"}
      >
        <span className="material-symbols-outlined">person</span>
        <span>Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
