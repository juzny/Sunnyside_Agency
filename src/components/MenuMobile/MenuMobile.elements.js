import styled from "styled-components";

export const Container = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 30rem;
  position: fixed;
  top: 10rem;
  left: 5%;
  background-color: var(--white);

  &.active {
    display: flex;

    @media (min-width: 768px) {
      display: none;
    }
  }

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-bottom: 2.5rem solid var(--white);
    border-left: 2.5rem solid transparent;
    position: absolute;
    top: -2.5rem;
    right: 0;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 2rem;
`;

export const MenuItem = styled.li`
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--yellow);
    border-radius: 2rem;
  }

  .menu__link {
    font-size: 1.4rem;
    line-height: 2.8rem;
    color: var(--grayish-blue);

    &:hover {
      color: var(--very-dark-desaturated-blue);
      text-transform: uppercase;
    }
  }
`;
