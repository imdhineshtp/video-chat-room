import {
  Grid,
  Card,
  Button,
  CardHeader,
  Typography,
  CardContent,
  Stack,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

function LandingPage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid
      container
      xs={12}
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundImage: 'url(/static/svgs/blob-scene-haikei-multicolor.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} md={4}>
        <Card sx={{ borderRadius: 5 }}>
          <CardHeader
            title={
              <>
                <Typography
                  align='center'
                  variant='h3'
                  sx={{ fontWeight: 'bolder' }}
                >
                  BooM
                </Typography>
                <Typography align='center' varaint='caption'>
                  Video chat room to everyone for free
                </Typography>
              </>
            }
          />

          <CardContent>
            <Grid
              item
              xs={12}
              container
              justifyContent={'center'}
              // spacing={3}
              sx={{ mt: 2 }}
            >
              {activeStep === 0 && (
                <>
                  <Button variant='contained' onClick={() => handleNext()}>
                    {' '}
                    Start New Room
                  </Button>
                  <Grid item xs={12} sx={{ mt: 2.5 }}>
                    <Stack
                      direction={'row'}
                      spacing={3}
                      justifyContent='center'
                    >
                      <TextField
                        size='small'
                        label='Enter Room ID'
                        variant='outlined'
                      />
                      <Button variant='contained' onClick={() => handleNext()}>
                        <AddIcon />
                      </Button>
                    </Stack>
                  </Grid>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <TextField
                    size='small'
                    label='Full Name'
                    variant='outlined'
                  />
                  <Grid item xs={12} sx={{ mt: 2.5 }}>
                    <Stack direction='row' justifyContent='center' spacing={3}>
                      <Button
                        variant='contained'
                        onClick={() => handleBack()}
                        color='error'
                      >
                        Back
                      </Button>
                      <Button
                        variant='contained'
                        color='success'
                        component={RouterLink}
                        to={'/boom-room/new-room'}
                      >
                        Enter
                      </Button>
                    </Stack>
                  </Grid>
                </>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
