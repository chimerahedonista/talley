import { Button } from '@mui/material'
import React from 'react'

export interface Props {
    timeRemaining: number;
}
// TODO: Calculate time remaining properly in days and hours
const TimeRemaining = (props: Props) => {
  return (
    <Button color='secondary' variant='contained'>
        6Days, 8Hours
    </Button>
  )
}

export default TimeRemaining;