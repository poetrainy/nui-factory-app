// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { partsType } from '../../src/types/parts';
import { userType } from '../../src/types/user';

export default function goods(
  req: NextApiRequest,
  // res: NextApiResponse
  res: NextApiResponse<partsType[]>
) {
  res.status(200).json([
    {
      titleJa: 'りんかく',
      titleEn: 'outline',
      color: ['#ffe2cc', '#fff0e6', '#ecc09b'],
      type: ['normal'],
      symmetry: false,
    },
    {
      titleJa: 'め',
      titleEn: 'eyes',
      color: [''],
      type: ['normal', 'down', 'up', 'uhhm', 'fun', 'parallel'],
      symmetry: true,
    },
    {
      titleJa: 'まゆ',
      titleEn: 'eyebrows',
      color: [''],
      type: ['normal', 'down', 'up', 'bold', 'maro', 'parallel'],
      symmetry: true,
    },
    {
      titleJa: 'みみ',
      titleEn: 'ears',
      color: ['#ffe2cc', '#fff0e6', '#ecc09b'],
      type: ['normal', 'elf'],
      symmetry: true,
    },
    {
      titleJa: 'はな',
      titleEn: 'nose',
      color: ['#212121'],
      type: ['normal'],
      symmetry: false,
    },
    {
      titleJa: 'ほほ',
      titleEn: 'cheeks',
      color: ['#ffdfc0', '#ffdee1'],
      type: ['circle', 'line'],
      symmetry: true,
    },
    {
      titleJa: 'くち',
      titleEn: 'mouth',
      color: ['#212121'],
      type: [
        'normal',
        'smiley',
        'pero',
        'uhhm',
        'triangle',
        'parallel',
        'duck',
        'oh',
      ],
      symmetry: false,
    },
    {
      titleJa: 'まえがみ',
      titleEn: 'bang',
      color: ['#212121'],
      type: [
        'pattsun',
        'light-left',
        'light-right',
        'heavy-left',
        'heavy-right',
        'center',
        'pompadour',
        'brush-up-left',
        'brush-up-right',
        'short-left',
        'short-right',
      ],
      symmetry: false,
    },
    {
      titleJa: 'うしろがみ',
      titleEn: 'back-hair',
      color: [''],
      type: ['bob', 'short', 'long', 'half-up'],
      symmetry: false,
    },
    {
      titleJa: 'オプション',
      titleEn: 'hair-option',
      color: [''],
      type: ['side', 'mesh'],
      symmetry: false,
    },
    {
      titleJa: 'こもの1',
      titleEn: 'accessory-01',
      color: ['#212121'],
      type: [
        'mole-leftEye',
        'mole-rightEye',
        'mole-free',
        'freckles',
        'stupid-top',
        'stupid-bottom',
        'pierce-01',
      ],
      symmetry: false,
    },
    {
      titleJa: 'こもの2',
      titleEn: 'accessory-02',
      color: ['#212121'],
      type: ['eyelashes', 'stupid-top', 'stupid-bottom', 'pierce-02'],
      symmetry: true,
    },
    {
      titleJa: 'ふく',
      titleEn: 'clothes',
      color: ['#ffffff'],
      type: ['t-shirt'],
      symmetry: false,
    },
    // 色味本はいくつか作って、カラーコードの指定もできるようにする
  ]);
}
