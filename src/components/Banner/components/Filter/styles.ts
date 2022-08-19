import styled from "styled-components";

export const FilterContainer = styled.div`
max-width:103rem;
width:100%;
height:13rem;
background: var(--white);

display:flex;
align-items:center;
justify-content:center;
border-radius: .3rem;

position: absolute;
top: 53rem;

border: 1px solid red;
`

export const FilterContent = styled.form`
display: flex;
align-items: center;
justify-content: space-around;

width: 100%;

border: 1px solid red;

section{
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  label{
    font-size: 1.4rem;
    color: var(--title);
    line-height:2rem;
  }

  select{
    width: 27rem;
    height: 3.9rem;
    border-radius: .3rem;
    background: var(--gray-100);
  }

}
`

export const FilterButtonLink = styled.a`
    font-size: 1.8rem;
    border-radius: .3rem;
    padding: 8px 16px ;
    border: 0;
    
    background: var(--blue-400);
    color: var(--bg);

    transition:  .3s;

    :hover{
      background: var(--information);
    }

`