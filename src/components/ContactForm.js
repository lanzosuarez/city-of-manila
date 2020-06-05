import React, { useState } from 'react';
import styled from '@emotion/styled';
import Recapatcha from 'react-recaptcha';

const Form = styled.form`
  width: 500px;
  padding: 5px 30px 15px;
  margin: 0px auto 50px;
  width: 100%;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #f0f0f0;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  width: 100%;
  :focus {
    border: 1px solid #05326b;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #f0f0f0;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
  width: 100%;
  :focus {
    border: 1px solid #05326b;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  text-align: left;
`;

const Fieldset = styled.div`
  position: relative;
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #f3a81b;
  color: #051422;
  width: 179px;
  height: 54px;
  border: none;
  width: 100%;
  border-radius: 0.25em;
  margin-top: 20px;
  :hover {
    background-color: #05326b;
    color: white;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactForm = () => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(
      encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    );
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state
      })
    })
      .then(() => {
        alert(
          'Thank you for contacting us. We will respond to your inquiry as soon as we can.'
        );
        form.reset();
      })
      .catch(() => alert('Invalid form submission'));
  };

  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <Fieldset>
        <Label>Name:</Label>
        <Input required type="text" name="name" onChange={handleChange} />
      </Fieldset>
      <Fieldset>
        <Label>Subject:</Label>
        <Input required type="text" name="subject" onChange={handleChange} />
      </Fieldset>
      <Fieldset>
        <Label>Email:</Label>
        <Input required type="email" name="email" onChange={handleChange} />
      </Fieldset>
      <Fieldset>
        <Label>Message:</Label>
        <Textarea required type="text" name="message" onChange={handleChange} />
      </Fieldset>

      <Fieldset
        style={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button type="submit">Submit Message</Button>
      </Fieldset>
    </Form>
  );
};

export default ContactForm;
