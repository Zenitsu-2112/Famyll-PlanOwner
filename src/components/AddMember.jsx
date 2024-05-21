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

const AddMember = () => {
  const [gender, setGender] = React.useState("");
  const [smoker, setSmoker] = React.useState("");
  const [conditions, setConditions] = useState({
    HIV_AIDS: false,
    Cancer: false,
    Diabetes: false,
    HighBloodPressure: false,
    None: false,
  });
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

  const handleCheckboxChange = (condition) => (event) => {
    setConditions({ ...conditions, [condition]: event.target.checked });
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleSmokerChange = (event) => {
    setSmoker(event.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleRelationshipChange = (event) => {
    setRelationship(event.target.value);
  };

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const payload = {
      personalDetails: {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        relationship: relationship,
        gender: gender,
        smoker: smoker,
        age: age,
        frequency: frequency,
      },
      medicalConditions: {
        HIV_AIDS: conditions.HIV_AIDS,
        Cancer: conditions.Cancer,
        Diabetes: conditions.Diabetes,
        HighBloodPressure: conditions.HighBloodPressure,
        None: conditions.None,
      },
      contactDetails: {
        email: email,
        phone: phone,
        city: city,
        state: state,
        country: country,
      },
      insuranceDetails: {
        plan: plan,
        displayOwnerName: displayOwnerName,
      },
    };

    console.log(payload); // Log the payload to the console (you can replace this with sending the payload to your backend or API)
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
          <Typography
            variant="subtitle1"
            sx={{
              mb: 2,
            }}
          >
            Kindly enter necessary details to create your account.
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Personal Information
          </Typography>

          <Box>
            <Grid container>
              <Grid item md={2} mb={5}>
                <Grid container mr={2}>
                  <Grid item>
                    <Typography
                      marginTop={2}
                      marginBottom={1}
                      mx={1}
                      component="h1"
                      variant="h6"
                      color="text.secondary"
                      fontSize={14}
                    >
                      Upload Profile Image
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        border: "1px dashed black",
                        width: "148px",
                        height: "172px",
                        borderRadius: "10px",
                      }}
                    >
                      <Grid>
                        <Grid
                          item
                          container
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          textAlign="center"
                        >
                          {" "}
                          <Button
                            component="label"
                            role={undefined}
                            variant="text"
                            tabIndex={-1}
                            startIcon={
                              <AddCircleIcon
                                sx={{ width: "32px", height: "32px" }}
                              />
                            }
                          >
                            <VisuallyHiddenInput type="file" />
                          </Button>
                          <Typography
                            marginTop={2}
                            marginBottom={1}
                            mx={1}
                            component="h1"
                            variant="h6"
                            color="text.secondary"
                            fontSize={14}
                          >
                            Upload Profile Image Here
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={10}>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Typography
                      marginTop={2}
                      marginBottom={1}
                      mx={1}
                      component="h1"
                      variant="h6"
                      color="text.secondary"
                      fontSize={14}
                    >
                      First Name
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      sx={{
                        borderRadius: "50px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                        },
                      }}
                      id="first_name"
                      placeholder="Enter First Name"
                      onChange={handleFirstNameChange}
                    />
                  </Grid>
                  <Grid item md={4}>
                    {" "}
                    <Typography
                      marginTop={2}
                      marginBottom={1}
                      mx={1}
                      component="h1"
                      variant="h6"
                      color="text.secondary"
                      fontSize={14}
                    >
                      Middle Name
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      sx={{
                        borderRadius: "50px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                        },
                      }}
                      id="middle_name"
                      placeholder="Enter Middle Name"
                      onChange={handleMiddleNameChange}
                    />
                  </Grid>
                  <Grid item md={4}>
                    {" "}
                    <Typography
                      marginTop={2}
                      marginBottom={1}
                      mx={1}
                      component="h1"
                      variant="h6"
                      color="text.secondary"
                      fontSize={14}
                    >
                      Last Name
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      sx={{
                        borderRadius: "50px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                        },
                      }}
                      id="last_name"
                      placeholder="Enter Last Name"
                      onChange={handleLastNameChange}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} mb={1}>
                  <Grid item md={6}>
                    {" "}
                    <Typography
                      marginTop={2}
                      marginBottom={1}
                      mx={1}
                      component="h1"
                      variant="h6"
                      color="text.secondary"
                      fontSize={14}
                    >
                      Date of Birth
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        inputFormat="dd/MM/yyyy"
                        renderInput={(params) => <TextField {...params} />}
                        fullWidth
                        sx={{
                          borderRadius: "50px",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item md={6}>
                    {" "}
                    <Typography
                      marginTop={2}
                      marginBottom={1}
                      mx={1}
                      component="h1"
                      variant="h6"
                      color="text.secondary"
                      fontSize={14}
                    >
                      Relationship
                    </Typography>
                    <TextField
                      fullWidth
                      variant="outlined"
                      sx={{
                        borderRadius: "50px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                        },
                      }}
                      id="relation"
                      placeholder="  Enter Relationship with Member"
                      onChange={handleRelationshipChange}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    {" "}
                    <Typography
                      marginTop={2}
                      marginBottom={1}
                      mx={1}
                      component="h1"
                      variant="h6"
                      color="text.secondary"
                      fontSize={14}
                    >
                      Gender
                    </Typography>
                    <RadioGroup
                      row
                      value={gender}
                      onChange={handleGenderChange}
                      className="custom-radio"
                      sx={{
                        ".Mui-checked .MuiIconButton-root": {
                          bgcolor: "#F1EBF7",
                        },
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid item md={4}>
                          {" "}
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                          />
                        </Grid>
                        <Grid item md={4}>
                          {" "}
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                          />
                        </Grid>
                        <Grid item md={4}>
                          {" "}
                          <FormControlLabel
                            value="others"
                            control={<Radio />}
                            label="Others"
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Grid>
                  <Grid item md={6}>
                    <Typography
                      marginTop={2}
                      marginBottom={1}
                      mx={1}
                      component="h1"
                      variant="h6"
                      color="text.secondary"
                      fontSize={14}
                    >
                      Smoker
                    </Typography>
                    <RadioGroup
                      row
                      value={smoker}
                      onChange={handleSmokerChange}
                      className="custom-radio"
                      sx={{
                        ".Mui-checked .MuiIconButton-root": {
                          bgcolor: "#F1EBF7",
                        },
                      }}
                    >
                      <Grid container spacing={1}>
                        <Grid item md={4}>
                          {" "}
                          <FormControlLabel
                            value="yes"
                            control={<Radio />}
                            label="Yes"
                          />
                        </Grid>
                        <Grid item md={4}>
                          {" "}
                          <FormControlLabel
                            value="no"
                            control={<Radio />}
                            label="No"
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Typography variant="subtitle1">
                      *If the right option is not selected and person is
                      diagnosed with lung cancer as a result of tobacco, their
                      illness shall not be covered.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Contact Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Typography
                  marginTop={2}
                  marginBottom={1}
                  mx={1}
                  component="h1"
                  variant="h6"
                  color="text.secondary"
                  fontSize={14}
                >
                  Email address
                </Typography>
                <TextField
                  type="email"
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                    },
                  }}
                  id="email"
                  placeholder="Enter Email Address"
                  onChange={handleEmailChange}
                />
              </Grid>
              <Grid item md={6}>
                <Typography
                  marginTop={2}
                  marginBottom={1}
                  mx={1}
                  component="h1"
                  variant="h6"
                  color="text.secondary"
                  fontSize={14}
                >
                  Phone Number
                </Typography>
                <TextField
                  type="phone"
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                    },
                  }}
                  id="phone"
                  placeholder="Enter Phone Number"
                  onChange={handlePhoneChange}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item md={4}>
                <Typography
                  marginTop={2}
                  marginBottom={1}
                  mx={1}
                  component="h1"
                  variant="h6"
                  color="text.secondary"
                  fontSize={14}
                >
                  City Name
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                    },
                  }}
                  id="city"
                  placeholder="Enter City Name"
                  onChange={handleCityChange}
                />
              </Grid>
              <Grid item md={4}>
                <Typography
                  marginTop={2}
                  marginBottom={1}
                  mx={1}
                  component="h1"
                  variant="h6"
                  color="text.secondary"
                  fontSize={14}
                >
                  State Name
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                    },
                  }}
                  id="state"
                  placeholder="Enter State Name"
                  onChange={handleStateChange}
                />
              </Grid>
              <Grid item md={4}>
                <Typography
                  marginTop={2}
                  marginBottom={1}
                  mx={1}
                  component="h1"
                  variant="h6"
                  color="text.secondary"
                  fontSize={14}
                >
                  Country Name
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderRadius: "50px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                    },
                  }}
                  id="country"
                  placeholder="Enter Country Name"
                  onChange={handleCountryChange}
                />
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Pre-existing Condition
            </Typography>

            <Grid container>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={conditions.HIV_AIDS}
                      onChange={handleCheckboxChange("HIV_AIDS")}
                      name="HIV_AIDS"
                    />
                  }
                  label="HIV/AIDS"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={conditions.Cancer}
                      onChange={handleCheckboxChange("Cancer")}
                      name="Cancer"
                    />
                  }
                  label="Cancer"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={conditions.Diabetes}
                      onChange={handleCheckboxChange("Diabetes")}
                      name="Diabetes"
                    />
                  }
                  label="Diabetes"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={conditions.HighBloodPressure}
                      onChange={handleCheckboxChange("HighBloodPressure")}
                      name="HighBloodPressure"
                    />
                  }
                  label="High Blood Pressure"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={conditions.None}
                      onChange={handleCheckboxChange("None")}
                      name="None"
                    />
                  }
                  label="None"
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={2} mb={2}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Interested Coverage Plan
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
            </Box>
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={displayOwnerName}
                onChange={handleDisplayOwnerNameChange}
                color="primary"
              />
            }
            label="Display plan owner's name on this membership card"
          />

          <Grid container justifyContent="space-between" mt={2}>
            <Grid item>
              <Button
                size="large"
                sx={{
                  border: "1px solid #7338ac",
                  borderRadius: "50px",
                  backgroundColor: "white",
                  color: "#7338ac",
                }}
              >
                Add More Member
              </Button>
            </Grid>
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
                onClick={handleSubmit}
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

export default AddMember;
