import * as React from "react";
import {
  Button as FabricButton,
  IButtonProps
} from "office-ui-fabric-react/lib/Button";
import styled from "styled-components";

const StyledButton = styled(FabricButton)``;
const Button = (props: IButtonProps) => <StyledButton {...props} />;

export default Button;
