import styled from "styled-components";

export const FilterContainer = styled.div`
  /* max-width: 103rem; */
  max-width: 80rem;
  width: 100%;
  height: 13rem;
  background: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;

  position: absolute;
  top: 53rem;

  /* border: 1px solid red; */
`;

export const FilterContent = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  width: 100%;

  /* border: 1px solid red; */

  section {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    label {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--title);
      line-height: 2rem;
    }

    select {
      width: 27rem;
      height: 3.9rem;
      border-radius: 0.3rem;
      background: var(--gray-100);

      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.2rem;
      color: var(--text-off);

      border: 0;

      /* teste */
      /* appearance: none;
      position: relative; */
    }

    /* select::after {
      content: "";
      position: absolute;
      right: 8px;
      top: 50%;
      margin-top: 4px;
      border-top: 8px solid green;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      pointer-events: none;
    } */

    /* select::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 8px;zzzzzzzzzzzzzzzzzzz
      padding: 0 1em;
      background: #2b2e2e;
      cursor: pointer;
      pointer-events: none;
      transition: 0.25s all ease;

      border: 8px solid red;
    } */
  }
`;

export const FilterButtonLink = styled.a`
  font-size: 1.8rem;
  border-radius: 0.3rem;
  padding: 8px 16px;
  border: 0;

  background: var(--blue-400);
  color: var(--bg);

  transition: 0.3s;

  :hover {
    background: var(--information);
  }
`;
