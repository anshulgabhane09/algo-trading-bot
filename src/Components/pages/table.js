// import React, { useState } from "react";
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

// function Table({ tableData }) {
//   return (
//     <table className="strategies-table">
//       <thead>
//         <tr>
//           <th>Stocks</th>
//           <th>Strategy</th>
//           <th>Parameters</th>
//           <th>Run Automation</th>
//           <th>Delete</th>
//         </tr>
//       </thead>

//       <tbody>
//         {rows.map((row, index) => (
//           <tr key={index}>
//             <td>{row.stock}</td>
//             <td>{row.strategy}</td>
//             <td>{row.parameters}</td>
//             <td>
//               <button
//                 className="table-button"
//                 onClick={() => toggleRunAutomation(index)}
//               >
//                 {row.isRunning ? "On" : "Off"}
//               </button>
//             </td>
//             <td>
//               <button className="table-button" onClick={() => deleteRow(index)}>
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//         <tr>
//           <td colSpan="5">
//             <button className="table-button" onClick={addRow}>
//               Add Row
//             </button>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }
// export default Table;
