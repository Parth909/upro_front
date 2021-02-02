import React from "react";
import { Grid, Header, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import SidebarMenuItem from "./utils/SidebarMenuItem";

// For css written in one file after that will be split into files
import "../css/dlayout.scss";

// Icons ---
import HomeSvg from "../icons/HomeSvg";
import ColorMode from "../icons/ColorMode";
import VideoSide from "../icons/VideoSide";
import PlaylistIcon from "../icons/PlaylistIcon";
import SavedPosts from "../icons/SavedPosts";
import Uploads from "../icons/Uploads";
import Following from "../icons/Following";
import Settings from "../icons/Settings";

// Use this Dim Sidebar so that when user clicks anywhere outside sidebar it will collapse
const PushableDimSidebar = ({ sidebarVisible, setSidebarVisible }) => {
  return (
    <Grid columns={1}>
      {/* <Grid.Column>
        <Checkbox
          checked={sidebarVisible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setSidebarVisible(data.checked)}
        />
      </Grid.Column> */}

      <Grid.Column>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setSidebarVisible(false)}
          vertical
          visible={sidebarVisible}
          width="thin"
          id="pushable-dim-sidebar"
        >
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={HomeSvg} name="Home" />
          </Menu.Item>
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={Settings} name="Settings" />
          </Menu.Item>
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={Following} name="Following" />
          </Menu.Item>
          {/* <hr className="custom-sidebar-seperator" /> */}
          <Menu.Item as="a" className="sidebar-menu-item collections">
            Collection -
          </Menu.Item>
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={VideoSide} name="Videos" />
          </Menu.Item>
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={PlaylistIcon} name="Playlists" />
          </Menu.Item>
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={SavedPosts} name="Saved Posts" />
          </Menu.Item>
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={Uploads} name="Uploads" />
          </Menu.Item>
          {/* <hr /> */}
          <Menu.Item as="a" className="sidebar-menu-item collections">
            Channels -
          </Menu.Item>
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={VideoSide} name="Videos" />
          </Menu.Item>
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={PlaylistIcon} name="Playlists" />
          </Menu.Item>
          <Menu.Item as="a" className="sidebar-menu-item">
            <SidebarMenuItem IconImg={SavedPosts} name="Saved Posts" />
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          {/* Content of the body */}
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Grid.Column>
    </Grid>
  );
};

export default PushableDimSidebar;
