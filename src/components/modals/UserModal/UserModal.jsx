import React, { useState } from 'react';
import { useFormik } from 'formik';
import { IconContext } from 'react-icons';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { HiOutlineEye } from 'react-icons/hi2';

import {
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  //   Input,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import css from './User.modal.module.css';

const initialValues = {
  photo: '',
  gender: '',
  name: '',
  email: '',
  currentPassword: '',
  newPassword: '',
  repeatPassword: '',
};

const validate = values => {
  const errors = {};

  // Додайте вашу логіку валідації тут

  return errors;
};

const onSubmit = async values => {
  try {
    // Ваша логіка відправки даних на сервер
  } catch (error) {
    // Обробка помилок
  }
};

const UserModal = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.modalWrap}>
      <h1 className={css.title}>Setting</h1>
      <form onSubmit={formik.handleSubmit}>
        <FormLabel component="legend">Your photo</FormLabel>
        <input
          id="photo"
          name="photo"
          type="file"
          onChange={event => {
            // Запит на сервер для збереження фото
          }}
        />
        <FormControl component="fieldset">
          <FormLabel component="legend">Your gender identity</FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Your name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="E-mail"
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <FormControl fullWidth>
          <TextField
            id="currentPassword"
            name="currentPassword"
            label="Outdated password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            InputProps={
              <IconContext.Provider>
                <div>
                  <HiOutlineEye />
                </div>
              </IconContext.Provider>
            }
          />
          <TextField
            id="newPassword"
            name="newPassword"
            label="New Password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.newPassword}
            onChange={formik.handleChange}
          />
          <TextField
            id="repeatPassword"
            name="repeatPassword"
            label="Repeat new password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
          />
        </FormControl>
        <Button type="submit" color="primary" variant="contained">
          Save
        </Button>
      </form>
    </div>
  );
};

export default UserModal;
