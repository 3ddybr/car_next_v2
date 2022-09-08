import { useRouter } from "next/router";
import { ReactElement } from "react";
interface ActiveLinkProps {
  href: string;
  children: ReactElement;
}

const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const { asPath, push } = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    push(href);
  };

  const styles = {
    color: asPath === href ? "white" : "",
  };

  return (
    <a href={href} onClick={handleClick} style={styles}>
      {children}
    </a>
  );
};

export default ActiveLink;
