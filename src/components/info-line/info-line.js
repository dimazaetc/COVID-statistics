import "./info-line.css";
function InfoLine({ sortData }) {
  return (
    <div className="info-line_wrapper ">
      <div className="row">
        <div className="col-md-1 col-2">№</div>
        <div className="col-md-7 col-6">Country</div>
        <div className="col-md-4 col-4">Total Confirmed</div>
      </div>
    </div>
  );
}
export default InfoLine;
