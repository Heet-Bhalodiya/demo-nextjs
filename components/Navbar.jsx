import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link'


const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        Navbar
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ mr: 3 }}>
                        <Link href="/">Home</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ mr: 3 }}>
                        <Link href="/about">About Us</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ mr: 3 }}>
                        <Link href="/page1">Page1</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ mr: 3 }}>
                        <Link href="/page2">Page2</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar