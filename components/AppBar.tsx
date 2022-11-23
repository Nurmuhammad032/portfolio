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
      className="fixed py-3 rounded-3xl  border border-[#374151] dark:bg-[#111827] bottom-14 left-1/2 -translate-x-1/2 px-[62px] w-[85%]"
    >
      <div className="flex items-center justify-between">
        {links?.map(({ label, value }) => (
          <Link
            href={value}
            key={value}
            className="xl:h-[104px] xl:w-[104px] bg-customInk rounded-2xl center-mode"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AppBar;
