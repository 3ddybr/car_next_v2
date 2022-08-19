import Image from "next/image";
import { HeaderButtonLink, HeaderContainer, HeaderContent } from "./styles";

import { MagnifyingGlass } from "phosphor-react";

import LogoIng from '../../../public/assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={LogoIng} width={120} alt="logo" />
        <div>
          <nav>
            <ul>
              <li><a>Inicio</a></li>
              <li><a>Veículos</a></li>
              <li><a>Empresa</a></li>
              <li><a>Contato</a></li>
            </ul>
          </nav>

          <MagnifyingGlass size={17} weight="bold" color="var(--bg)" />

          <HeaderButtonLink>Login</HeaderButtonLink>
        </div>

      </HeaderContent>
    </HeaderContainer>
  )
}