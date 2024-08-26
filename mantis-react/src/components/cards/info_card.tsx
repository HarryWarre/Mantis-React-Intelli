import React from "react";
import ICard from "./ICard";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { TrendingDown, TrendingUp } from "@mui/icons-material";
import { blue, red } from "@mui/material/colors";

export default function InfoCard(props: ICard) {
  const CheckTrend = () =>
    props.TrendState === 0 ? <TrendingUp /> : <TrendingDown />;
  const TrendColor = props.TrendState === 0 ? "primary" : "warning";
  const TypographyColor = props.TrendState === 0 ? "primary" : red["700"];

  const lightColor = props.TrendState === 0 ? blue[50] : red[50];
  return (
    <Box component={"div"}>
      <Card color='white' sx={{}}>
        <CardContent>
          <Typography color={"gray"} variant='subtitle1'>
            {props.title}
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item md={6}>
              <Typography variant='h5'>
                <b>{props.value}</b>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Chip
                size='medium'
                variant='outlined'
                sx={{ borderRadius: 1, backgroundColor: lightColor }}
                color={TrendColor}
                icon={CheckTrend()}
                label={props.percent + " %"}></Chip>
            </Grid>
          </Grid>
          <Typography color='gray' variant='caption'>
            You made an extra
            <Typography
              component={"span"}
              variant='caption'
              color={TypographyColor}>
              {" "}
              {props.extra}{" "}
            </Typography>
            this year
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
