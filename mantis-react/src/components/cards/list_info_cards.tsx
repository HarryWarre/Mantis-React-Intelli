import { Grid } from "@mui/material";
import React from "react";
import InfoCard from "./info_card";

export default function ListInfoCard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        {/* We will create the functional widget of this card here */}
        <InfoCard
          title={"Total Page Views"}
          value={"4,42,236"}
          percent={"59.3"}
          extra={"35,000"}
          TrendState={0}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <InfoCard
          title={"Total Users"}
          value={"78,250"}
          percent={"70.5"}
          extra={"8,900"}
          TrendState={0}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <InfoCard
          title={"Total Orders"}
          value={"18,800"}
          percent={"27.4"}
          extra={"1,943"}
          TrendState={1}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <InfoCard
          title={"Total Sales"}
          value={"$35,078"}
          percent={"27.4"}
          extra={"$20,395"}
          TrendState={1}
        />
      </Grid>
    </Grid>
  );
}
