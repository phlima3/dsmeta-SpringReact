import icon from "../../assets/img/notification-icon.svg";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
  saleId: number;
};

export const NotificationButton = ({ saleId }: Props) => {
  function handleClick(id: number) {
    axios
      .get(`${BASE_URL}/sales/${id}/notification`)
      .then(() => alert("Notificação enviada com sucesso!"));
  }

  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Ícone notificação" />
    </div>
  );
};
