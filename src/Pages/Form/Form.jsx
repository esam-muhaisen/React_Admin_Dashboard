import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import HeaderText from "Components/HeaderText";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];
const Form = () => {
  const handleClick = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };




  return (

    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
      }}
      noValidate
      autoComplete="off"
    >
    <HeaderText header={"CREATE USER"} info={"Create a New User Profile"}/>

      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          {...register("firstName", { required: true, minLength: 4 })}
          helperText={
            Boolean(errors.firstName)
              ? "This field is required && min 4 character"
              : null
          }
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          error={Boolean(errors.lastName)}
          {...register("lastName", { required: true, minLength: 4 })}
          helperText={
            Boolean(errors.lastName)
              ? "This field is required && min 4 character"
              : null
          }
        />
      </Stack>

      <TextField
        label="Email"
        variant="filled"
        error={Boolean(errors.email)}
        {...register("email", { required: true, pattern: regEmail })}
        helperText={
          Boolean(errors.email) ? "Please provide a valid email address" : null
        }
      />
      <TextField
        label="Contact Number"
        variant="filled"
        error={Boolean(errors.number)}
        {...register("number", { required: true, pattern: phoneRegExp })}
        helperText={
          Boolean(errors.number) ? "Please provide a valid Phone number" : null
        }
      />
      <TextField label="Adress 1" variant="filled" />
      <TextField label="Adress 2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button

        type="submit"
        variant="contained"
        sx={{ textTransform: "capitalize", margin: "0px 0px 0px auto" }}
      >
        Create New User
      </Button>

      <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Account Created successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
