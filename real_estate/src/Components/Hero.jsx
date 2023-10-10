import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
// import Navbar from "./Navbar";
import heroImg from "../media/hero_illustration.png";

function Hero() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAling: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "64px",
    color: "#000336",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "48px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "1", width: "100%" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#687690",
                mt: 10,
                mb: 5,
              }}
            >
              Get your business online trestestdlrfkhjdf;lhj
            </Typography>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Hero;
