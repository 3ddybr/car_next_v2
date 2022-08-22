import Image from "next/image";
import { CardButtonLink, CardContainer, CardContent } from "./styles";

import MustangImg from "../../../public/assets/fordmustang.svg";
import { Gauge } from "phosphor-react";

export function Cards() {
  return (
    <CardContainer>
      <CardContent>
        <header>
          <Image src={MustangImg} alt="" />
          <p>2022</p>
        </header>

        <h1>Ford mustang 5.0 466 cv</h1>

        <main>
          <div>
            <p>
              <Gauge size={20} />
              15.000 km
            </p>
            <p>
              <Gauge size={20} />
              auto
            </p>
          </div>

          <h2>R$14.0000,00</h2>
        </main>
        <CardButtonLink>Detalhes</CardButtonLink>
      </CardContent>
    </CardContainer>
  );
}
