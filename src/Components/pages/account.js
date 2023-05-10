// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//     },
//     {
//       text: "Testimonials",
//       icon: <CommentRoundedIcon />,
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//     },
//     {
//       text: "Cart",
//       icon: <ShoppingCartRoundedIcon />,
//     },
//   ];

//   function AccountPage() {
//     const [email, setEmail] = useState('example@email.com');
//     const [password, setPassword] = useState('');
//     const [newEmail, setNewEmail] = useState('');
  
//     const handleEmailChange = (event) => {
//       setNewEmail(event.target.value);
//     }
  
//     const handlePasswordChange = (event) => {
//       setPassword(event.target.value);
//     }
  
//     const handleUpdateEmail = (event) => {
//       event.preventDefault();
//       setEmail(newEmail);
//       setNewEmail('');
//     }
  
//     const handleEditPassword = (event) => {
//       event.preventDefault();
//       // TODO: Implement password editing functionality
//     }
//   }
  
//   return (
//     <div>
//       <div className="dashboard-nav">
//         <div className="dashboard-nav-logo-container">
//           <a href="/">
//             <h1 className="heading-home">Algo TradeX</h1>
//           </a>
//         </div>

//         <div className="dashboard-navbar-links-container">
//           <a href="/strategies">Strategies</a>
//           <a href="/performance">Performance</a>
//           <a href="/account">Account</a>
//           <a href="/">
//             <button className="logout-button">Logout</button>
//           </a>
//         </div>
//         <div className="dashboard-navbar-menu-container">
//           <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//         </div>
//         <Drawer
//           open={openMenu}
//           onClose={() => setOpenMenu(false)}
//           anchor="right"
//         >
//           <Box
//             sx={{ width: 250 }}
//             role="presentation"
//             onClick={() => setOpenMenu(false)}
//             onKeyDown={() => setOpenMenu(false)}
//           >
//             <List>
//               {menuOptions.map((item) => (
//                 <ListItem key={item.text} disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>{item.icon}</ListItemIcon>
//                     <ListItemText primary={item.text} />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//             <Divider />
//           </Box>
//         </Drawer>
//       </div>

//       <div>
//       <h1>Account Page</h1>
//       <p>User Name: John Doe</p>
//       <p>Email ID: {email}</p>
//       <form onSubmit={handleUpdateEmail}>
//         <label htmlFor="new-email">Update Email:</label>
//         <input
//           type="email"
//           id="new-email"
//           value={newEmail}
//           onChange={handleEmailChange}
//         />
//         <button type="submit">Save</button>
//       </form>
//       <form onSubmit={handleEditPassword}>
//         <label htmlFor="new-password">Edit Password:</label>
//         <input
//           type="password"
//           id="new-password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <button type="submit">Save</button>
//       </form>
//     </div>
//       <div>hello this is Accounts</div>
//     </div>
//   );
// };

// export default Navbar;
