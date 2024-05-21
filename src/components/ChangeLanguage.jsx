import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ChangeLanguage = () => {
  const [language, setLanguage] = useState("English");
  const handleLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <Container maxWidth="100%">
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "25px",
          p: 2,
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={8}>
            <Typography
              marginTop={2}
              marginBottom={1}
              mx={1}
              component="h1"
              variant="h6"
              color="text.secondary"
              fontSize={14}
              fullWidth
            >
              {" "}
              Select Your Language
            </Typography>
            <Select
              fullWidth
              sx={{
                borderRadius: "50px",
              }}
              value={language}
              onChange={handleLanguage}
              displayEmpty
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              size="large"
              sx={{
                border: "1px solid #7338ac",
                borderRadius: "50px",
                backgroundColor: "#7338ac",
                color: "white",
                ":hover": {
                  backgroundColor: "#b262fe",
                },
                mt: 7,
              }}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ChangeLanguage;
