import { useContext } from "react";
import { WeddingListContext } from "../../providers/weddingList";
import { ConfraternizationListContext } from "../../providers/confraternizationList";
import { GraduationListContext } from "../../providers/graduationList";
import { Container } from "./styles";

function Card({
  product,
  isHome = false,
  isWedd = false,
  isGrad = false,
  isConf = false,
}) {
  const {
    image_url,
    name,
    first_brewed,
    volume: { unit, value },
    description,
    id,
  } = product;

  const { addToWedding, removeFromWedding } = useContext(WeddingListContext);
  const { addToGraduation, removeFromGraduation } = useContext(
    GraduationListContext
  );
  const { addToConfraternization, removeFromConfraternization } = useContext(
    ConfraternizationListContext
  );

  function placeCheck() {
    return isHome ? (
      <div>
        <button onClick={() => addToGraduation(product)}>Formatura</button>
        <button onClick={() => addToWedding(product)}>Casamento</button>
        <button onClick={() => addToConfraternization(product)}>
          Confraternização
        </button>
      </div>
    ) : isWedd ? (
      <button onClick={() => removeFromWedding(id)}>Retirar</button>
    ) : isGrad ? (
      <button onClick={() => removeFromGraduation(id)}>Retirar</button>
    ) : isConf ? (
      <button onClick={() => removeFromConfraternization(id)}>Retirar</button>
    ) : null;
  }

  return (
    <Container>
      <img src={image_url} alt={name} />
      <h1>{name}</h1>
      <h2>{first_brewed}</h2>
      <p>{`${value} ${unit}`}</p>
      <p>{description}</p>
      {placeCheck()}
    </Container>
  );
}

export default Card;
