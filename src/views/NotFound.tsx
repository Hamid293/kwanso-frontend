import { GlobalStyle } from "../components/GlobalStyle";
import { FlexContainer } from "../components/styled/FlexContainer";
import { Heading } from "../components/styled/Heading";

function NotFound(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <FlexContainer>
        <Heading>404 Not Found</Heading>
      </FlexContainer>
    </>
  );
}

export default NotFound;
