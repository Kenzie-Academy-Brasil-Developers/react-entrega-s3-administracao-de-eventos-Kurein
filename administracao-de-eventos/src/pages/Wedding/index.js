import Card from "../../components/Card";
import { useContext } from "react";
import { WeddingListContext } from "../../providers/weddingList";
import { Container } from "../Styles/styles";

function Wedding() {
  const { weddingList } = useContext(WeddingListContext);

  return (
    <Container>
      {weddingList.map((elt, index) => (
        <Card key={index} product={elt} isWedd={true} />
      ))}
    </Container>
  );
}

export default Wedding;
