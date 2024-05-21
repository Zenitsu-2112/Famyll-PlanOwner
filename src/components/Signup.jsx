import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

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

export default function Signup({ setComponent }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({});

  const InputProps = {
    style: {
      borderRadius: "50px",
    },
  };

  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedState, setSelectedState] = React.useState("");
  // const [selectedCity, setSelectedCity] = React.useState("");
  const [isBusinessAccount, setIsBusinessAccount] = React.useState(false);
  const [permission, setPermission] = React.useState(false);
  // const password = watch("password", "");

  const handleSignInClick = () => {
    setComponent("SignIn");
  };

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={6}
      component={Paper}
      elevation={6}
      square
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      boxShadow="none"
    >
      <Box
        width="450px"
        height="920px"
        padding={4}
        pt={2}
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        sx={{
          marginTop: "64px",
          marginBottom: "1px",
          marginLeft: "90px",
          marginRight: "56px",
          display: "flex",
          flexDirection: "column",
          //alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h4" my={2} fontWeight="bold">
          Create Account
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="text.secondary"
          fontSize={16}
        >
          Enter necessary details to create your account.
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission behavior
            handleSubmit((data) => {
              console.log(data);
            })(e); // Pass the event object to handleSubmit
          }}
          sx={{ mt: 1 }}
        >
          <Stack direction="row">
            <>
              <TextField
                InputProps={InputProps}
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                {...register("first_name", {
                  required: "This is required",
                })}
                autoFocus
              />
              <Typography
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
                sx={{
                  ml: "10px",
                  color: "red",
                }}
              >
                {errors.first_name?.message}
              </Typography>
            </>
            <>
              <TextField
                InputProps={InputProps}
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                {...register("last_name", {
                  required: "This is required",
                })}
                autoFocus
              />
              <Typography
                component="h1"
                variant="h6"
                color="text.secondary"
                fontSize={14}
                sx={{
                  ml: "10px",
                  color: "red",
                }}
              >
                {errors.last_name?.message}
              </Typography>
            </>
          </Stack>
          <FormControlLabel
            control={<Checkbox />}
            label="This is a business account"
            checked={isBusinessAccount}
            onChange={(e) => setIsBusinessAccount(e.target.checked)}
          />
          <TextField
            InputProps={InputProps}
            margin="normal"
            required
            fullWidth
            id="business_name"
            label="Name of Business"
            {...register("business_name", {
              required: "This is required",
            })}
            autoFocus
          />
          <Typography
            component="h1"
            variant="h6"
            color="text.secondary"
            fontSize={14}
            sx={{
              ml: "10px",
              color: "red",
            }}
          >
            {errors.business_name?.message}
          </Typography>
          <TextField
            InputProps={InputProps}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            {...register("email", {
              required: "This field is required",
            })}
            autoFocus
          />
          <Typography
            component="h1"
            variant="h6"
            color="text.secondary"
            fontSize={14}
            sx={{
              ml: "10px",
              color: "red",
            }}
          >
            {errors.email?.message}
          </Typography>
          <TextField
            InputProps={InputProps}
            margin="normal"
            required
            fullWidth
            {...register("password", {
              required: "Password is required",
              // maxLength: {
              //   value: 10,
              //   message: "Min length is 10",
              // },
              minLength: {
                value: 6,
                message: "minimum leght is 6",
              },
            })}
            label="Create Password"
            type="password"
            id="password"
          />
          <Typography
            component="h1"
            variant="h6"
            color="text.secondary"
            fontSize={14}
            sx={{
              ml: "10px",
              color: "red",
            }}
          >
            {" "}
            {errors.password?.message}
          </Typography>{" "}
          <TextField
            InputProps={InputProps}
            margin="normal"
            required
            fullWidth
            id="city"
            label="City Name"
            {...register("city", {
              required: "This field is required",
            })}
            autoFocus
          />
          <Typography
            component="h1"
            variant="h6"
            color="text.secondary"
            fontSize={14}
            sx={{
              ml: "10px",
              color: "red",
            }}
          >
            {errors.city?.message}
          </Typography>
          <Stack direction="row">
            <>
              <TextField
                select
                InputProps={InputProps}
                margin="normal"
                required
                fullWidth
                id="country"
                label="Country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="" disabled></option>
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </TextField>
            </>
            <>
              {" "}
              <TextField
                select
                InputProps={InputProps}
                margin="normal"
                required
                fullWidth
                id="state"
                label="State"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                disabled={!selectedCountry}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="" disabled></option>
                {selectedCountry &&
                  countries
                    .find((country) => country.name === selectedCountry)
                    ?.states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
              </TextField>
            </>
          </Stack>
          <FormControlLabel
            control={<Checkbox />}
            sx={{
              fontSize: "16px",
            }}
            label="I certify that I have the legal authority to create
this account and engage on this site as Plan
Administrator on behalf of the above stated
business. I understand that creating this
account. my first name and last name represent
my electronic signature-"
            checked={permission}
            onChange={(e) => setPermission(e.target.checked)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              ...InputProps.style,
              mt: 3,
              mb: 2,
              height: "50px",
              backgroundColor: "#7338ac",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid item>
          <Link variant="body2" onClick={handleSignInClick}>
            {"Already have an account? Log In"}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
