import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blue-800);
  width: 100%;
  height: 8rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
export const HeaderContent = styled.div`
  width: 100vw;
  max-width: 118rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.2rem;

    /* background: var(--blue-100); */
    /* border: 1px solid red; */
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      font-size: 1.8rem;
      padding: 0 3.2rem;
      color: var(--bg);
      font-weight: 700;

      &:hover {
        /* alterar depois */
        /* content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%; */
        /* position: absolute; */
        /* bottom: 1px;
        left: 0;
        background: var(--blue-400); */
        border-bottom: 2px solid var(--blue-400);
      }
    }
  }
`;

export const HeaderButtonLink = styled.a`
  font-size: 1.6rem;
  color: var(--bg);
  border-radius: 0.3rem;
  background: var(--blue-400);
  border: 0;
  margin-left: 3.2rem;

  padding: 8px 16px 8px 16px;

  transition: 0.3s;

  :hover {
    background: var(--information);
  }
`;
