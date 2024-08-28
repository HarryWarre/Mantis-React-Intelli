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
import IncomeOverview from "../components/charts/income_overview";
import AnalyticsReport from "../components/charts/analytics_report";
import SalesReport from "../components/charts/sales_report";
import TransacionHistory from "../components/lists/list_transaction_history";
import RecentOrderTable from "../components/tables/orders";

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

        {/* Container */}
        <Container disableGutters maxWidth={false} sx={{ px: "50px" }}>
          <Typography variant='h6' sx={{ my: 2.5 }}>
            Dashboard
          </Typography>
          <ListInfoCard />

          {/* Unique Visitor &  Income Overview  */}
          <Grid container spacing={3} alignItems={"stretch"}>
            <Grid item xs={12} md={8}>
              {/* Unique Visitor */}
              <UniqueVisitor />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Income Overview */}
              <IncomeOverview />
            </Grid>
          </Grid>
          {/* Recent Order & Analytics Report*/}
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {/* Recent table Order*/}
              <RecentOrderTable />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Analytics Report */}

              <AnalyticsReport />
            </Grid>
          </Grid>
          {/* Sales Report & Transacion History*/}
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {/* Sales Report */}
              <SalesReport />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* Transacion History */}
              <TransacionHistory />
            </Grid>
          </Grid>
        </Container>

        <Box></Box>
      </Box>
    </ThemeProvider>
  );
}
