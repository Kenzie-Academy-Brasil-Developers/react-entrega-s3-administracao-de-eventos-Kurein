import Card from "../../components/Card";
import { useContext } from "react";
import { GraduationListContext } from "../../providers/graduationList";
import { Container } from "../Styles/styles";

function Graduation() {
  const { graduationList } = useContext(GraduationListContext);

  return (
    <Container>
      {graduationList.map((elt, index) => (
        <Card key={index} product={elt} isGrad={true} />
      ))}
    </Container>
  );
}

export default Graduation;
