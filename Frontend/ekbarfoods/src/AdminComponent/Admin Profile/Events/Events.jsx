import React from 'react';
import { EventCard } from '../../../Components/Profile/Cards/EventCard';
import { Box, Button, Grid, Modal, TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  shadows:"1px",
  boxShadow: 24,
  p: 4,
  color: 'text.accent'
};
const initialValues = {
  
    image: '',
    location: '',
    name: '',
    startedAt: null,
    endsAt: null
  
}
export const Events = () => {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(initialValues);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateType) => {
    setFormValues({ ...formValues, [dateType]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Values:', formValues);
    setFormValues(initialValues);
    handleClose();
  };

  return (
    <div className="flex flex-col items-center pt-5">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="image"
                  label="Image URL"
                  variant="outlined"
                  onChange={handleFormChange}
                  value={formValues.image}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="location"
                  label="Location"
                  variant="outlined"
                  onChange={handleFormChange}
                  value={formValues.location}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  variant="outlined"
                  onChange={handleFormChange}
                  value={formValues.name}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Start Date and Time"
                    value={formValues.startedAt}
                    onChange={(newValue) => handleDateChange(newValue, 'startedAt')}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="End Date and Time"
                    value={formValues.endsAt}
                    onChange={(newValue) => handleDateChange(newValue, 'endsAt')}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Create Event
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
      <Button variant="contained" onClick={handleOpen}>
        CREATE NEW EVENT
      </Button>
      <div className="flex flex-wrap justify-center">
        {[1, 2, 3].map((i) => (
          <EventCard key={i} />
        ))}
      </div>
    </div>
  );
};
