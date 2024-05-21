import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const ChangePassword = (setDisplayedComponent) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const InputProps = {
    style: {
      borderRadius: "50px",
    },
  };
  const new_password = watch("new_password", "");

  const handleForgotPassword = () => {
    window.location.href = "/";
  };

  const changePass = async (data) => {
    console.log(data);
    try {
      console.log(data);
      const jsonData = localStorage.getItem("userData1");
      if (jsonData) {
        const userDataObject = JSON.parse(jsonData);
        const config = {
          headers: {
            Authorization: `Bearer ${userDataObject.data.token}`, // Set token in request headers
          },
        };

        const response = await axios.post(
          "https://dev.api.famyll.com/member-ms/api/v1/auth/change-password",
          { old_password: data.old_password, new_password: data.new_password },
          config // Pass the config with headers to the axios post request
        );
        // Handle response based on API's behavior
        console.log(response.data); // Log the response for debugging
        alert("Password Successfully changed");
      }
    } catch (error) {
      console.error(error);
      // Handle error scenarios (e.g., display an error message to the user)
    }
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          changePass(data); // Call verifyOTP function with form data
        })}
        sx={{
          mt: 2,
          p: 2,
          pt: 4,
          pl: 3,
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Change Your Password
        </Typography>
        <Grid container maxWidth="100%" spacing={2}>
          <Grid item md={4}>
            <Typography
              marginTop={2}
              marginBottom={1}
              component="h1"
              variant="h6"
              color="text.secondary"
              fontSize={14}
            >
              Old Password
            </Typography>
            <TextField
              InputProps={InputProps}
              fullWidth
              type="password"
              id="old_password"
              {...register("old_password", {
                required: "This is required",
              })}
              autoFocus
              label="Enter  Your Old Password"
              sx={{
                "& legend": { display: "none" },
                "& .MuiInputLabel-shrink": {
                  opacity: 0,
                  transition: "all 0.2s ease-in",
                },
              }}
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
              {errors.old_password?.message}
            </Typography>
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
              New Password
            </Typography>
            <TextField
              InputProps={InputProps}
              fullWidth
              type="password"
              id="new_password"
              {...register("new_password", {
                required: "This is required",
                minLength: {
                  value: 6,
                  message: "Enter atleast 6 characters",
                },
              })}
              label="Enter  New Password"
              sx={{
                "& legend": { display: "none" },
                "& .MuiInputLabel-shrink": {
                  opacity: 0,
                  transition: "all 0.2s ease-in",
                },
              }}
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
              {errors.new_password?.message}
            </Typography>
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
              Confirm New Password
            </Typography>
            <TextField
              InputProps={InputProps}
              fullWidth
              {...register("confirm_password", {
                required: "Password is required",
                validate: (value) =>
                  value === new_password || "The passwords do not match",
              })}
              type="password"
              id="confirm_password"
              label="Confirm Your Password"
              sx={{
                "& legend": { display: "none" },
                "& .MuiInputLabel-shrink": {
                  opacity: 0,
                  transition: "all 0.2s ease-in",
                },
              }}
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
              {errors.confirm_password?.message}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          marginTop={3}
        >
          <Grid item>
            <Link
              color="#7338ac"
              fontWeight="bold"
              onClick={handleForgotPassword}
            >
              Forgot Password?{" "}
            </Link>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              sx={{
                borderRadius: "50px",
                backgroundColor: "#7338ac",
                color: "white",
                textTransform: "none",
                px: 2,
                mt: 2,
                py: 1,
                mr: 2,
                ":hover": {
                  backgroundColor: "#b262fe",
                },
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

export default ChangePassword;
