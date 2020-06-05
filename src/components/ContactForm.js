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
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};
  :hover {
    background-color: #05326b;
    color: white;
  }
`;

const ContactForm = () => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const verifyCallback = () => setDisableSubmit(false);

  return (
    <Form method="post" action="">
      <Fieldset>
        <Label>Name:</Label>
        <Input type="text" name="name" />
      </Fieldset>
      <Fieldset>
        <Label>Email:</Label>
        <Input type="email" name="email" />
      </Fieldset>
      <Fieldset>
        <Label>Message:</Label>
        <Textarea type="text" name="message" />
      </Fieldset>

      <Fieldset
        style={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Recapatcha
          render="explicit"
          verifyCallback={verifyCallback}
          sitekey="6LfwrwAVAAAAAKXoy-NWWkcRjDIzKjnFQEgjXTrO"
        />
        <Button disabled={disableSubmit}>Submit Message</Button>
      </Fieldset>
    </Form>
  );
};

export default ContactForm;
