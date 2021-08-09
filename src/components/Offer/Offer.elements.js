import styled from "styled-components";

export const Container = styled.section`
  .offer_wrap {
    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;

      img {
        flex: 50%;
      }
    }
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: 5rem 2rem;

  .title {
    font-weight: 900;
    font-size: 3rem;
    color: var(--very-dark-desaturated-blue);
  }

  .description {
    font-size: 1.9rem;
    margin: 3rem 0;
    color: var(--very-dark-desaturated-blue);
  }

  .btn_wrap {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    align-self: center;

    &:hover .decoration {
      width: 100%;
    }

    .btn_link {
      font-family: "Fraunces", sans-serif;
      font-weight: 900;
      font-size: 1.6rem;
      text-transform: uppercase;
    }

    .decoration {
      width: 70%;
      border-bottom: 0.2rem solid var(--yellow);
      transition: width 0.3s ease-in-out;
    }
  }

  @media (min-width: 768px) {
    flex: 50%;
  }
`;
