import React from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import moment from "moment";
import {
  CurveButton,
  SearchField,
} from "../../components/styles/StyledComponent";

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchField placeholder="Seach..." />
        <CurveButton>Seach</CurveButton>
        <Box flexGrow={1} />

        <Typography
          display={{ xs: "none", lg: "block" }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  return (
    <AdminLayout>
      <Container component={"main"}>{Appbar}</Container>
    </AdminLayout>
  );
};

export default Dashboard;
