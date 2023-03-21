import { FC } from "react";
import styled from "styled-components";

import { IInputComponent } from "utils/types";

export const InputComponent: FC<IInputComponent> = ({ data, onChange }) => (
  <>
    <Label htmlFor={data.id}>{data.label}</Label>
    <Input
      id={data.id}
      name={data.id}
      type={data.type}
      onChange={(event) => onChange(event.target.value, data.id)}
      defaultValue={data.defaultValue}
      required={data.required}
    />
  </>
);

const Label = styled.label`
  text-align: left;
`;

const Input = styled.input`
  padding: 8px 6px;
  border-radius: 4px;
  border: 1px solid #000;
`;
