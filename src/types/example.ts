export type Example = {
  // microCMSのデータとか引っ張ってくる時のため
  // endpointごとにつくる
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

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
