import styled from "styled-components";

interface BlockProps {
  transparent?: boolean;
}

const Block = styled<BlockProps, "div">("div")`
  padding: 2em;
  background-color: ${p => (p.transparent ? "transparent" : "#fff")};
`;

export default Block;
