import "./country-item.css";
function CountryItem({ index, country, total, onClick }) {
  return (
    <div onClick={onClick} className="country-item_wrapper ">
      <div className="row">
        <div className="col-md-1 col-2">{index}</div>
        <div className="col-md-7 col-6">{country}</div>
        <div className="col-md-4 col-4">{total}</div>
      </div>
    </div>
  );
}
export default CountryItem;
