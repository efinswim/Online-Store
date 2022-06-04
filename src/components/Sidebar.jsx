import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import DiamondIcon from '@mui/icons-material/Diamond';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

const Sidebar = () => {
  return (
    <Box p={2} sx={{ display: { xs: 'block', sm: 'block' } }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <DevicesOtherIcon />
              </ListItemIcon>
              <ListItemText primary='Техніка' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <DiamondIcon />
              </ListItemIcon>
              <ListItemText primary='Прекраси' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <ManIcon />
              </ListItemIcon>
              <ListItemText primary='Чоловічий одяг' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <WomanIcon />
              </ListItemIcon>
              <ListItemText primary='Жіночий одяг' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
