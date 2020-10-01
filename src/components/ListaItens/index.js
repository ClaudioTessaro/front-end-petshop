import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link } from "react-router-dom";

import AssignmentIcon from "@material-ui/icons/Assignment";

export const mainListItems = (
  <div>
    <Link to="/clientes">
      <ListItem button>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Cliente" as={Link} to="/clientes" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Teste</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Teste" />
    </ListItem>
  </div>
);
