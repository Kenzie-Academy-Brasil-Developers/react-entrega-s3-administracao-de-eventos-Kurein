import { useHistory } from "react-router-dom";
import { Container, Button } from "./styles";

function Buttons() {
  const history = useHistory();

  return (
    <Container>
      <div>
        <Button main onClick={() => history.push("/")}>
          Home
        </Button>
      </div>
      <div>
        <Button onClick={() => history.push("/graduation")}>Formatura</Button>
        <Button onClick={() => history.push("/wedding")}>Casamento</Button>
        <Button onClick={() => history.push("/confraternization")}>
          Confraternização
        </Button>
      </div>
    </Container>
  );
}

export default Buttons;
