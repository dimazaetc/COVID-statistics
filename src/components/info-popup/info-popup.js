import "./info-popup.css";
import ConfirmedIcon from "./info-popup-img/Confirmed.png";
import DeathIcon from "./info-popup-img/Death.png";
import RecoveredIcon from "./info-popup-img/Recovered.png";

function InfoPopup({ name, confirmed, death, recovered, onClick }) {
  return (
    <div className="info-popup">
      <h3>{name}</h3>
      <ul className="info-popup_ul">
        <li>
          <div>
            <img src={ConfirmedIcon} alt="Confirmed" />
            <span>Total Confirmed</span>
          </div>
          <span>{confirmed}</span>
        </li>
        <li>
          <div>
            <img src={DeathIcon} alt="Death" />
            <span>Total Deaths</span>
          </div>
          <span>{death}</span>
        </li>
        <li>
          <div>
            <img src={RecoveredIcon} alt="Recovered" />
            <span>Total Recovered</span>
          </div>
          <span>{recovered}</span>
        </li>
      </ul>
      <button onClick={onClick}>OK</button>
    </div>
  );
}
export default InfoPopup;
