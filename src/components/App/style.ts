import styled from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#fff",
  dark: "#222"
});

const color = theme("mode", {
  light: "#222",
  dark: "#fff"
});

export const StyledApp = styled.div`
  text-align: center;
  header {
    background-color: ${backgroundColor};
    height: 150px;
    padding: 20px;
    color: ${color};
  }
  img {
    animation: App-logo-spin infinite 20s linear;
    height: 80px;
  }
  h1 {
    font-size: 1.5em;
  }
  & > p {
    font-size: large;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
