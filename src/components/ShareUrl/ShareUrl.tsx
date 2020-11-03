import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import copy from 'copy-text-to-clipboard';
import { mediaquery } from '@styles/mediaquery';
import Button from '@components/Button';

import { ShareUrlProps } from './types';

const Title = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;

  ${mediaquery.md(css`
    font-size: 25px;
  `)}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaquery.md(css`
    flex-direction: row;
  `)}
`;

const ShareWrapper = styled.pre`
  overflow: scroll;
  padding: 20px;
  border-radius: 5px;
  background: #eee;
  border: 1px solid #ddd;
  font-family: monospace;
  box-shadow: inset 0 0 5px #ccc;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 100%;
  ${mediaquery.md(css`
    width: 85%;
  `)}
`;

const StyledButton = styled(Button)`
  width: 100%;
  ${mediaquery.md(css`
    width: 15%;
  `)}
`;

const ShareUrl: React.FC<ShareUrlProps> = ({ url, title }) => {
  const copyUrl = useCallback(() => {
    copy(url);
    alert('Url copied to clipboard');
  }, [url]);
  return (
    <div>
      <Title>{title}</Title>
      <Wrapper>
        <ShareWrapper>{url}</ShareWrapper>
        <StyledButton onClick={copyUrl} buttonType="secondary">
          Copy URL
        </StyledButton>
      </Wrapper>
    </div>
  );
};

export default ShareUrl;
