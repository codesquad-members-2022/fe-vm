import styled from "styled-components";

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  padding-top: 20px;
  margin-bottom: 10px;

  ul {
    display: flex;
    margin-bottom: 20px;
  }
`;

const Li = styled.li`
  & + & {
    margin-left: 1rem;
  }

  a {
    display: grid;
    place-items: center;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }
`;

export { StyledNav, Li };
