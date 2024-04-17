import React from 'react';
import AuthForm from 'components/AuthForm/AuthForm';
import css from '../../components/AuthForm/AuthForm.module.css';

const SigninPage = () => {
  return (
    <section className={css.AuthFormSection}>
      <div className={`${css.div} container`}>
        <AuthForm />
      </div>
    </section>
  );
};

export default SigninPage;
