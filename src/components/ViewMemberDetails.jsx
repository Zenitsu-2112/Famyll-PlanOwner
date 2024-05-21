import * as React from "react";
import Accordion from "@mui/material/Accordion";
import { profile } from "../Assets";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { memberCard } from "../Assets";

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export default function ViewMemberDetails({
  toggleComponent,
  setDisplayedComponent,
}) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = (value) => {
    setOpenDialog(false);
  };

  const handleEdit = () => {
    // Update displayedComponent state
    setDisplayedComponent("EditMember");
    toggleComponent("EditMember", "Edit Member");
  };

  const handleUpdate = () => {
    // Update displayedComponent state
    setDisplayedComponent("UpdatePlan");
    toggleComponent("UpdatePlan", "Update Coverage Plan");
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
          Member : #FML1028M
        </Typography>
        <Divider />
        <Box
          maxWidth="100%"
          display="flex"
          sx={{
            mt: 5, // Add a negative margin here
          }}
        >
          <Box
            maxWidth="100px"
            height="121px"
            borderRadius="10px"
            sx={{
              backgroundImage: `url(${profile})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              ml: 2,
              flex: 1,
            }}
          >
            {" "}
          </Box>
          <Box
            sx={{
              marginTop: "60px",
              flex: 2,
            }}
          >
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid
                item
                sx={{
                  ml: 1,
                }}
              >
                <Grid
                  container
                  sx={{
                    mt: -8,
                  }}
                >
                  <Grid item>
                    <Stack direction="column">
                      <Typography variant="h5" fontWeight="bold" ml={2} mb={1}>
                        John Jacob Smith
                      </Typography>
                      <Typography variant="subtitle" ml={2} mb={1}>
                        Gender: Male
                      </Typography>
                      <Typography variant="subtitle" ml={2} mb={1}>
                        DOB: 12/2/1986
                      </Typography>
                      <Typography variant="subtitle" ml={2} mb={1}>
                        Relation: Brother
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item mt={-18}>
                <Button
                  onClick={handleDialogOpen}
                  color="secondary"
                  size="large"
                  sx={{
                    border: "1px solid #7338ac",
                    borderRadius: "50px",
                    backgroundColor: "#7338ac",
                    color: "white",
                    textTransform: "none",
                    mr: 2,

                    ":hover": {
                      backgroundColor: "#b262fe",
                    },
                  }}
                >
                  Membership Card
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleEdit}
                  sx={{
                    backgroundColor: "#ebf3f7",
                    borderRadius: "152px",
                    boxShadow: "none",
                    color: "black",
                    textTransform: "none",

                    ":hover": {
                      backgroundColor: "#b262fe",
                    },
                  }}
                >
                  Edit Member
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider />
        <Box>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6" fontWeight="bold">
                Contact Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1.5}>
                <Grid item xs={6} md={4}>
                  {" "}
                  <Typography variant="subtitle2" mb={1}>
                    Email Address
                  </Typography>
                  <Typography fontWeight="bold">example@email.com</Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                  {" "}
                  <Typography variant="subtitle2" mb={1}>
                    City
                  </Typography>
                  <Typography fontWeight="bold">Chicago</Typography>
                </Grid>

                <Grid item xs={6} md={4}>
                  {" "}
                  <Typography variant="subtitle2" mb={1}>
                    Country
                  </Typography>
                  <Typography fontWeight="bold">United States</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Divider />
        <Box>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6" fontWeight="bold">
                Pre-existing Condition
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1.5}>
                <Grid item xs={6} md={4}>
                  <Typography variant="subtitle2" mb={1}>
                    High Bloodpressure,Diabetes
                  </Typography>
                  <Grid container>
                    <Grid item>
                      <Typography variant="subtitle2">Smoker:</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Yes
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Divider />
        <Box>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6" fontWeight="bold">
                Plan Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                borderRadius={2}
                sx={{
                  mt: "10px",
                  p: "20px",
                  backgroundColor: "#f5f4f9",
                }}
              >
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="h5" fontWeight="bold">
                    Basic Plan{" "}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleUpdate}
                    sx={{
                      backgroundColor: "#ebf3f7",
                      border: "1px solid #b262fe ",
                      borderRadius: "152px",
                      boxShadow: "none",
                      color: "#b262fe",
                      textTransform: "none",

                      ":hover": {
                        backgroundColor: "#b262fe",
                      },
                    }}
                  >
                    Update Coverage Plan
                  </Button>
                </Stack>

                <Grid container alignItems="center" my={2}>
                  <Grid item xs={6}>
                    <Typography variant="h6">Coverage Details</Typography>
                    <Typography variant="body1">
                      General Practitioner: 1 visit, 156 FCFA
                    </Typography>
                    <Typography variant="body1">
                      Specialist Care Provider: 1 visit, 156 FCFA
                    </Typography>
                    <Typography variant="body1">
                      Radiation Therapy: 1 visit, 156 FCFA
                    </Typography>
                    <Typography variant="body1">
                      Maternity (Labor and Delivery): 1 visit, 156 FCFA
                    </Typography>
                    <Typography variant="body1">
                      {" "}
                      Pharmacy: 1 visit, 156 FCFA
                    </Typography>
                    <Typography variant="body1">
                      Hospitalization: 1 visit, 156 FCFA{" "}
                    </Typography>{" "}
                  </Grid>{" "}
                  <Grid item xs={6}>
                    {" "}
                    <Typography variant="h6">
                      Coverage Percentage
                    </Typography>{" "}
                    <Typography variant="body1">
                      {" "}
                      Pelvic exam is covered at 50%.{" "}
                    </Typography>{" "}
                    <Typography variant="body1">
                      You can combine visit counts per covered service for one
                      physical visit. For example, if you have 3 visits for CT
                      Scanner at cost of 180,000 FCFA and 50%, the insurance
                      plan will cover 90,000 FCFA.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
      <Dialog
        onClose={handleDialogClose}
        open={openDialog}
        justifyContent="center"
        alignItems="center"
      >
        <DialogTitle sx={{ textAlign: "center" }}>Membership Card</DialogTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              p: 2,
              height: 340,
              width: 500,
            }}
            alt="Membership Card"
            src={memberCard}
          />
          <Button
            variant="outlined"
            sx={{
              mb: 2,
              backgroundColor: "#7338ac",
              color: "white",
              borderRadius: "16px/50%",
              ":hover": {
                backgroundColor: "#b262fe",
              },
            }}
          >
            Download Membership Card
          </Button>
        </Box>
      </Dialog>
    </Container>
  );
}
