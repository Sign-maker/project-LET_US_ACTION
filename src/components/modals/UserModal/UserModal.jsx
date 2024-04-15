import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { HiOutlineEye } from 'react-icons/hi2';
import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import { HiOutlineXMark } from 'react-icons/hi2';

import css from './UserModal.module.css';

const initialValues = {
  photo: '',
  gender: '',
  name: '',
  email: '',
  password: '',
  newPassword: '',
  repeatPassword: '',
};
function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

export const UserModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };
  return (
    <div className={css.modalWrap}>
      <HiOutlineXMark className={css.closeIcon} onClick={onClose} />
      <h1 className={css.title}>Setting</h1>
      <div className={css.wrapperAvatar}>
        <img src="" className={css.img} />
        <button className={css.buttonAvatar}>
          <HiOutlineArrowUpTray /> Upload a photo
        </button>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className={css.form}>
            <div className={css.inputWrapperPhoto}>
              <label className={css.labelPhoto} htmlFor="photo"></label>
              <input
                className={css.inputPhoto}
                id="photo"
                name="photo"
                type="file"
                style={{ display: 'none' }}
                onChange={event => {
                  // Handle file upload and send to backend
                  //   console.log('Uploaded file:', event.target.files[0]);
                }}
              />
            </div>
            <div className={css.inputWrapperGender}>
              <label className={css.labelGenderWrapper}>
                Your gender identity
              </label>
              <div className={css.genderWrapper}>
                <label className={css.labelGender}>
                  <Field
                    className={css.radioBtn}
                    type="radio"
                    name="gender"
                    value="male"
                  />
                  Woman
                </label>
                <label className={css.labelGender}>
                  <Field
                    className={css.radioBtn}
                    type="radio"
                    name="gender"
                    value="female"
                  />
                  Man
                </label>
              </div>
            </div>
            <div className={css.inputWrapperName}>
              <label className={css.labelName} htmlFor="name">
                Your name
              </label>
              <Field
                className={css.input}
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                // validate={validateUsername}
              />
            </div>
            <div className={css.inputWrapperEmail}>
              <label className={css.labelEmail} htmlFor="email">
                E-mail
              </label>
              <Field
                className={css.input}
                id="email"
                name="email"
                placeholder="E-mail"
                type="email"
                validate={validateEmail}
              />
              {errors.email && touched.email && (
                <div className={css.errorMessage}>{errors.email}</div>
              )}
            </div>
            <div className={css.passwordWrapper}>
              <label>Password</label>
              <label className={css.password}>Outdated password:</label>
              <div className={css.iconWrapper}>
                <input
                  className={css.input}
                  name="newPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <div className={css.passwordIconContainer}>
                  {showPassword ? (
                    <HiOutlineEye
                      className={css.passwordIcon}
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <HiOutlineEyeSlash
                      className={css.passwordIcon}
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <div className={css.inputWrapper}>
                <label className={css.password}>New password:</label>
                <div className={css.iconWrapper}>
                  <input
                    className={css.input}
                    name="newPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <div className={css.passwordIconContainer}>
                    {showNewPassword ? (
                      <HiOutlineEye
                        className={css.newPasswordIcon}
                        onClick={toggleNewPasswordVisibility}
                      />
                    ) : (
                      <HiOutlineEyeSlash
                        className={css.newPasswordIcon}
                        onClick={toggleNewPasswordVisibility}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className={css.inputWrapper}>
                <label className={css.password}>Repeat new password:</label>
                <div className={css.iconWrapper}>
                  <input
                    className={css.input}
                    name="newPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <div className={css.passwordIconContainer}>
                    {showRepeatPassword ? (
                      <HiOutlineEye
                        className={css.newRepeatPasswordIcon}
                        onClick={toggleRepeatPasswordVisibility}
                      />
                    ) : (
                      <HiOutlineEyeSlash
                        className={css.newRepeatPasswordIcon}
                        onClick={toggleRepeatPasswordVisibility}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button className={css.button} type="submit">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
