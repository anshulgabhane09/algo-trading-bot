import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Table from "./table"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [rows, setRows] = useState([
    {
      stock: "Apple",
      strategy: "Buy and Hold",
      parameters: "None",
      isRunning: false,
    },
    {
      stock: "Amazon",
      strategy: "Swing Trading",
      parameters: "MA Crossover",
      isRunning: false,
    },
    {
      stock: "Google",
      strategy: "Scalping",
      parameters: "Bollinger Bands",
      isRunning: false,
    },
  ]);

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  const toggleRunAutomation = (index) => {
    setRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index ? { ...row, isRunning: !row.isRunning } : row
      )
    );
  };

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        stock: "New Stock",
        strategy: "New Strategy",
        parameters: "New Parameters",
        isRunning: false,
      },
    ]);
  };
  

  const deleteRow = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };
  
  const [editingIndex, setEditingIndex] = useState(null);

  return (
    <div className="strat-body">
      <div className="dashboard-nav">
        <div className="dashboard-nav-logo-container">
          <a href="/">
            <h1 className="heading-home">Algo TradeX</h1>
          </a>
        </div>

        <div className="dashboard-navbar-links-container">
          <a href="/strategies">Strategies</a>
          <a href="/performance">Performance</a>
          <a href="/account">Account</a>
          <a href="/">
            <button className="logout-button">Logout</button>
          </a>
        </div>

        <div className="dashboard-navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>

        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>

      <div className="page-heading">
        <div className="strat-heading">Strategies</div>
      </div>

      <div className="table-container">
        <table className="strategies-table">
          <thead>
            <tr>
              <th>Stocks</th>
              <th>Strategy</th>
              <th>Parameters</th>
              <th>Run Automation</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
          
      {rows.map((row, index) => (
  <tr key={index}>
    <td>
      {editingIndex === index ? (
        <input
          value={row.stock}
          onChange={(event) =>
            setRows((prevRows) =>
              prevRows.map((r, i) =>
                i === index ? { ...r, stock: event.target.value } : r
              )
            )
          }
        />
      ) : (
        row.stock
      )}
    </td>
    <td>
      {editingIndex === index ? (
        <input
          value={row.strategy}
          onChange={(event) =>
            setRows((prevRows) =>
              prevRows.map((r, i) =>
                i === index ? { ...r, strategy: event.target.value } : r
              )
            )
          }
        />
      ) : (
        row.strategy
      )}
    </td>
    <td>
      {editingIndex === index ? (
        <input
          value={row.parameters}
          onChange={(event) =>
            setRows((prevRows) =>
              prevRows.map((r, i) =>
                i === index ? { ...r, parameters: event.target.value } : r
              )
            )
          }
        />
      ) : (
        row.parameters
      )}
    </td>
    <td>
      <button
        className="table-button"
        onClick={() => toggleRunAutomation(index)}
      >
        {row.isRunning ? "On" : "Off"}
      </button>
    </td>
    <td>
      <button className="table-button" onClick={() => deleteRow(index)}>
        Delete
      </button>
    </td>
    <td>
      {editingIndex === index ? (
        <>
          <button
            className="table-button"
            onClick={() => setEditingIndex(null)}
          >
            Cancel
          </button>
          <button
            className="table-button"
            onClick={() => setEditingIndex(null)}
          >
            Save
          </button>
        </>
      ) : (
        <button
          className="table-button"
          onClick={() => setEditingIndex(index)}
        >
          Edit
        </button>
      )}
    </td>
  </tr>
))}



            <tr>
              <td colSpan="5">
                <button className="table-button" onClick={addRow}>
                  Add Strategy
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="blank">
        <span> | </span>
      </div>
    </div>
  );
};

export default Navbar;
