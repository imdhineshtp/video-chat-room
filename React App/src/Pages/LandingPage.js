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
import { Link as RouterLink, Navigate, useNavigate } from 'react-router-dom';

import { Controller, useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { isUuid } from 'uuidv4';

function LandingPage() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  const { handleSubmit, reset, control } = useForm();
  const regEx =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmitRoom = (e) => {
    let data = {};
    data['roomid'] = room;
    data['fullname'] = name;

    if (!data['roomid']) {
      data['roomid'] = uuid();
    }
    console.log(data);
    if (data['roomid'] && data['fullname']) {
      navigate(`/boom-room/${data['roomid']}`);
    }
    e.preventDefault();
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
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item xs={12} md={6}>
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
                      <Controller
                        name='roomid'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            size='small'
                            label='Enter Room ID'
                            variant='outlined'
                            value={room}
                            required
                            onChange={(e) => setRoom(e.target.value)}
                          />
                        )}
                      />

                      <Button
                        variant='contained'
                        disabled={!regEx.test(room)}
                        onClick={() => handleNext()}
                      >
                        <AddIcon />
                      </Button>
                    </Stack>
                  </Grid>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <Controller
                    name='full_name'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <TextField
                        size='small'
                        label='Full Name'
                        variant='outlined'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    )}
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
                        disabled={name.length === 0}
                        variant='contained'
                        color='success'
                        onClick={(e) => onSubmitRoom(e)}
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
