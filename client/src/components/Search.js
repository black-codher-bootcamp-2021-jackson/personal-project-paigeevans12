import React from "react";

const Search = (props) => {
  const onSubmitSearch = (event) => {
    event.preventDefault();
    if (event.target.value !== "") {
      props.search(props.userInput);
    }
    if (event.target.value === "") {
      props.setTerm("");
    }
  };

  return (
    <>
      <form id="searchAPI" onSubmit={onSubmitSearch}>
        <input
          type="search"
          id="search-bar"
          name="search-bar"
          aria-label="Search through site content"
          value={props.userInput}
          onChange={(event) => props.setTerm(event.target.value)}
        />
        <button className="search-button">Search</button>
      </form>
    </>
  );
};

export default Search;