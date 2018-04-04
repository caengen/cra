import * as React from "react";
import { ThemeProvider } from "styled-components";
import * as theme from "../themes/default";
import { createRoutes } from "@App/components/routes";

class App extends React.Component {
  render() {
    return <ThemeProvider theme={theme}>{createRoutes()}</ThemeProvider>;
  }
}

export default App;
