import styled from "styled-components";
import mobileHeader from "../../images/mobile/image-header.jpg";
import desktopHeader from "../../images/desktop/image-header.jpg";

export const Container = styled.section`
  height: 50rem;
  background: url(${mobileHeader}) no-repeat center/cover;

  @media (min-width: 768px) {
    height: 90vh;
    background: url(${desktopHeader}) no-repeat center/cover;
  }
`;

export const Text = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .title {
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
    font-size: 3.5rem;
    letter-spacing: 0.3rem;

    @media (min-width: 768px) {
      font-size: 7rem;
    }
  }

  .arrow {
    align-self: center;
    margin-top: 4rem;
  }
`;
