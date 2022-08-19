import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout({ children }: any) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}