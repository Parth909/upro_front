import React, { useState } from "react";
import { Menu, Input } from "semantic-ui-react";
import "../../components/css/dlayout.scss";
import Hamburger from "../icons/Hamburger";
import NavProfPic from "./utils/NavProfPic";
import Icon from "../../img/icon.jpg";

const Navbar = ({ setSidebarVisible }) => {
  const [active, setActive] = useState({ activeItem: "" });

  const { activeItem } = active;

  const handleItemClick = (e, name) => {
    setActive({ activeItem: name });
    if (name === "sidebar") {
      // This is the hacky thing to change state according to previous state
      setSidebarVisible((prevMode) => !prevMode);
    }
  };

  return (
    <div className="sticky-navbar">
      <Menu secondary className="Navbar" id="Navbar">
        <Menu.Item
          onClick={(e) => handleItemClick(e, "sidebar")}
          style={{ overflow: "auto", verticalAlign: "middle" }}
          className="menu-items no-back-change"
        >
          <Hamburger
            style={{ width: "24px", color: "white", padding: "3px" }}
            alt="menu"
          />
        </Menu.Item>
        <Menu.Item className="menu-items no-back-change">
          <NavProfPic img={Icon} />
        </Menu.Item>
        <Menu.Item
          name="notifications"
          active={activeItem === "messages"}
          onClick={(e) => handleItemClick(e, "messages")}
          className="menu-items "
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={(e) => handleItemClick(e, "friends")}
          className="menu-items"
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={(e) => handleItemClick(e, "logout")}
            className="menu-items"
          />
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
