import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({
  value,
  onChange,
  placeholder = "Search athletes, coaches, academies or opportunities...",
}) {
  return (
    <div className="search-bar">

      <FaSearch className="search-icon" />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input"
      />

    </div>
  );
}

export default SearchBar;
