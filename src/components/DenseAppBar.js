import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search'
import TemporaryDrawerMenu from './TemporaryDrawerMenu'
import TemporaryDrawerSearch from './TemporaryDrawerSearch'


export default function DenseAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" enableColorOnDark >
                <Toolbar variant="dense">
                    <TemporaryDrawerMenu />
                    {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <small>ACHESUAROTA.COM.BR</small>
                    </Typography>
                    <TemporaryDrawerSearch />
                    {/* <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}