import Card from "../../components/Card";
import { Container } from "../Styles/styles";

function Home({ beersList }) {
  return (
    <Container>
      {beersList.map((elt, index) => (
        <Card key={index} product={elt} isHome={true} />
      ))}
    </Container>
  );
}

export default Home;
