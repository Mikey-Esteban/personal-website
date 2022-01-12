import styled from "styled-components";

export const StyledMenu = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--darkblue);
  height: 100vh;
  width: 100%;
  min-width: 300px;
  text-align: center;
  /* padding: 0 2rem; */
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.8rem;
    padding: 1.5rem 0;
    font-weight: 300;
    letter-spacing: 0.5rem;
    color: ${({ open, theme }) => "black"};
    text-decoration: none;
    transition: color 0.3s linear;


    @media only screen and (max-width: 480px) {
      font-size: 1.5rem;
    }

    &:hover {
      color: ${({ theme }) => '#e6f3fd'};
    }
  }
`;
