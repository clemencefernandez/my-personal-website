export type Input = {
  label: string;
  validResponses: string[];
  description?: string;
  hint?: string;
};

type CommonPage = {
  title: string;
  description: React.ReactNode;
};

export type GamePage = CommonPage & {
  inputs: Array<Input>;
};

export type FirstPage = CommonPage;

export type EndPage = CommonPage;

export type Steps = [FirstPage, ...GamePage[], EndPage];
