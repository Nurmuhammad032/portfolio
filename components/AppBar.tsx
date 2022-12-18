import Link from "next/link";
import HomeIcon from "./icon/HomeIcon";
import AboutIcon from "./icon/AboutIcon";
import ProjectIcon from "./icon/ProjectIcon";
import ContactIcon from "./icon/ContactIcon";

const links = [
  {
    label: <HomeIcon />,
    value: "/",
  },
  {
    label: <AboutIcon />,
    value: "/about",
  },
  {
    label: <ProjectIcon />,
    value: "/projects",
  },
  {
    label: <ContactIcon />,
    value: "/contact",
  },
];

const AppBar = () => {
  return (
    <nav className="fixed py-3 z-50 dark:shadow-darkShadow shadow-lightShadow border-y dark:border-[#374151] border-[#F3F4F6] dark:bg-[#111827] bg-white bottom-0 left-1/2 -translate-x-1/2 xl:px-[62px] md:px-[45px] px-2 w-full">
      <div className="flex items-center justify-between">
        {links?.map(({ label, value }, i) => (
          <Link scroll={false} href={value} key={i} className="app__bar-items">
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AppBar;
