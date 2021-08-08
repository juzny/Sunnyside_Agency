import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .nav_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding: 0 2rem;
  }

  &.active {
    .line {
      &:first-child {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }
`;

export const NavList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const NavItem = styled.li`
  margin-right: 1.5rem;
  border-radius: 2rem;

  &:hover {
    background-color: var(--white);
  }

  .link {
    display: inline-block;
    padding: 1rem 2rem;
    color: var(--white);
    font-size: 1.8rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--very-dark-desaturated-blue);
    }
  }
`;

export const NavBurger = styled.div`
  width: 3rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  .line {
    width: 100%;
    height: 0.3rem;
    background-color: var(--white);
    transform-origin: 0;
    transition: all 0.1s ease-in-out;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
