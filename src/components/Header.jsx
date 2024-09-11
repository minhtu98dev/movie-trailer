import { useState } from "react";
import PropTypes from "prop-types";

function Header({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue); // Truyền giá trị tìm kiếm vào hàm onSearch
  };

  return (
    <div className="bg-black p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-red-800 text-4xl font-bold uppercase">Movie</h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleInputChange}
          className="p-2 text-black rounded-xl"
        />
        <button
          className="text-white bg-red-800 p-2 rounded-xl"
          onClick={handleSearchClick} // Sử dụng hàm này để gọi onSearch
        >
          Search
        </button>
      </div>
    </div>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
