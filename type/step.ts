export type Input = {
  label: string;
  validResponses: string[];
  subtitle: string;
};

export type Step = {
  title: string;
  subtitle: string;
  content?: React.ReactNode | string;
  inputs?: Array<Input>;
};
