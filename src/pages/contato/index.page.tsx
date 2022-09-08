import { NextPage } from "next";
import Link from "next/link";
import { Car, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { ContatoContainer, ContatoContent, SpanLogo } from "./styles";

const Contato: NextPage = () => {
  return (
    <ContatoContainer>
      <ContatoContent>
        <header>
          <Car size="32" weight="fill" />
          <h1>Fale conosco</h1>
        </header>
        <main>
          <div>
            <section>
              <p>Converse com um de nossos consultores.</p>
              <p>-Horário de atendimento:</p>
              <p>De Segunda a Sexta, das 08 às 12h e das 13 às 18h</p>
            </section>
            <footer>
              <p>Telefones de Contato:</p>
              <p>Venda Nova do Imigrante - (28) XXXX-XXXX</p>
              <p>E-mail: contato@seminovoxxxx.com.br</p>
            </footer>
          </div>
          <div>
            <p>Ou acesse nossas redes sociais:</p>
            {/* <SpanLogo type={LogoType.wzap}> */}
            <Link href="https://web.whatsapp.com/">
              <SpanLogo whatsapp>
                <WhatsappLogo size="170" />
              </SpanLogo>
            </Link>
            {/* <SpanLogo type={LogoType.instagram}> */}

            <Link href="https://www.instagram.com/alberto.consoli.a/">
              <SpanLogo instagram>
                <InstagramLogo size="170" />
              </SpanLogo>
            </Link>
          </div>
        </main>
      </ContatoContent>
    </ContatoContainer>
  );
};

export default Contato;
