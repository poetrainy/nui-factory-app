// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { partsType } from '../../src/types/parts';

import eyesNormal from '../../src/assets/svg/parts/parts_eyes_normal';
import eyesDown from '../../src/assets/svg/parts/parts_eyes_down';
import eyesUp from '../../src/assets/svg/parts/parts_eyes_up';
import eyesUhhm from '../../src/assets/svg/parts/parts_eyes_uhhm';
import eyesFun from '../../src/assets/svg/parts/parts_eyes_fun';

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
      svg: ['normal'],
      symmetry: false,
    },
    {
      titleJa: 'め',
      titleEn: 'eyes',
      color: [''],
      svg: [eyesNormal, eyesDown, eyesUp, eyesUhhm, eyesFun, 'parallel'],
      symmetry: true,
    },
    {
      titleJa: 'まゆ',
      titleEn: 'eyebrows',
      color: [''],
      svg: ['normal', 'down', 'up', 'bold', 'maro', 'parallel'],
      symmetry: true,
    },
    {
      titleJa: 'みみ',
      titleEn: 'ears',
      color: ['#ffe2cc', '#fff0e6', '#ecc09b'],
      svg: ['normal', 'elf'],
      symmetry: true,
    },
    {
      titleJa: 'はな',
      titleEn: 'nose',
      color: ['#212121'],
      svg: ['normal'],
      symmetry: false,
    },
    {
      titleJa: 'ほほ',
      titleEn: 'cheeks',
      color: ['#ffdfc0', '#ffdee1'],
      svg: ['circle', 'line'],
      symmetry: true,
    },
    {
      titleJa: 'くち',
      titleEn: 'mouth',
      color: ['#212121'],
      svg: [
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
      svg: [
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
      svg: ['bob', 'short', 'long', 'half-up'],
      symmetry: false,
    },
    {
      titleJa: 'オプション',
      titleEn: 'hair-option',
      color: [''],
      svg: ['side', 'mesh'],
      symmetry: false,
    },
    {
      titleJa: 'こもの1',
      titleEn: 'accessory-01',
      color: ['#212121'],
      svg: [
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
      svg: ['eyelashes', 'pierce-02'],
      symmetry: true,
    },
    {
      titleJa: 'ふく',
      titleEn: 'clothes',
      color: ['#ffffff'],
      svg: ['t-shirt'],
      symmetry: false,
    },
    // 色味本はいくつか作って、カラーコードの指定もできるようにする
  ]);
}
//   res.status(200).json([
//     {
//       titleJa: 'りんかく',
//       titleEn: 'outline',
//       color: ['#ffe2cc', '#fff0e6', '#ecc09b'],
//       svg: ['normal'],
//       symmetry: false,
//     },
//     {
//       titleJa: 'め',
//       titleEn: 'eyes',
//       color: [''],
//       svg: [eyesNormal, eyesDown, eyesUp, 'uhhm', 'fun', 'parallel'],
//       symmetry: true,
//     },
//     {
//       titleJa: 'まゆ',
//       titleEn: 'eyebrows',
//       color: [''],
//       svg: ['normal', 'down', 'up', 'bold', 'maro', 'parallel'],
//       symmetry: true,
//     },
//     {
//       titleJa: 'みみ',
//       titleEn: 'ears',
//       color: ['#ffe2cc', '#fff0e6', '#ecc09b'],
//       svg: ['normal', 'elf'],
//       symmetry: true,
//     },
//     {
//       titleJa: 'はな',
//       titleEn: 'nose',
//       color: ['#212121'],
//       svg: ['normal'],
//       symmetry: false,
//     },
//     {
//       titleJa: 'ほほ',
//       titleEn: 'cheeks',
//       color: ['#ffdfc0', '#ffdee1'],
//       svg: ['circle', 'line'],
//       symmetry: true,
//     },
//     {
//       titleJa: 'くち',
//       titleEn: 'mouth',
//       color: ['#212121'],
//       svg: [
//         'normal',
//         'smiley',
//         'pero',
//         'uhhm',
//         'triangle',
//         'parallel',
//         'duck',
//         'oh',
//       ],
//       symmetry: false,
//     },
//     {
//       titleJa: 'まえがみ',
//       titleEn: 'bang',
//       color: ['#212121'],
//       svg: [
//         'pattsun',
//         'light-left',
//         'light-right',
//         'heavy-left',
//         'heavy-right',
//         'center',
//         'pompadour',
//         'brush-up-left',
//         'brush-up-right',
//         'short-left',
//         'short-right',
//       ],
//       symmetry: false,
//     },
//     {
//       titleJa: 'うしろがみ',
//       titleEn: 'back-hair',
//       color: [''],
//       svg: ['bob', 'short', 'long', 'half-up'],
//       symmetry: false,
//     },
//     {
//       titleJa: 'オプション',
//       titleEn: 'hair-option',
//       color: [''],
//       svg: ['side', 'mesh'],
//       symmetry: false,
//     },
//     {
//       titleJa: 'こもの1',
//       titleEn: 'accessory-01',
//       color: ['#212121'],
//       svg: [
//         'mole-leftEye',
//         'mole-rightEye',
//         'mole-free',
//         'freckles',
//         'stupid-top',
//         'stupid-bottom',
//         'pierce-01',
//       ],
//       symmetry: false,
//     },
//     {
//       titleJa: 'こもの2',
//       titleEn: 'accessory-02',
//       color: ['#212121'],
//       svg: ['eyelashes', 'pierce-02'],
//       symmetry: true,
//     },
//     {
//       titleJa: 'ふく',
//       titleEn: 'clothes',
//       color: ['#ffffff'],
//       svg: ['t-shirt'],
//       symmetry: false,
//     },
//     // 色味本はいくつか作って、カラーコードの指定もできるようにする
//   ]);
// }
