import {
  Grid,
  Card,
  Typography,
  Stack,
  IconButton,
  Pagination,
  CardHeader,
  CardContent,
} from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function BoomRoom() {
  const users = [
    'user',
    'user',
    'user',
    'user',
    'user',
    'user',
    'user',
    'user',
  ];

  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        width: '100%',
        p: 7,
        position: 'relative',
        background: '#111',
      }}
    >
      {users.map((u) => (
        <Grid item xs={12} md={6} sx={{ m: 0, height: '43.5vh', p: 3 }}>
          <Card sx={{ background: '#333' }}>
            <CardHeader />
            <CardContent></CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
