import "./search.css";
import logo from "./search.png";
function Search({ onChange, autocomplete, value, onClick }) {
  return (
    <div className="search_wrapper">
      <input
        value={value}
        className="search"
        type="text"
        placeholder="Search.."
        onChange={onChange}
        onClick={onClick}
      ></input>
      <img src={logo} alt="search" />
      <ul className="autocomplete">{autocomplete}</ul>
    </div>
  );
}
export default Search;
