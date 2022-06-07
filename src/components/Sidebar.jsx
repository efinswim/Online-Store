import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { changeCategory } from '../store/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

import DiamondIcon from '@mui/icons-material/Diamond';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

const categories = [
  {
    primaryUA: 'Техніка',
    primaryEN: 'Electronics',
    icon: <DevicesOtherIcon />,
  },
  {
    primaryUA: 'Прекраси',
    primaryEN: 'Jewelery',
    icon: <DiamondIcon />,
  },
  {
    primaryUA: 'Чоловічий одяг',
    primaryEN: "Men's clothing",
    icon: <ManIcon />,
  },
  {
    primaryUA: 'Жіночий одяг',
    primaryEN: "Women's clothing",
    icon: <WomanIcon />,
  },
];

const Sidebar = ({ changeCategory }) => {
  const category = useSelector((state) => console.log(state.filter.category));
  const dispatch = useDispatch();

  return (
    <Box p={2} sx={{ display: { xs: 'block', md: 'block' } }}>
      <Box position='fixed'>
        <List>
          {categories.map((category) => (
            <ListItem disablePadding key={category.primaryEN}>
              <ListItemButton
                onClick={(id) => console.log(id)}
                component='a'
                //href={`${category.primaryEN}`}
              >
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
                  primary={category.primaryUA}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
