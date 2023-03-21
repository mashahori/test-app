import { FormEvent, useState } from "react";

import { RenderInputs } from "./components/RenderInputs";
import { config } from "utils/constants";

import * as S from "./styles";

function App() {
  const [data, setData] = useState<string>("");
  const [showed, setShowed] = useState<boolean>(false);

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setShowed(true);
  };

  return (
    <S.Wrapper className="App">
      <h1>Log in</h1>
      <S.Form>
        <RenderInputs config={config} onChangeIputs={(data) => setData(data)} />
        <S.Button onClick={handleSubmitForm}>Submit</S.Button>
      </S.Form>
      <p>{showed && data}</p>
    </S.Wrapper>
  );
}

export default App;
