import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Photo } from "../Assets";
import SignIn from "./Signin";
import Signup from "./Signup"; // Import Signup component
import ForgotPass from "./ForgotPass";
import ResetPassword from "./ResetPassword";
import Email from "./Email";

const defaultTheme = createTheme();

export default function AuthContainer({ component = "SignIn" }) {
  const [currentComponent, setCurrentComponent] = React.useState(component);

  const renderComponent = () => {
    switch (currentComponent) {
      case "SignIn":
        return <SignIn setComponent={setCurrentComponent} />;
      case "SignUp":
        return <Signup setComponent={setCurrentComponent} />;
      case "email":
        return <Email setComponent={setCurrentComponent} />;
      case "ForgotPass":
        return <ForgotPass setComponent={setCurrentComponent} />;
      case "ResetPassword":
        return <ResetPassword setComponent={setCurrentComponent} />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" bgcolor="white" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          mx={1}
          mb={1}
          mt={1}
          sm={0}
          md={5}
          sx={{
            backgroundImage: `url(${Photo})`,
            borderRadius: "20px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {renderComponent()} {/* Render the component */}
      </Grid>
    </ThemeProvider>
  );
}
