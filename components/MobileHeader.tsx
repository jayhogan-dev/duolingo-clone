import MobileSidebar from "./MobileSidebar";

const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center bg-indigo-400 border-b fixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
};

export default MobileHeader;
