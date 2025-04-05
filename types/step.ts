export type Input = {
  label: string;
  validResponses: string[];
  subtitle: string;
};

type CommonPage = {
  title: string;
  subtitle: string;
};

export type GamePage = CommonPage & {
  inputs: Array<Input>;
};

export type FirstPage = CommonPage;

export type EndPage = CommonPage;

export type Steps = [FirstPage, ...GamePage[], EndPage];
