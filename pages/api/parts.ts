// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { partsType } from '../../src/types/apiType';

import {
  partsColor,
  partsLineColor,
  partsSkinColor,
} from '../../src/libs/partsArray';

export default function goods(
  req: NextApiRequest,
  res: NextApiResponse<partsType[]>
) {
  res.status(200).json([
    {
      titleJa: 'りんかく',
      titleEn: 'outline',
      color: partsSkinColor,
      symmetry: false,
      colorPicker: false,
      multiple: false,
      reversal: true,
    },
    {
      titleJa: 'め',
      titleEn: 'eyes',
      color: partsColor,
      symmetry: true,
      colorPicker: true,
      multiple: false,
      reversal: true,
    },
    {
      titleJa: 'まゆ',
      titleEn: 'eyebrows',
      color: undefined,
      symmetry: true,
      colorPicker: false,
      multiple: false,
      reversal: true,
    },
    {
      titleJa: 'みみ',
      titleEn: 'ears',
      color: partsSkinColor,
      symmetry: true,
      colorPicker: false,
      multiple: false,
      reversal: true,
    },
    {
      titleJa: 'はな',
      titleEn: 'nose',
      color: undefined,
      symmetry: false,
      colorPicker: false,
      multiple: false,
      reversal: true,
    },
    {
      titleJa: 'ほほ',
      titleEn: 'cheeks',
      color: ['#ff8b1b5c', '#ff8a947d'],
      symmetry: true,
      colorPicker: false,
      multiple: false,
      reversal: false,
    },
    {
      titleJa: 'くち',
      titleEn: 'mouth',
      color: undefined,
      symmetry: false,
      colorPicker: false,
      multiple: false,
      reversal: true,
    },
    {
      titleJa: 'まえがみ',
      titleEn: 'bang',
      color: partsColor,
      symmetry: false,
      colorPicker: true,
      multiple: false,
      reversal: true,
    },
    {
      titleJa: 'うしろがみ',
      titleEn: 'back-hair',
      color: partsColor,
      symmetry: false,
      colorPicker: true,
      multiple: false,
      reversal: true,
    },
    {
      titleJa: 'かみのオプション',
      titleEn: 'hair-option',
      color: partsColor,
      symmetry: false,
      colorPicker: true,
      multiple: true,
      reversal: true,
    },
    {
      titleJa: 'こもの1',
      titleEn: 'accessory-01',
      color: undefined,
      symmetry: false,
      colorPicker: false,
      multiple: true,
      reversal: true,
    },
    {
      titleJa: 'ふく',
      titleEn: 'clothes',
      color: undefined,
      symmetry: false,
      colorPicker: false,
      multiple: false,
      reversal: true,
    },
    {
      titleJa: 'からだ',
      titleEn: 'body',
      color: partsSkinColor,
      symmetry: false,
      colorPicker: false,
      multiple: false,
      reversal: true,
    },
  ]);
}
