const Footer = () => {
  return (
    <footer className="font-mono text-[14px] text-on-surface-variant w-full py-8 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-surface-variant bg-background mb-16 md:mb-0">
      <span>&copy; 2026 BUILD_STABLE_V2.0</span>
      <div className="flex gap-8">
        <a className="hover:text-primary" href="">Github</a>
        <a className="hover:text-primary" href="">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
