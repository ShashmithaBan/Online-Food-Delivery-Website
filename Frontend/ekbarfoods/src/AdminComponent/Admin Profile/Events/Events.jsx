import React from 'react'
import { EventCard } from '../../../Components/Profile/Cards/EventCard'
import { Box, Button, Grid, Modal, TextField } from '@mui/material'
import { CreateEventForm } from './CreateEventForm'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
  color:"black"
};

export const Events = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues,setFormValues] = React.useState({
    image:"",
    location:"",
    name:"",
    startedAt:"",
    endsAt:null
  })
  const handleSubmit = () =>{
    
  }
  const handleFormChange = (e) =>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
  const handleDateChange = (date,dateType) =>{
      const formatedDate = days(date)
  }
  return (
    
    <div className='flex flex-col items-center pt-5'>
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
  label="image URL"
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
          renderInput = {()=><TextField {...props}/>}
          />
        </DemoItem>
        <DemoItem
          label={
            <Label
              componentName="DateRangePicker"
              valueType="date range"
              isProOnly
            />
          }
          component="DateRangePicker"
        >
          <DateRangePicker
            localeText={{
              start: '',
              end: '',
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
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
      </Grid>
    </form>

  </Box>
</Modal>
      <Button variant='contained' onClick={handleOpen}>CREATE NEW EVENTS</Button>
      <div className="flex flex-wrap justify-center">
      {[1,1,1].map((i)=><EventCard/>)}
      </div>
      
    </div>
  )
}
