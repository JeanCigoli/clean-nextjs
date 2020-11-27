import React from "react";
import { H1 } from "../foundation/Title";
import Paragraph from "../foundation/Paragraph";

import {
  Container,
  ContainerText,
  ContainerImage,
  Image,
  TextDev,
  OneCircle,
  TwoCircle,
  ThreeCircle
} from "./styled";

const Header = () => {
  return (
    <Container>
      <ContainerText>
        <TextDev>Back-end and Front-end Developer</TextDev>

        <H1
          textAlign="left"
          text="Talk is cheap. Show me the code"
          fontSize="xLarge"
          color="white"
        />

        <Paragraph
          text="I design and code beautifully simple things, and I love what I do."
          textAlign="left"
          color="whiteOpacity"
        />
      </ContainerText>

      <ContainerImage>
        <OneCircle width="100px" height="100px" />
        <TwoCircle width="200px" height="200px" />
        <ThreeCircle width="70px" height="70px" />
        
        <Image
          src="/assets/logoLight.png"
          alt="Logo do site Cigoli Developer"
          unsized
        />
      </ContainerImage>
    </Container>
  );
};

export default Header;