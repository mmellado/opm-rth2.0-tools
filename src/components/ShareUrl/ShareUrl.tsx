import React, { useCallback } from 'react';
import styled from 'styled-components';
import copy from 'copy-text-to-clipboard';

import { ShareUrlProps } from './types';

const ShareWrapper = styled.pre`
  overflow: scroll;
  padding: 20px;
  border-radius: 5px;
  background: #ccc;
  border: 1px solid #ddd;
  font-family: monospace;
  box-shadow: inset 0 0 5px #666;
`;

const ShareUrl: React.FC<ShareUrlProps> = ({ url }) => {
  const copyUrl = useCallback(() => {
    copy(url);
    alert('Url copied to clipboard');
  }, [url]);
  return (
    <div>
      <h2>Share Your team</h2>
      <button onClick={copyUrl}>Copy URL</button>
      <ShareWrapper>{url}</ShareWrapper>
    </div>
  );
};

export default ShareUrl;
