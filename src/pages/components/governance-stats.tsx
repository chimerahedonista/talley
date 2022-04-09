import { Card, CardContent } from '@mui/material'
import React from 'react'
import Header from './header'
import HeaderDetailCard from './header-detail-card'

const GovernanceStats = () => {
  return (
    <Card className='grey-card' variant="outlined">
      <CardContent>
        <Header variant="h6">Governance Stats</Header>
        <HeaderDetailCard variantHeader="h6" variantDetails="h4" header="SUSHI REMAINING" details="45,123,456" />
        <HeaderDetailCard variantHeader="h6" variantDetails="h4" header="VOTES DELEGATED" details="45,123" />
        <HeaderDetailCard variantHeader="h6" variantDetails="h4" header="VOTING ADDRESSES" details="456,123" />
      </CardContent>
    </Card>    
  )
}

export default GovernanceStats