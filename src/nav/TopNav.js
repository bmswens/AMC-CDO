// React
import React from 'react'

// MUI
import { AppBar, Box, Button, Toolbar, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'


function TopNav(props) {

    const theme = useTheme()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
            >
                <Toolbar>
                    <Box
                        component="img"
                        src="./img/logo.png"
                        alt="AMC CDO Logo"
                        sx={{
                            height: 42,
                            width: 42,
                            mr: 1
                        }}
                    />
                    <Link to="/">
                        <Button
                            sx={{
                                color: theme.palette.text.primary
                            }}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link to="https://usaf.dps.mil/sites/CDO">
                        <Button
                            sx={{
                                color: theme.palette.text.primary
                            }}
                        >
                            SharePoint
                        </Button>
                    </Link>
                    <Link to="/team">
                        <Button
                            sx={{
                                color: theme.palette.text.primary
                            }}
                        >
                            Team
                        </Button>
                    </Link>
                    <Button
                        variant="contained"
                        href="mailto:AMC.CDO.ChiefDataOffice@us.af.mil"
                    >
                        Contact Us
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopNav
