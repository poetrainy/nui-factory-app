export type goodsType = {
  id: number;
  serial: string;
  name: string;
  category: 'tops' | 'bottoms' | 'setup' | 'accessories';
  color: string[];
  price: number;
  img: string[];
};
