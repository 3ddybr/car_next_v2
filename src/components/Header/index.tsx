import Image from "next/image";
import Link from "next/link";
import { HeaderButtonLink, HeaderContainer, HeaderContent } from "./styles";

import { MagnifyingGlass } from "phosphor-react";

import LogoIng from "../../../public/assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={LogoIng} width={120} alt="logo" priority />
        <div>
          <nav>
            <ul>
              <Link href="/">
                <a>Inicio</a>
              </Link>
              <Link href="/veiculos">
                <a>Veículos</a>
              </Link>
              <Link href="/empresa">
                <a>Empresa</a>
              </Link>
              <Link href="/contato">
                <a>Contato</a>
              </Link>
            </ul>
          </nav>

          <MagnifyingGlass size={17} weight="bold" color="var(--bg)" />
          <Link href="/login">
            <HeaderButtonLink>Login</HeaderButtonLink>
          </Link>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}
