import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import PractitionerListItem from "./PractitionerListItem";
import practitionersData from "../utils/practitionersData";

const Provider = ({ toggleComponent, setDisplayedComponent }) => {
  const types = [
    "General Practitioner",
    "Specialist Care Provider",
    "Diagnostic Laboratory Service",
  ];

  const countries = [
    {
      name: "USA",
      states: ["New York", "California", "Texas", "Illinois"],
      cities: {
        "New York": ["New York City", "Buffalo", "Rochester"],
        California: ["Los Angeles", "San Francisco", "San Diego"],
        Texas: ["Houston", "Dallas", "Austin"],
        Illinois: ["Chicago"],
      },
    },
    {
      name: "Canada",
      states: ["Ontario", "Quebec", "British Columbia"],
      cities: {
        Ontario: ["Toronto", "Ottawa", "Mississauga"],
        Quebec: ["Montreal", "Quebec City", "Laval"],
        "British Columbia": ["Vancouver", "Victoria", "Surrey"],
      },
    },
    {
      name: "Spain",
      states: ["Madrid", "Barcelona", "Valencia"],
      cities: {
        Madrid: ["Madrid City", "Alcala de Henares", "Getafe"],
        Barcelona: ["Barcelona City", "Badalona", "L'Hospitalet de Llobregat"],
        Valencia: ["Valencia City", "Alicante", "Elche"],
      },
    },
  ];

  const [selectedType, setSelectedType] = useState(types[0]);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedState, setSelectedState] = useState(selectedCountry.states[0]);
  const [selectedCity, setSelectedCity] = useState(
    selectedCountry.cities[selectedState][0]
  );
  const [page, setPage] = useState(1); // Current page number
  const resultsPerPage = 3; // Number of results per page

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    const country = countries.find((country) => country.name === countryName);
    setSelectedCountry(country);
    setSelectedState(country.states[0]);
    setSelectedCity(country.cities[country.states[0]][0]);
  };

  const handleStateChange = (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);
    setSelectedCity(selectedCountry.cities[stateName][0]);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Filter practitioners based on selected details
  const filteredPractitioners = practitionersData.filter(
    (practitioner) =>
      practitioner.title === selectedType &&
      practitioner.country === selectedCountry.name &&
      practitioner.city === selectedCity
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredPractitioners.length / resultsPerPage);

  // Get current page of results
  const paginatedResults = filteredPractitioners.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container maxWidth="100%">
      <Box
        sx={{
          mt: 2,
          p: 2,
          pt: 4,
          pl: 3,
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Providers List
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          alignContent="center"
          mt={2}
          p={0}
        >
          <Grid item>
            <Select
              fullWidth
              sx={{
                borderRadius: "50px",
              }}
              value={selectedType}
              onChange={handleTypeChange}
            >
              {types.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Select
                  fullWidth
                  sx={{
                    borderRadius: "50px",
                  }}
                  value={selectedCountry.name}
                  onChange={handleCountryChange}
                >
                  {countries.map((country) => (
                    <MenuItem key={country.name} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item>
                <Select
                  fullWidth
                  sx={{
                    borderRadius: "50px",
                  }}
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  {selectedCountry.states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>{" "}
              </Grid>
              <Grid item>
                <Select
                  fullWidth
                  sx={{
                    borderRadius: "50px",
                  }}
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  {selectedCountry.cities[selectedState].map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2}>
          {paginatedResults.map((practitioner, index) => (
            <Box key={index}>
              <PractitionerListItem
                practitioner={practitioner}
                showEmail={true}
                toggleComponent={toggleComponent}
                setDisplayedComponent={setDisplayedComponent}
              />
            </Box>
          ))}
        </Box>
        <Pagination
          count={totalPages}
          color="secondary"
          page={page}
          onChange={handlePageChange}
          sx={{ mt: 2 }}
        />
      </Box>
    </Container>
  );
};

export default Provider;
