import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile";
import { LayoutContainer } from "./styles";

export function DefaultLayout({ children }: any) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <LayoutContainer>
        <Header setMenuIsVisible={setMenuIsVisible} />
        {children}
        <Footer />
      </LayoutContainer>
    </>
  );
}
