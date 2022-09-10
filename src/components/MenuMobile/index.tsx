import Link from "next/link";
import { MagnifyingGlass, X } from "phosphor-react";
import { useEffect } from "react";
import ActiveLink from "../ActiveLink";
import { MenuContainer, MobileButtonLink } from "./styeles";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: any) {
  useEffect(() => {
    document.body.style.overflow = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <MenuContainer isVisible={menuIsVisible}>
      <X size={45} onClick={() => setMenuIsVisible(false)} />
      <div>
        <nav>
          <ActiveLink href="/">
            <span>Inicio</span>
          </ActiveLink>
          <ActiveLink href="/veiculos">
            <span>Veículos</span>
          </ActiveLink>
          <ActiveLink href="/empresa">
            <span>Empresa</span>
          </ActiveLink>
          <ActiveLink href="/contato">
            <span>Contato</span>
          </ActiveLink>
        </nav>

        {/* <MagnifyingGlass size={17} weight="bold" color="var(--bg)" /> */}
        <Link href="/login">
          <MobileButtonLink>Login</MobileButtonLink>
        </Link>
      </div>
    </MenuContainer>
  );
}
