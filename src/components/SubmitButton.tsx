import React, { HTMLAttributes, memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(21, 61, 111, 0.44);
  border: 1px solid rgba(21, 61, 111, 0.44);
  padding: 8px;
  border-radius: 16px;
  margin-top: 16px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: rgb(80, 144, 234);
`;

const SubmitButton = memo(
  ({
    text,
    disabled,
    ...props
  }: { text: string; disabled?: boolean } & HTMLAttributes<HTMLElement>) => {
    return (
      <Wrapper {...props}>
        <Text>{text}</Text>
      </Wrapper>
    );
  }
);

export default SubmitButton;
