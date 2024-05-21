import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { member1, member2, member3, member5, profile } from "../Assets";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

const formatDate = (date) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const rows = [
  {
    img: ` ${member1}`,
    name: "Alena Smith",
    registration_number: "#FML1000M",
    earnings: "$500",
    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Covered",
  },
  {
    img: ` ${member2}`,
    name: "Peter Smith",
    registration_number: "#FML1005M",
    earnings: "$600",

    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Waiting",
  },
  {
    img: ` ${member3}`,
    name: "William Bibers",
    registration_number: "#FML1001M",
    earnings: "$200",

    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Covered",
  },
  {
    img: ` ${profile}`,
    name: "Steve Stockhim",
    registration_number: "#FML1002M",
    earnings: "$700",

    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Suspended",
  },
  {
    img: ` ${member5}`,
    name: "Kevin Rhodes",
    registration_number: "#FML1003M",
    earnings: "$800",

    date: "12/06/2016",
    time: "10:00 AM",
    amount: "$500",
    type: "Claim Type",
    status: "Covered",
  },

  // More rows...
];

const getStatusColor = (status) => {
  switch (status) {
    case "Covered":
      return "#4caf50";
    case "Waiting":
      return "#ffeb3b";
    case "Suspended":
      return "#f44336";
    default:
      return "#000"; // Default color
  }
};

const MyEarnings = ({ toggleComponent, setDisplayedComponent, userData }) => {
  const theme = useTheme();

  const currentDate = new Date();

  return (
    <Container maxWidth="100%">
      <>
        <Box
          sx={{
            p: 4,
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Box
            borderRadius={3}
            paddingLeft={5}
            paddingRight={5}
            backgroundColor="#f1ebf7"
            sx={{ mb: 2, paddingBottom: 1.5 }}
          >
            <Grid container spacing={2} paddingRight={5}>
              <Grid item xs={6} md={3}>
                <Typography variant="h6"> Member Name</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h6">Registration Number</Typography>
              </Grid>
              <Grid item xs={6} md={3} textAlign="center">
                <Typography variant="h6">Coverage Plan Status</Typography>
              </Grid>

              <Grid item xs={6} md={3} textAlign="right" ml={-4}>
                <Typography variant="h6"> Action</Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={2} fontWeight="500">
            {rows.map((row, index) => (
              <React.Fragment key={index}>
                <Grid item xs={6} md={3} ml={2.5}>
                  <Stack direction="row">
                    <Avatar
                      alt="Remy Sharp"
                      src={row.img}
                      sx={{ width: "66px", height: "66px" }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "24px",
                        mt: 2,
                        ml: 2,
                      }}
                    >
                      {row.name}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontWeight: 500,
                      fontSize: "18px",
                      lineHeight: "24px",
                      mt: 2,
                      ml: 2,
                    }}
                  >
                    {" "}
                    {row.registration_number}
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  md={3}
                  style={{ color: getStatusColor(row.status) }}
                  ml={-5}
                >
                  <Stack direction="row">
                    <CircleIcon
                      sx={{
                        fontSize: "12px",
                        mr: 1,
                        mt: 3,
                        ml: 8,
                      }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: 500,
                        fontSize: "18px",
                        lineHeight: "24px",
                        mt: 2,
                        ml: 2,
                      }}
                    >
                      {row.status}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6} md={2} textAlign="right" ml={5}>
                  {row.earnings}
                </Grid>

                <Grid item xs={12}>
                  <Divider />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </>
    </Container>
  );
};

export default MyEarnings;
