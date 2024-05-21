import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";

export default function SignIn({ setComponent }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mem_number: "",
      password: "",
    },
  });

  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        window.location.href = "/home"; // Redirect to home page using React Router
      }, 1000); // Redirect after 1 second
    }
  }, [redirect]);

  const InputProps = {
    style: {
      borderRadius: "50px",
    },
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log(data);
      const response = await axios.post(
        "https://dev.api.famyll.com/member-ms/api/v1/auth/sign-in",
        {
          registration_number: data.email,
          password: data.password,
        }
      );
      const jsonData = JSON.stringify(response.data);
      console.log(jsonData);

      localStorage.setItem("userData", jsonData);
      localStorage.setItem("token", response.data.token);
      setRedirect(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const handleSignUpClick = () => {
    setComponent("SignUp");
  };

  const handleForgotPassClick = () => {
    setComponent("email");
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
        width="428px"
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
        <Typography component="h1" variant="h4" my={2} fontWeight="bold">
          Sign In
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="text.secondary"
          fontSize={16}
        >
          Enter your details to continue.
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <TextField
            InputProps={InputProps}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Register number"
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
              minLength: {
                value: 6,
                message: "Minimum length is 6",
              },
            })}
            label="Password"
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
            {errors.password?.message}
          </Typography>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item></Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={handleForgotPassClick}>
                Forgot Password
              </Link>
            </Grid>
          </Grid>
          {loading ? (
            <Box
              backgroundColor="#7338ac"
              sx={{ ...InputProps.style, height: "50px", mt: 3, mb: 2 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <CircularProgress size={24} sx={{ color: "white" }} />
            </Box> // Show CircularProgress when loading
          ) : (
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
              Sign In
            </Button>
          )}
        </Box>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid item>
          <Link href="#" variant="body2" onClick={handleSignUpClick}>
            Don't have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
