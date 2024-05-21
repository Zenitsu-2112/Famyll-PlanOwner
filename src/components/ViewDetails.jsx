import * as React from "react";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Box, Container, Divider, Grid, Typography } from "@mui/material";

export default function ViewDetails({ practitioner }) {
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

                <Box display="flex">
                  <Typography>Provider Type:</Typography>
                  <Typography marginLeft={3.3} fontWeight="bold">
                    {practitioner.title}
                  </Typography>
                </Box>

                <Box display="flex">
                  <Typography>Graduation Year:</Typography>
                  <Typography marginLeft={1.2} fontWeight="bold">
                    {practitioner.graduationYear}
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography>Graduated From:</Typography>
                  <Typography marginLeft={1} fontWeight="bold">
                    {practitioner.university}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2, mb: 2 }} />
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
              <Grid item xs={6} md={2.4}>
                <Typography variant="subtitle2" mb={1}>
                  Phone Number
                </Typography>
                <Typography fontWeight="bold">{practitioner.phone}</Typography>
              </Grid>
              <Grid item xs={6} md={2.4}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  Email Address
                </Typography>
                <Typography fontWeight="bold">{practitioner.email}</Typography>
              </Grid>
              <Grid item xs={6} md={2.4}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  City
                </Typography>
                <Typography fontWeight="bold">{practitioner.city}</Typography>
              </Grid>
              <Grid item xs={6} md={2.4}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  State/province
                </Typography>
                <Typography fontWeight="bold">{practitioner.state}</Typography>
              </Grid>
              <Grid item xs={6} md={2.4}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  Country
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.country}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6" fontWeight="bold">
              Primary Clinic
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1.5}>
              <Grid item xs={6} md={4}>
                <Typography variant="subtitle2" mb={1}>
                  Name:
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.primaryClinicName}
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  Phone Number:
                </Typography>
                <Typography fontWeight="bold">{practitioner.phone}</Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  Business Address
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.address}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6" fontWeight="bold">
              Primary Hospital
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1.5}>
              <Grid item xs={6} md={4}>
                <Typography variant="subtitle2" mb={1}>
                  Name:
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.primaryClinicName}
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  Phone Number:
                </Typography>
                <Typography fontWeight="bold">{practitioner.phone}</Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  Business Address
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.address}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6" fontWeight="bold">
              Affiliated Hospital
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1.5}>
              <Grid item xs={6} md={4}>
                <Typography variant="subtitle2" mb={1}>
                  Name:
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.primaryClinicName}
                </Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  Business Address
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.address}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6" fontWeight="bold">
              Affiliated Clinic
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1.5}>
              <Grid item xs={6} md={4}>
                <Typography variant="subtitle2" mb={1}>
                  Name:
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.primaryClinicName}
                </Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  Business Address
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.address}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Accordion sx={{ boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h6" fontWeight="bold">
              Consulation
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1.5}>
              <Grid item xs={6} md={4}>
                <Typography variant="subtitle2" mb={1}>
                  Consulation Days:
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.consulationDays}
                </Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                {" "}
                <Typography variant="subtitle2" mb={1}>
                  Consulation Hours
                </Typography>
                <Typography fontWeight="bold">
                  {practitioner.consulationHours}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
