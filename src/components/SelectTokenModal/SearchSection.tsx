import React, { memo, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const TextInput = styled.input`
  background: transparent;
  color: rgb(255, 255, 255);
  font-weight: 500;
  outline: none;
  border: none;
  font-size: 18px;
  width: 100%;
`;

const InputWrapper = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  padding: 12px;
  border: solid 1px rgb(64, 68, 79);
  margin: 0 16px;
  border-radius: 16px;
  &:hover {
    border: 1px solid rgb(73, 106, 199);
  }
`;

const SearchSection = memo(() => {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <InputWrapper>
        <TextInput
          placeholder="Search name or paste address"
          onChange={(e) => setValue(e.target.value)}
        />
      </InputWrapper>
    </Wrapper>
  );
});

export default SearchSection;
