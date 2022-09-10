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
            <span onClick={() => setMenuIsVisible(false)}>Inicio</span>
          </ActiveLink>
          <ActiveLink href="/veiculos">
            <span onClick={() => setMenuIsVisible(false)}>Veículos</span>
          </ActiveLink>
          <ActiveLink href="/empresa">
            <span onClick={() => setMenuIsVisible(false)}>Empresa</span>
          </ActiveLink>
          <ActiveLink href="/contato">
            <span onClick={() => setMenuIsVisible(false)}>Contato</span>
          </ActiveLink>
        </nav>

        {/* <MagnifyingGlass size={17} weight="bold" color="var(--bg)" /> */}
        <Link href="/login">
          <MobileButtonLink onClick={() => setMenuIsVisible(false)}>
            Login
          </MobileButtonLink>
        </Link>
      </div>
    </MenuContainer>
  );
}
