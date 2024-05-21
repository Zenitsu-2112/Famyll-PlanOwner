import React, { useState } from "react";
import { Paper, IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = ({
  onSearch,
  setDisplayedComponent,
  toggleComponent,
  previousComponent,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [prevComponent, setPrevComponent] = useState(previousComponent);

  // useEffect(() => {
  //   setPrevComponent(previousComponent);
  // }, [previousComponent]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
    setDisplayedComponent("SearchResults");
    toggleComponent("SearchResults", "Search Results");
    if (value === "") {
      // setDisplayedComponent(prevComponent);
      // toggleComponent(prevComponent, prevComponent);
      // console.log(prevComponent);
      setDisplayedComponent("MyCarePortfolio");
      toggleComponent("MyCarePortfolio", "My Care Portfolio");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    // Optionally, you can add logic here to handle form submission
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        width: "100%", // Adjusted width to take full width
        maxWidth: 900, // Max width increased to 800px
        boxShadow: "none",
        mr: { sm: 2, xs: 1 },
        ml: { xs: 2 },
        "@media (min-width: 600px)": {
          // Adjust styles for medium screens and above
          width: { md: "350px", xs: "50%" }, // Auto width for medium screens and above
          maxWidth: "none", // No maximum width for medium screens and above
        },
      }}
    >
      <TextField
        className="search-bar"
        placeholder="Search Here"
        value={searchTerm}
        onChange={handleChange}
        sx={{
          paddingTop: "3px", // Decrease top padding
          paddingBottom: "3px", // Decrease bottom padding
          "& .MuiInputBase-input": {
            padding: "6px 8px", // Adjust input padding directly
          },
          "& fieldset": {
            border: "none", // Remove border from fieldset
            borderRadius: "20px", // Adjust border radius if desired
            width: "100%",
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton
              type="submit"
              sx={{ color: "grey", ml: { md: 14, sm: 5, xs: 3 } }}
            >
              <Search />
            </IconButton>
          ),
          sx: {
            paddingRight: "0px",
          },
        }}
      />
    </Paper>
  );
};

export default SearchBar;
