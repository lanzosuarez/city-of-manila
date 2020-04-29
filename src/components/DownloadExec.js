import React, { useState } from 'react';
import styled from '@emotion/styled';
import { downloadFile } from '../helpers';

const ButtonLegislation = styled.button`
  background: ${props =>
    props.loading ? 'rgb(253, 148, 45, 0.8)' : '#fd942d'};

  &:active {
    background: rgb(253, 148, 45, 0.9);
  }
`;

const butttonIconStyle = {
  marginRight: 5
};

const DownloadExec = ({ type, url, filename, disabled }) => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      await downloadFile(url, filename);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert('Error while downloading the file');
    }
  };

  return (
    <ButtonLegislation
      disabled={loading || disabled}
      aria-disabled={loading || disabled}
      loading={loading || disabled}
      onClick={onClick}
    >
      <ion-icon style={butttonIconStyle} name="download-outline"></ion-icon>
      {loading ? 'Preparing your download' : `Download ${type}`}
    </ButtonLegislation>
  );
};

export default DownloadExec;
