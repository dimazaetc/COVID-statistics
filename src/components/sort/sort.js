import "./sort.css";
function Sort({ sortCountry, sortTotalConfirmed, sortData }) {
  return (
    <div className="container">
      <div className="row sort">
        <div className="col-md-2 col-2">Sort by:</div>
        <div
          onClick={() => sortData("Country")}
          className="col-md-6 col-6 sortCountry"
        >
          {sortCountry ? <span>Z-A</span> : <span>A-Z</span>}
        </div>
        <div
          onClick={() => sortData("TotalConfirmed")}
          className="col-md-4 col-4 sortTotalConfirmed"
        >
          {sortTotalConfirmed ? (
            <span>Hight To Low</span>
          ) : (
            <span>Low To Hight</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sort;
