import React from 'react';
import './App.css';
import ButtonHandling from './components/ButtonHandling';
import PropsHandling from './components/PropsHandling';
import InputCheckbox from './components/InputCheckbox';
import InputDropdown from './components/InputDropdown';
import InputRadiobutton from './components/InputRadiobutton';
import FormSubmit from './components/FormSubmit';
import PropsArray from './components/PropsArray';

function App() {
  return (
    <>
      <ButtonHandling />
      <PropsHandling />
      <PropsArray />
      <InputCheckbox />
      <InputDropdown />
      <InputRadiobutton />
      <FormSubmit />
    </>
  );
}

export default App;
