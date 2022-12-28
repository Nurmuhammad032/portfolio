import { ProjectType, FooterProject } from "../../types";

export const projectArray: ProjectType[] = [
  {
    title: "QR Code (Clone)",
    info: "Qr code website helps you with coverting link to QR code (quick response code) image. I have created this project with my backend developer partner. It works only for website url, email and plain text. It was build by React (for frontend) and Django (backend).",
    imgUrl: "/images/qrcode_img.png",
    link: "https://vip-qrcode-generator.vercel.app/",
  },
  {
    title: "Dress Up (Clone)",
    info: "This website was created only frontend side. When I finished learning ReactJs library, I created this website for practise.",
    imgUrl: "/images/shop-img.jpg",
    link: "https://shop-three-rust.vercel.app/",
  },
  {
    title: "UC Coding",
    info: "UC Coding is a small Software company. They have a design for frontend on figma and they needed ReactJs developer for creating website using the design and I have done it.",
    imgUrl: "/images/uc-coding.jpg",
    link: "https://uc-coding.uz/",
  },
  {
    title: "UIC Group (Clone)",
    info: "When I saw the website of UIC Group company, I liked its design and I created it using ReactJS and framer motion libraries.",
    imgUrl: "/images/uic-img.jpg",
    link: "https://uic-group.netlify.app/",
  },
];

export const footerProject: FooterProject[] = [
  {
    imgUrl: "/images/phones.png",
    githubLink: "https://github.com/Nurmuhammad032/Phone-Store",
    link: "https://phone-store-two.vercel.app/checkout",
  },
  {
    imgUrl: "/images/pokemon.png",
    githubLink: "https://github.com/Nurmuhammad032/Pokemon",
    link: "https://pokemon-nosirov.vercel.app/",
  },
];
