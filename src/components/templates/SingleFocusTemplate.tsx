import * as React from "react";
import { IImage } from "office-ui-fabric-react/lib/components/Image/Image.types";
import styled from "styled-components";
type ReactNode = React.ReactNode;

interface SingleFocusInterface {
  branding: IImage;
  footer: ReactNode;
  children: ReactNode;
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Branding = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: none;
`;

const ContentWrapper = styled.div`
  z-index: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 600px;
  padding: 50px;
  box-sizing: border-box;
`;

const Content = styled.div``;

const Footer = styled.div`
  justify-self: flex-end;
`;

const SingleFocusTemplate = (props: SingleFocusInterface) => (
  <Wrapper>
    <Branding>{props.branding}</Branding>
    <ContentWrapper>
      <Content>{props.children}</Content>
      <Footer>{props.footer}</Footer>
    </ContentWrapper>
  </Wrapper>
);

export default SingleFocusTemplate;
