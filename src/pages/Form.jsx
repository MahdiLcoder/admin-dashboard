import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Stack, Button, Snackbar, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';

const regEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
const regcontactNumber = "^\+?[0-9]{1,4}?[-.\s]?(\(?[0-9]{2,4}\)?)?[-.\s]?[0-9]{3,4}[-.\s]?[0-9]{3,4}$";

const currencies = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  },
];
function Profile() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const onSubmit = () => {
    handleClick();
  }

  return (
    <Box

      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 2 }} direction={"row"} >
        <TextField error={errors.firstName} helperText={errors.firstName && "this filled is required"} {...register("firstName", { required: true, minLength: 3 })} sx={{ flex: 1 }} label="First Name" variant="filled" />
        <TextField error={errors.lastName} helperText={errors.lastName && "this filled is required"} {...register("lastName", { required: true, minLength: 3 })} sx={{ flex: 1 }} label="Last Name" variant="filled" />
      </Stack>
      <TextField error={errors.email} helperText={errors.email && "please provide a valid email address"} {...register("email", { required: true, pattern: regEmail })} label="Email" variant="filled" />
      <TextField error={errors.contactNumber} helperText={errors.contactNumber && "please provide a valid contact number"} {...register("contactNumber", { required: true, pattern: regcontactNumber })} label="Contact Number" variant="filled" />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        variant='filled'
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="User"
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: 'right' }}>
        <Button type='submit' sx={{ textTransform: 'capitalize' }} variant="contained">
          CREATE NEW USER
        </Button>
      </Box>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Account created successfully
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Profile