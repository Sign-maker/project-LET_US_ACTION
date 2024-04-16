// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { logIn, register } from 'redux-store/auth/authOperations';
// import css from './AuthForm.module.css';
// import { HiOutlineEyeSlash, HiOutlineEye } from 'react-icons/hi2';
// import { NavLink } from 'react-router-dom';

// const AuthForm = () => {
//   const dispatch = useDispatch();
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className={css.signinContainer}>
//       <h2 className={css.title}>Sign In</h2>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .email('Invalid email address')
//             .required('Email is required'),
//           password: Yup.string()
//             .min(8, 'Password must be at least 8 characters')
//             .max(64, 'Password must be no more than 64 characters')
//             .required('Password is required'),
//         })}
//         onSubmit={(values, { setSubmitting, resetForm }) => {
//           dispatch(
//             logIn({
//               email: values.email,
//               password: values.password,
//             })
//           )
//             .catch(error => {
//               console.error('Login failed:', error);
//             })
//             .finally(() => {
//               setSubmitting(false);
//               resetForm();
//             });
//         }}
//         validateOnBlur={true}
//         validateOnChange={true}
//       >
//         {formik => (
//           <Form className={css.form}>
//             <div className={css.inputContainer}>
//               <label className={css.label} htmlFor="email">
//                 Enter your email
//               </label>
//               <Field
//                 className={`${css.input} ${
//                   formik.errors.email && formik.touched.email
//                     ? css.inputError
//                     : ''
//                 }`}
//                 type="email"
//                 name="email"
//                 placeholder="E-mail"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className={css.errorMessage}
//               />
//             </div>

//             <div className={css.inputContainer}>
//               <label className={css.label} htmlFor="password">
//                 Enter your password
//               </label>
//               <div className={css.fieldContainer}>
//                 <Field
//                   className={`${css.input} ${
//                     formik.errors.password && formik.touched.password
//                       ? css.inputError
//                       : ''
//                   }`}
//                   type={showPassword ? 'text' : 'password'}
//                   name="password"
//                   placeholder="Password"
//                 />
//                 <div className={css.passwordIconContainer}>
//                   {showPassword ? (
//                     <HiOutlineEye
//                       className={css.passwordIcon}
//                       onClick={togglePasswordVisibility}
//                     />
//                   ) : (
//                     <HiOutlineEyeSlash
//                       className={css.passwordIcon}
//                       onClick={togglePasswordVisibility}
//                     />
//                   )}
//                 </div>
//               </div>
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className={css.errorMessage}
//               />
//             </div>

//             <button className={css.button} type="submit">
//               Sign In
//             </button>
//           </Form>
//         )}
//       </Formik>
//       <NavLink to="/signup" className={css.link}>
//         Sign up
//       </NavLink>
//     </div>
//   );
// };

// export default AuthForm;

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './AuthForm.module.css';
import { HiOutlineEyeSlash, HiOutlineEye } from 'react-icons/hi2';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const AuthForm = () => {
  const { logIn, register } = useAuth();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isSignUp = location.pathname === '/signup';

  const initialValues = isSignUp
    ? { email: '', password: '', confirmPassword: '' }
    : { email: '', password: '' };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be no more than 64 characters')
      .required('Password is required'),
    ...(isSignUp && {
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const { email, password } = values;
      const action = isSignUp ? register : logIn;
      await action({ email, password });
      if (isSignUp) resetForm();
    } catch (error) {
      console.error(`${isSignUp ? 'Sign Up' : 'Sign In'} failed:`, error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={css.signinContainer}>
      <h2 className={css.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={true}
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

            {isSignUp && (
              <div className={css.inputContainer}>
                <label className={css.label} htmlFor="confirmPassword">
                  Repeat your password
                </label>
                <Field
                  className={`${css.input} ${
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                      ? css.inputError
                      : ''
                  }`}
                  type="password"
                  name="confirmPassword"
                  placeholder="Repeat Password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={css.errorMessage}
                />
              </div>
            )}

            <button className={css.button} type="submit">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </Form>
        )}
      </Formik>
      <NavLink to={isSignUp ? '/signin' : '/signup'} className={css.link}>
        {isSignUp ? 'Sign In' : 'Sign Up'}
      </NavLink>
    </div>
  );
};

export default AuthForm;
