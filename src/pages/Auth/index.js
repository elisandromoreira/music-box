import React, { useState } from 'react'

import AuthOptions from '../../components/Auth/AuthOptions'
import RegisterForm from '../../components/Auth/RegisterForm'
import LoginForm from '../../components/Auth/LoginForm'

import LogoNameWhite from '../../assets/logo-name-white.svg'

import './index.scss'

export default function Auth() {
  const [selectedForm, setSelectedForm] = useState(null);

  const handlerForm = () => {
    switch (selectedForm) {
      case "login":
        return <LoginForm setSelectedForm={setSelectedForm} />;
      case "register":
        return <RegisterForm setSelectedForm={setSelectedForm} />;
      default:
        return <AuthOptions setSelectedForm={setSelectedForm} />;
    }
  };
  
  return (
    <div className="auth">
      <div className="auth__dark" />
      <div className="auth__box">
        <div className="auth__box-logo">
          <img src={LogoNameWhite} alt="Musicfy" />
        </div>
        {handlerForm()}
      </div>
    </div>
  );
}