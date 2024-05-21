import * as React from "react";

import axios from "axios"; // Import Axios
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

export default function Email({ setComponent }) {
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

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://dev.api.famyll.com/member-ms/api/v1/auth/forgot-password",
        { email: data.email }
      );

      console.log(response.data);
      // Assuming the API response includes a token field

      const jsonData = JSON.stringify(response.data);
      console.log(jsonData);
      const email1 = JSON.stringify(data.email);
      localStorage.setItem("email", email1);

      localStorage.setItem("userData1", jsonData);
      localStorage.setItem("token", response.data.token);
      setComponent("ForgotPass");
    } catch (error) {
      console.error("Error sending request:", error);
    }
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
        height="450px"
        padding={4}
        pt={2}
        boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        sx={{
          marginTop: "64px",
          marginBottom: "15px",
          marginLeft: "90px",
          marginRight: "56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="text.secondary"
          fontSize={16}
        >
          <Link
            onClick={() => setComponent("SignIn")}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ChevronLeftIcon sx={{ marginRight: 1 }} />
            Back
          </Link>
        </Typography>
        <Typography component="h1" variant="h4" my={2} fontWeight="bold">
          Forgot Password?
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="text.secondary"
          fontSize={16}
        >
          Please enter your email address to get the OTP for the verification.
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <Typography
            marginTop={2}
            marginBottom={1}
            mx={1}
            component="h1"
            variant="h6"
            color="text.secondary"
            fontSize={14}
          >
            Email Address
          </Typography>
          <TextField
            InputProps={InputProps}
            required
            fullWidth
            id="email"
            label="Enter Email Here"
            {...register("email", {
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
            {errors.email?.message}
          </Typography>
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
            Submit
          </Button>
        </Box>
      </Box>
      <Grid container display="flex" justifyContent="center"></Grid>
    </Grid>
  );
}
