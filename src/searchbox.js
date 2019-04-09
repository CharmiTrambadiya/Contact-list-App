import React from "react";

function searchChange(event, props){
  const {searchChange} = props;
  searchChange(event.target.value);
}

const SearchBox = (props) => {
return(
  <div className="search-box">
    <input
      type='search'
      placeholder='search here'
      onChange={(e) => searchChange(e, props)} />
  </div>
);
}

export default SearchBox;