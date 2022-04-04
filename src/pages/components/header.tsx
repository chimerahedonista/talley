import React from 'react'
import Typography from '@mui/material/Typography';
import { color } from '@mui/system';


export interface Props {
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | undefined;
    color?: string;
    children: any;
}

const Header = (props: Props) => {
    const {variant, color} = props;
  return (      
    <Typography align='left' variant={variant} sx={{color: color}}>{props.children}</Typography>
  )
};

export default Header