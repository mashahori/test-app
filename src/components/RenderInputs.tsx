import { FC, useState, useEffect } from "react";

import { InputComponent } from "./InputComponent";
import { IRenderInputs } from "utils/types";
import { getInitialState } from "utils/helpers";

export const RenderInputs: FC<IRenderInputs> = ({ config, onChangeIputs }) => {
  const [data, setData] = useState(getInitialState(config));

  const handleChange = (value: string, id: string) => {
    setData({ ...data, [id]: value });
    onChangeIputs(JSON.stringify({ ...data, [id]: value }));
  };

  useEffect(() => {
    onChangeIputs(JSON.stringify(data));
  }, [data, onChangeIputs]);

  return (
    <>
      {config?.map((el) => (
        <InputComponent
          key={el.id}
          data={el}
          onChange={(value, id) => handleChange(value, id)}
        />
      ))}
    </>
  );
};
