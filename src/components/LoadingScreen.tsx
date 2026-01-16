import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

interface LoadingScreenProps {
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <LoadingOverlay>
      <LoadingContent>
        <Loader />
        <LoadingText>Loading...</LoadingText>
      </LoadingContent>
    </LoadingOverlay>
  );
};

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s ease-out;
`;

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LoadingText = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  letter-spacing: 1px;
`;

export default LoadingScreen;
