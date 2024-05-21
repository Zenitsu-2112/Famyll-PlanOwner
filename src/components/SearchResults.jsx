import React from "react";
import PractitionerListItem from "./PractitionerListItem";
import { Box } from "@mui/material";

const SearchResults = ({ practitioners }) => {
  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        pt: 4,
        pl: 3,
        backgroundColor: "white",
        borderRadius: "20px",
      }}
    >
      {/* Render the practitioners passed as props */}
      {practitioners.map((practitioner) => (
        <PractitionerListItem
          key={practitioner.id}
          practitioner={practitioner}
        />
      ))}
    </Box>
  );
};

export default SearchResults;
