import React from 'react';
import './UncontrolledForm.css';
import Form from '../../components/form/form';

export default class FormPage extends React.Component {
  render() {
    return <Form nameInput={undefined} dateInput={undefined} colorSelect={undefined} />;
  }
}
