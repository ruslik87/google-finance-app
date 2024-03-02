import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import { FC, useState } from "react";

import { useStyles } from "./Dashboard.styles";
import { DashboardProps } from "./Dashboard.types";
import { PersonalTickersList } from "../PersonalTickersList";
import { SearchInput } from "../SearchInput";

export const Dashboard: FC<DashboardProps> = (props) => {
  const { className, isHasTickers } = props;
  const { classes } = useStyles();
  const [applyQuery, setApplyQuery] = useState("");

  return (
    <Box
      data-testid="dashboard-component"
      className={clsx(classes.root, className)}
    >
      <Typography component="h1" className={classes.title} align="center">
        Dashboard
      </Typography>
      {isHasTickers ? (
        <>
          <SearchInput setApplyQuery={setApplyQuery} />
          <PersonalTickersList applyQuery={applyQuery} />
        </>
      ) : (
        <Typography align="center">
          Select a ticker to add it to the dashboard...
        </Typography>
      )}
    </Box>
  );
};
