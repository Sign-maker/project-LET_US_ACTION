import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux-store/auth/authOperations';
import css from './AuthForm.module.css';
import { HiOutlineEyeSlash, HiOutlineEye } from 'react-icons/hi2';

const AuthForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign In</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(
            logIn({
              email: values.email,
              password: values.password,
            })
          )
            .catch(error => {
              console.error('Login failed:', error);
            })
            .finally(() => {
              setSubmitting(false);
              resetForm();
            });
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {formik => (
          <Form className={css.form}>
            <div className={css.inputContainer}>
              <label className={css.label} htmlFor="email">
                Enter your email
              </label>
              <Field
                className={`${css.input} ${
                  formik.errors.email && formik.touched.email
                    ? css.inputError
                    : ''
                }`}
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <div className={css.inputContainer}>
              <label className={css.label} htmlFor="password">
                Enter your password
              </label>
              <div className={css.fieldContainer}>
                {' '}
                <Field
                  className={`${css.input} ${
                    formik.errors.password && formik.touched.password
                      ? css.inputError
                      : ''
                  }`}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
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
              <ErrorMessage
                name="password"
                component="div"
                className={css.errorMessage}
              />
            </div>

            <button className={css.button} type="submit">
              Sign In
            </button>
          </Form>
        )}
      </Formik>
      <a className={css.link} href="/signup">
        Sign up
      </a>
    </div>
  );
};

export default AuthForm;
