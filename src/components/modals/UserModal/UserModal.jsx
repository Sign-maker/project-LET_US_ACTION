import React, { useRef, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { HiOutlineEye } from 'react-icons/hi2';
import { HiOutlineArrowUpTray } from 'react-icons/hi2';
import { HiOutlineXMark } from 'react-icons/hi2';

import css from './UserModal.module.css';
import { useAuth } from 'hooks/useAuth';

export const UserModal = ({ onClose }) => {
  const { user } = useAuth();
  const fileInputRef = useRef(null);

  const [imageUrl, setImageUrl] = useState(null); // стан для URL-адреси зображення
  const [file, setFile] = useState(null); // стан для обраного файлу
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

  const baseURL = 'http://localhost:8000/';
  console.log(user);
  const url = user.avatarURL.startsWith('http')
    ? user.avatarURL
    : `${baseURL}${user.avatarURL}`;

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      console.log(imageUrl);

      setImageUrl(imageUrl); // оновлення стану URL-адреси
      setFile(selectedFile); // збереження обраного файлу
      // Обробка завантаженого файлу
    }
  };

  const urlBase = file ? imageUrl : url;

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(32, 'Too Long!'),
    email: Yup.string().email('Invalid email').required('Required'),
    oldPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be no more than 64 characters')
      .required('Password is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be no more than 64 characters')
      .required('Password is required'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  return (
    <div className={css.modalWrap}>
      <HiOutlineXMark className={css.closeIcon} onClick={onClose} />
      <h1 className={css.title}>Setting</h1>
      <p className={css.photoText}>Your photo</p>
      <div className={css.wrapperAvatar}>
        <img src={urlBase} alt={user.name} className={css.img} />
        <button className={css.buttonAvatar} onClick={handleButtonClick}>
          <HiOutlineArrowUpTray /> Upload a photo
        </button>
      </div>
      <Formik
        initialValues={{
          name: user.name ? user.name : '',
          email: user.email,
          oldPassword: '',
          password: '',
          repeatPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.inputWrapperPhoto}>
              <label className={css.labelPhoto} htmlFor="photo"></label>
              <input
                ref={fileInputRef}
                // className={css.inputPhoto}
                id="photo"
                name="photo"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                // onChange={event => {
                //   Handle file upload and send to backend
                //    console.log('Uploaded file:', event.target.files[0]);
                // }}
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
              <div className={css.inputContainer}>
                <Field
                  className={`${css.input} ${
                    errors.name && touched.name ? css.inputError : ''
                  }`}
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
                {errors.name && touched.name ? (
                  <div className={css.errorNameMessage}>{errors.name}</div>
                ) : null}
              </div>
            </div>
            <div className={css.inputWrapperEmail}>
              <label className={css.labelEmail} htmlFor="email">
                E-mail
              </label>
              <div className={css.inputContainer}>
                <Field
                  className={`${css.input} ${
                    errors.email && touched.email ? css.inputError : ''
                  }`}
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div className={css.errorNameMessage}>{errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className={css.passwordWrapper}>
              <label>Password</label>
              <div className={css.inputWrapper}>
                <label className={css.password}>Outdated password:</label>
                <div className={css.iconWrapper}>
                  <Field
                    className={`${css.input} ${
                      errors.oldPassword && touched.oldPassword
                        ? css.inputError
                        : ''
                    }`}
                    name="oldPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  {errors.oldPassword && touched.oldPassword ? (
                    <div className={css.errorMessage}>{errors.oldPassword}</div>
                  ) : null}
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
              </div>
              <div className={css.inputWrapper}>
                <label className={css.password}>New password:</label>
                <div className={css.iconWrapper}>
                  <Field
                    className={`${css.input} ${
                      errors.password && touched.password ? css.inputError : ''
                    }`}
                    name="password"
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div className={css.errorMessage}>{errors.password}</div>
                  ) : null}
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
                  <Field
                    className={`${css.input} ${
                      errors.repeatPassword && touched.repeatPassword
                        ? css.inputError
                        : ''
                    }`}
                    name="repeatPassword"
                    type={showRepeatPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  {errors.repeatPassword && touched.repeatPassword ? (
                    <div className={css.errorMessage}>
                      {errors.repeatPassword}
                    </div>
                  ) : null}
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
