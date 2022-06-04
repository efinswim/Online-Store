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
    <Box p={2} sx={{ display: { xs: 'block', md: 'block' } }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <DevicesOtherIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                primary='Техніка'
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <DiamondIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                primary='Прекраси'
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <ManIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                primary='Чоловічий одяг'
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#home'>
              <ListItemIcon>
                <WomanIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                primary='Жіночий одяг'
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
