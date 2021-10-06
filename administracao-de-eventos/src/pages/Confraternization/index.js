import Card from "../../components/Card";
import { useContext } from "react";
import { ConfraternizationListContext } from "../../providers/confraternizationList";

function Confraternization() {
  const { confraternizationList } = useContext(ConfraternizationListContext);

  return (
    <div>
      {confraternizationList.map((elt, index) => (
        <Card key={index} product={elt} isConf={true} />
      ))}
    </div>
  );
}

export default Confraternization;
