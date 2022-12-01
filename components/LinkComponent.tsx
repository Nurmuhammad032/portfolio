import Link from "next/link";

interface Props {
  url: string;
  text: string;
}

const LinkComponent = ({ url, text }: Props) => {
  return (
    <div className="app__link">
      <Link href={`${url}`}>{text}</Link>
    </div>
  );
};

export default LinkComponent;
