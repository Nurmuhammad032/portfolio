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
    <nav
      style={{
        boxShadow: "-24px 24px 64px #111827",
      }}
      className="fixed py-3 z-50 xl:rounded-3xl md:rounded-2xl rounded-lg  border border-[#374151] dark:bg-[#111827] bottom-14 left-1/2 -translate-x-1/2 xl:px-[62px] md:px-[45px] px-2 w-[85%]"
    >
      <div className="flex items-center justify-between">
        {links?.map(({ label, value }) => (
          <Link
            href={value}
            key={value}
            className="xl:h-[104px] xl:w-[104px] lg:w-[80px] lg:h-[80px] md:w-[50px] lg:p-0 p-2 w-[32px] h-[32px] md:h-[50px] bg-customInk xl:rounded-2xl md:rounded-xl rounded-lg center-mode"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AppBar;
