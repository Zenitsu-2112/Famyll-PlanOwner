import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

const PractitionerListItem = ({
  practitioner,
  showEmail,
  toggleComponent,
  setDisplayedComponent,
}) => {
  const handleViewDetails = () => {
    setDisplayedComponent("ViewDetails");
    toggleComponent("ViewDetails", `${practitioner.title}`, practitioner);
  };
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography sx={{ fontWeight: "bold" }}>
            {practitioner.title}
          </Typography>
        </Grid>
        <Grid item>Remaining Visits: {practitioner.remainingVisits}</Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 175,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  mt: 2,
                }}
                alt="The house from the offer."
                src={practitioner.imageUrl}
              />
            </Grid>
            <Grid
              item
              sx={{
                ml: 2,
              }}
            >
              <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
                {practitioner.name}
              </Typography>
              {showEmail && (
                <Box display="flex">
                  <Typography>Email:</Typography>
                  <Typography marginLeft={3} fontWeight="bold">
                    {practitioner.email}
                  </Typography>
                </Box>
              )}
              <Box display="flex">
                <Typography>Phone:</Typography>
                <Typography marginLeft={2} fontWeight="bold">
                  {practitioner.phone}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography>City:</Typography>
                <Typography marginLeft={4.25} fontWeight="bold">
                  {practitioner.city}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={handleViewDetails}
            sx={{
              backgroundColor: "#ebf3f7",
              borderRadius: "50px",
              color: "black",
              mt: { md: -13, sm: 0 },
              textTransform: "none",
            }}
          >
            View Details
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3, mb: 3 }} />
    </>
  );
};

export default PractitionerListItem;
