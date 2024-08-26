import React from "react";

import NavbarDashBoard from "../components/navbars/Navbar";
import {
  Box,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ListInfoCard from "../components/cards/list_info_cards";
import UniqueVisitor from "../components/charts/unique_visitor";
import { red } from "@mui/material/colors";
export default function Dashboard() {
  const theme = createTheme({
    palette: {
      warning: {
        main: red[700],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* Navbar */}
        <NavbarDashBoard />

        {/* Header Part */}
        <Container disableGutters maxWidth={false} sx={{ px: "50px" }}>
          <Typography variant='h6' sx={{ my: 2.5 }}>
            Dashboard
          </Typography>
          <ListInfoCard />

          {/* Unique Visitor &  Income Overview  */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              {/* Unique Visitor */}
              <UniqueVisitor />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Income Overview */}
            </Grid>
          </Grid>
          {/* Recent Order */}
          {/* Analytics Report*/}
          {/* Sales Report*/}
          {/* Transacion History*/}
        </Container>

        <Box></Box>
      </Box>
    </ThemeProvider>
  );
}
