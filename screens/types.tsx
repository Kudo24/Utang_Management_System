export interface AddProps {
  title?: string;
}

export interface MineProps {
  date?: {
    month?: string;
    day?: number;
    year?: number;
  };
  name?: string;
  amount?: string;
  description?: string;
}
