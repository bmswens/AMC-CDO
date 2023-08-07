// React
import React from 'react'

// MUI
import { Grid, Stack } from '@mui/material'

// custom
import { ContentGrid } from '../Content'
import ImageTile from './ImageTile'

function StackedImages(props) {
    return (
        <Grid
            item
            xs={12}
            lg={3}
        >
            <Stack
                sx={{
                    height: "100%"
                }}
                spacing={2}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {props.children}
            </Stack>
        </Grid>
    )
}

function Home(props) {

    return (
        <ContentGrid
            sx={{
                marginTop: 0,
                justifyContent: "space-evenly",
                height: "calc(100vh - 72px)"
            }}
        >
            <Grid item xs={12} lg={8}>
                <Stack
                    sx={{
                        height: "100%"
                    }}
                    spacing={8}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ImageTile
                        src="./img/misc/home-center-tile.JPG"
                        topText="Mission"
                        bottomText={`
                           Our mission is 'Mapping the Fog of War' as a platform for American Airmen support through the Data War Void.
                        `}
                    />
                </Stack>
            </Grid>
            <StackedImages>
                <ImageTile
                    src="./img/misc/home-projects-tile.JPG"
                    path="https://usaf.dps.mil/sites/CDO"
                    topText="SharePoint"
                    bottomText="See what we are up to."
                />
                <ImageTile
                    src="./img/misc/home-team-tile.jpg"
                    path="/team"
                    topText="Team"
                    bottomText="See our team, past and present."
                />
            </StackedImages>

        </ContentGrid >
    )
}

export default Home
