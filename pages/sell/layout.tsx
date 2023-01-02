import React from 'react';
import styled from 'styled-components';

interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return <div style={{ backgroundColor: 'white' }}>{children}</div>;
}

const SellLayout = styled.section``;
