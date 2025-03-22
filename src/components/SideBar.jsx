import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: theme.palette.background.paper,
  borderRight: `1px solid ${theme.palette.divider}`,
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);

function SideBar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  let location = useLocation();

  const array1 = [
    { text: 'Dashboard', icon: <HomeOutlinedIcon />, path: '/' },
    { text: 'Manage Team', icon: <PeopleOutlineOutlinedIcon />, path: '/team' },
    { text: 'Contact Information', icon: <ContactsOutlinedIcon />, path: '/contact' },
    { text: 'Invoices Balances', icon: <ReceiptOutlinedIcon />, path: '/invoices' },
  ];

  const array2 = [
    { text: 'Profile Form', icon: <PersonOutlinedIcon />, path: '/Form' },
    { text: 'Calendar', icon: <CalendarTodayOutlinedIcon />, path: '/calendar' },
    { text: 'FAQ Page', icon: <LiveHelpOutlinedIcon />, path: '/FAQ' },
  ];

  const array3 = [
    { text: 'Bar Chart', icon: <BarChartOutlinedIcon />, path: '/bar' },
    { text: 'Pie Chart', icon: <PieChartOutlineOutlinedIcon />, path: '/pie' },
    { text: 'Line Chart', icon: <ShowChartOutlinedIcon />, path: '/line' },
    { text: 'Geography Chart', icon: <MapOutlinedIcon />, path: '/geography' },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Avatar sx={{ mx: 'auto', width: open ? 88 : 44, height: open ? 88 : 44, my: 1, border: '2px solid grey', transition: '0.25s' }} alt="Layla Ali" src="https://photosbulk.com/wp-content/uploads/dpz-dp-for-girls-instagram_27.webp" />
      {open && (
        <>
          <Typography align="center" sx={{ fontSize: 17, transition: '0.25s' }}>Layla Ali</Typography>
          <Typography align="center" sx={{ fontSize: 15, transition: '0.25s' }} color={theme.palette.info.main}>admin</Typography>
        </>
      )}

      <Divider />

      <List>
        {array1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => { navigate(item.path); }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null,
                },
                open
                  ? {
                    justifyContent: 'initial',
                  }
                  : {
                    justifyContent: 'center',
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {array2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => { navigate(item.path); }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null,
                },
                open
                  ? {
                    justifyContent: 'initial',
                  }
                  : {
                    justifyContent: 'center',
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {array3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => { navigate(item.path); }}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? theme.palette.mode === 'dark' ? grey[800] : grey[300] : null,
                },
                open
                  ? {
                    justifyContent: 'initial',
                  }
                  : {
                    justifyContent: 'center',
                  },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;