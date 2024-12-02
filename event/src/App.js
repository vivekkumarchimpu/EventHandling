import React from 'react';
import './App.css';
import ButtonHandling from './components/ButtonHandling';
import PropsHandling from './components/PropsHandling';
import InputCheckbox from './components/InputCheckbox';
import InputDropdown from './components/InputDropdown';
import InputRadiobutton from './components/InputRadiobutton';

function App() {
  return (
    <>
      <ButtonHandling />
      <PropsHandling />
      <InputCheckbox />
      <InputDropdown />
      <InputRadiobutton />
    </>
  );
}

export default App;
