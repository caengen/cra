import * as React from "react";
import { SingleFocusTemplate, AuthenticationForm, CopyRights } from "../..";
import { Image } from "office-ui-fabric-react/lib/components/Image";
const imageSrc = require("@App/assets/login.jpg");

const LoginPage = () => (
  <SingleFocusTemplate
    branding={
      <Image maximizeFrame shouldFadeIn src={imageSrc} alt="Branding" />
    }
    footer={<CopyRights />}
  >
    <AuthenticationForm />
  </SingleFocusTemplate>
);

export default LoginPage;
