import React from 'react'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import {Stack} from '@mui/material';
export default function Road() {
    return (
        <Stack direction='row' className='plane-icon-stack'>
                <FlightTakeoffIcon />
                <div
                style={{
                    width:'100%',
                    padding: '2px',
                    backgroundColor: 'black'
                }}></div>
            <FlightLandIcon />
        </Stack>
    )
}
