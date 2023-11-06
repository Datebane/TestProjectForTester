import './App.css';
import React from 'react';
import Header from './components/Header/index';
import BodyPhoto from './components/BodyPhoto';
import BodyObjects from './components/BodyObjects';
import UserForm from './components/UserForm';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header />
      <BodyPhoto />
      <BodyObjects />
      <UserForm />
      <Footer />
    </div>
  );
}

export default App;
