import icon from "../../assets/img/notification-icon.svg";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import "./styles.css";
import { toast } from "react-toastify";

type Props = {
  saleId: number;
};

export const NotificationButton = ({ saleId }: Props) => {
  function handleClick(id: number) {
    axios
      .get(`https://dsmeta-phlima.herokuapp.com/sales/${id}/notification`)
      .then(() => {
        toast.success("SMS enviado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao enviar SMS!");
      });
  }

  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Ícone notificação" />
    </div>
  );
};
