import React from "react";
import { Grid } from "semantic-ui-react";

const SidebarMenuItem = ({ IconImg, name }) => {
  return (
    // Only 1 column in this grid which is again divided into Rows then again divided into columns
    <Grid columns={1}>
      <Grid.Row style={{ padding: "0.7rem" }}>
        <Grid.Column width={4}>
          <span style={{ verticalAlign: "middle" }}>
            <IconImg style={{ height: "20px !important", width: "20px" }} />
          </span>
        </Grid.Column>
        <Grid.Column width={12} className="sidebar-menu-name">
          <span style={{ color: "#ffffff!important" }}>{name}</span>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SidebarMenuItem;
