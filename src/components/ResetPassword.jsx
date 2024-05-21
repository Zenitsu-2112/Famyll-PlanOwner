import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useForm } from "react-hook-form";

export default function ResetPassword({ setComponent }) {
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
  const password = watch("password", "");

  const resetPass = async (data) => {
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
          "https://dev.api.famyll.com/member-ms/api/v1/auth/reset-password",
          { password: data.password },
          config // Pass the config with headers to the axios post request
        );
        // Handle response based on API's behavior
        console.log(response.data); // Log the response for debugging
        setComponent("SignIn");
      }
    } catch (error) {
      console.error(error);
      // Handle error scenarios (e.g., display an error message to the user)
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
        width="428px"
        height="470px"
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
          //alignItems: "center",
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
            onClick={() => setComponent("ForgotPass")}
            style={{
              marginTop: "20px",

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
          Reset Password
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="text.secondary"
          fontSize={16}
        >
          Kindly enter your new password.
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(async (data) => {
            console.log(data);
            resetPass(data); // Call verifyOTP function with form data
          })}
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
          ></Typography>
          <TextField
            InputProps={InputProps}
            required
            fullWidth
            autoFocus
            type="password"
            id="password"
            label="New Password"
            {...register("password", {
              required: "This is required",
              minLength: {
                value: 6,
                message: "Enter atleast 6 characters",
              },
            })}
          />{" "}
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
          </Typography>
          <Typography
            marginTop={2}
            marginBottom={1}
            mx={1}
            component="h1"
            variant="h6"
            color="text.secondary"
            fontSize={14}
          ></Typography>
          <TextField
            InputProps={InputProps}
            required
            fullWidth
            type="password"
            id="confirmpassword"
            label="Confirm Password"
            {...register("confirmpassword", {
              required: "This is required",
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
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
            {errors.confirmpassword?.message}
          </Typography>
          <Box
            sx={{
              mt: "5px",
              display: "flex",
              justifyContent: "right",
              width: "100%",
            }}
          ></Box>
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
    </Grid>
  );
}
