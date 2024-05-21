import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Checkbox,
  FormControl,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { theM } from "../Assets";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UpdatePlan = () => {
  const [age, setAge] = React.useState("18-44");
  const [frequency, setFrequency] = React.useState("monthly");
  const [plan, setPlan] = React.useState("");
  const [displayOwnerName, setDisplayOwnerName] = React.useState(false);
  const theM1 = `${theM}`;

  const handleDisplayOwnerNameChange = (event) => {
    setDisplayOwnerName(event.target.checked);
  };
  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
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
        <Box>
          <Box mt={2} mb={2}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Update your plan details.
            </Typography>

            <Box
              backgroundColor="#F5F4F9"
              sx={{
                p: 2,
                mt: 2,
                borderRadius: "25px",
              }}
            >
              <Grid container spacing={2} mb={4}>
                <Grid item md={8}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Change Payment Plan Frequency
                  </Typography>
                  <Typography variant="subtitle1">
                    For each coverage option selected, we display different
                    details and different cost.
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <FormControl fullWidth>
                    <Select
                      id="age-select"
                      value={age}
                      onChange={handleChange}
                      sx={{
                        borderRadius: "50px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                        },
                      }}
                    >
                      <MenuItem value="18-44">18-44 Yr Old</MenuItem>
                      <MenuItem value="44-60">44-60 Yr Old</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={2}>
                  {" "}
                  <FormControl fullWidth>
                    <Select
                      labelId="frequency-select-label"
                      id="frequency-select"
                      value={frequency}
                      onChange={handleFrequencyChange}
                      sx={{
                        color: "purple",
                        border: "1px solid purple",
                        borderRadius: "50px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                        },
                      }}
                    >
                      <MenuItem value="monthly">Monthly</MenuItem>
                      <MenuItem value="yearly">Yearly</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2} maxWidth="100%" flexWrap="nowrap">
                <RadioGroup value={plan} onChange={handlePlanChange} row>
                  <Grid item md={4} p={2}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        p: 2,
                        borderRadius: "10px",
                        width: "380px",
                        height: "156px",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item md={8}>
                          {" "}
                          <FormControlLabel
                            value="basic"
                            control={<Radio />}
                            label="Basic Plan"
                          />
                          <Stack direction="row">
                            <Typography variant="h3">$18</Typography>
                            <Typography
                              variant="h3"
                              fontSize="20px"
                              mt={3}
                              color="#826C99"
                            >
                              /MONTH
                            </Typography>
                          </Stack>
                          <Typography>Annual Membership: $15</Typography>
                        </Grid>
                        <Grid item md={4}>
                          <img alt="theme" src={theM1}></img>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item md={4} p={2}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        p: 2,
                        borderRadius: "10px",
                        width: "380px",
                        height: "156px",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item md={8}>
                          {" "}
                          <FormControlLabel
                            value="specialist"
                            control={<Radio />}
                            label="Specialist Plan"
                          />
                          <Stack direction="row">
                            <Typography variant="h3">$20</Typography>
                            <Typography
                              variant="h3"
                              fontSize="20px"
                              mt={3}
                              color="#826C99"
                            >
                              /MONTH
                            </Typography>
                          </Stack>
                          <Typography>Annual Membership: $15</Typography>
                        </Grid>
                        <Grid item md={4}>
                          <img alt="theme" src={theM1}></img>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>

                  <Grid item md={4} p={2}>
                    <Box
                      sx={{
                        backgroundColor: "white",
                        p: 2,
                        borderRadius: "10px",
                        width: "380px",
                        height: "156px",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item md={8}>
                          {" "}
                          <FormControlLabel
                            value="byop"
                            control={<Radio />}
                            label="Build Your Own Plan"
                          />
                          <Stack direction="row">
                            <Typography variant="h3">$90.62</Typography>
                            <Typography
                              variant="h3"
                              fontSize="20px"
                              mt={3}
                              color="#826C99"
                            >
                              /MONTH
                            </Typography>
                          </Stack>
                          <Typography>Annual Membership: $15</Typography>
                        </Grid>

                        <Grid item md={4}>
                          <img alt="theme" src={theM1}></img>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </RadioGroup>
              </Grid>
              <Box>
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Basic Plan Details
                </Typography>
                <Box
                  sx={{
                    p: 2,
                    mt: 2,
                    mb: 2,
                    borderRadius: "25px",
                  }}
                  backgroundColor="white"
                >
                  <Stack direction="row" justifyContent="space-evenly">
                    <Stack direction="column" ml={-29}>
                      <Typography variant="subtitle" mb={2}>
                        <Typography variant="subtitle" color="purple">
                          {" "}
                          ●{" "}
                        </Typography>{" "}
                        100% Coverage except Pelvic exam covered at 50%
                      </Typography>
                      <Typography variant="subtitle" mb={2}>
                        <Typography variant="subtitle" color="purple">
                          {" "}
                          ●{" "}
                        </Typography>{" "}
                        2 sick visit/year
                      </Typography>
                      <Typography variant="subtitle" mb={2}>
                        <Typography variant="subtitle" color="purple">
                          {" "}
                          ●{" "}
                        </Typography>{" "}
                        1 Colonoscopy/5 years for men above 45 years old
                      </Typography>
                    </Stack>
                    <Stack direction="column">
                      <Typography variant="subtitle" mb={2}>
                        <Typography variant="subtitle" color="purple">
                          {" "}
                          ●{" "}
                        </Typography>{" "}
                        1 physical visit/year
                      </Typography>
                      <Typography variant="subtitle" mb={2}>
                        <Typography variant="subtitle" color="purple">
                          {" "}
                          ●{" "}
                        </Typography>{" "}
                        I PSA/year for men
                      </Typography>
                      <Typography variant="subtitle" mb={2}>
                        <Typography variant="subtitle" color="purple">
                          {" "}
                          ●{" "}
                        </Typography>{" "}
                        1 Endoscopy/3 years for men above 45 years old
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
              <Typography variant="subtitle">
                Holders of this plan receive a one time full Famyll subsidies
                for the following exams within defined period - PSA Mammogram.
                Colonoscopy, Endoscopy. Pap Smear, Pelvic CT exam. All exams are
                subsidized to our allowable maximum limit. Subsidies guaranteed
                with a coupon.
              </Typography>
              <Box mt={2}>
                <Typography variant="h6" fontWeight="bold">
                  Main services
                </Typography>
                <Typography variant="subtitle" mb={2}>
                  <Typography variant="subtitle" color="purple">
                    {" "}
                    ●{" "}
                  </Typography>{" "}
                  General Practitioner(Care Provider)
                </Typography>
              </Box>
            </Box>
          </Box>

          <Grid container justifyContent="space-between" mt={2}>
            <Grid item></Grid>
            <Grid item>
              {" "}
              <Button
                size="large"
                sx={{
                  border: "1px solid #7338ac",
                  borderRadius: "50px",
                  backgroundColor: "#7338ac",
                  color: "white",
                  ":hover": {
                    backgroundColor: "#b262fe",
                  },
                  width: "165px",
                }}
                //  onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default UpdatePlan;
