import { SVGProps } from 'react';

export type partsType = {
  titleJa: string;
  titleEn: string;
  color: string[];
  svg: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>[];
  symmetry: boolean;
};
