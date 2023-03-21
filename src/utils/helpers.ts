import { IConfig } from "./types";

export const getInitialState = (config: IConfig[]) =>
  config.reduce((acc, { id, defaultValue }) => {
    return { ...acc, [id]: defaultValue || "" };
  }, {});
