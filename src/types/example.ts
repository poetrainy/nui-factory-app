type date = {
  yy: number;
  mm: number;
  dd: number;
};

export type CouponType = {
  name: string;
  percent: number;
  start: date;
  end: date;
};

export type categoryType = {
  path: string;
  heading: string;
};

export type historyType = {
  id: number;
  date: {
    yyyy: number;
    mm: number;
    dd: number;
  };
  productId: number[];
  address: string;
  pay: string;
  order: string;
};
