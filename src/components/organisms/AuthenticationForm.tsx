import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import styled from "styled-components";
import { GroupLabel } from "..";

const StyledTextField = styled(TextField)`
  margin: 0.5em 0 !important;
`;
const Submission = styled.div`
  margin-top: 2.375em;
  margin-bottom: 1.875em;
`;

const AuthenticationForm = () => (
  <div>
    <GroupLabel>Logg på med din konto</GroupLabel>
    <form>
      <StyledTextField placeholder="noen@example.com" validateOnFocusOut />
      <StyledTextField placeholder="password" validateOnFocusOut />
      <Submission>
        <DefaultButton primary text="Logg på" />
      </Submission>
    </form>
  </div>
);

export default AuthenticationForm;
