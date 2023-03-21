export interface IConfig {
  id: string;
  type: string;
  label: string;
  defaultValue?: string | undefined;
  required?: boolean | undefined;
}

export interface IRenderInputs {
  config: IConfig[];
  onChangeIputs: (value: string) => void;
}

export interface IInputComponent {
  data: IConfig;
  onChange: (value: string, id: string) => void;
}
