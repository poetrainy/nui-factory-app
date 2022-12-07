// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { partsType } from '../../src/types/parts';

import outlineNormal from '../../src/assets/svg/parts/parts_outline_normal';

import eyesNormal from '../../src/assets/svg/parts/parts_eyes_normal';
import eyesDown from '../../src/assets/svg/parts/parts_eyes_down';
import eyesUp from '../../src/assets/svg/parts/parts_eyes_up';
import eyesUhhm from '../../src/assets/svg/parts/parts_eyes_uhhm';
import eyesFun from '../../src/assets/svg/parts/parts_eyes_fun';
import eyesParallel from '../../src/assets/svg/parts/parts_eyes_parallel';

import eyebrowsNormal from '../../src/assets/svg/parts/parts_eyebrows_normal';
import eyebrowsDown from '../../src/assets/svg/parts/parts_eyebrows_down';
import eyebrowsUp from '../../src/assets/svg/parts/parts_eyebrows_up';
import eyebrowsBold from '../../src/assets/svg/parts/parts_eyebrows_bold';
import eyebrowsMaro from '../../src/assets/svg/parts/parts_eyebrows_maro';
import eyebrowsParallel from '../../src/assets/svg/parts/parts_eyebrows_parallel';

import earsNormal from '../../src/assets/svg/parts/parts_ears_normal';
import earsElf from '../../src/assets/svg/parts/parts_ears_elf';

import noseNormal from '../../src/assets/svg/parts/parts_nose_normal';

import cheeksCircle from '../../src/assets/svg/parts/parts_cheeks_circle';
import cheeksLine from '../../src/assets/svg/parts/parts_cheeks_line';

import mouthNormal from '../../src/assets/svg/parts/parts_mouth_normal';
import mouthSmiley from '../../src/assets/svg/parts/parts_mouth_smiley';
import mouthPero from '../../src/assets/svg/parts/parts_mouth_pero';
import mouthUhhm from '../../src/assets/svg/parts/parts_mouth_uhhm';
import mouthTriangle from '../../src/assets/svg/parts/parts_mouth_triangle';
import mouthParallel from '../../src/assets/svg/parts/parts_mouth_parallel';
import mouthDuck from '../../src/assets/svg/parts/parts_mouth_duck';
import mouthOh from '../../src/assets/svg/parts/parts_mouth_oh';

import bangPattsun from '../../src/assets/svg/parts/parts_bang_pattsun';
import bangLightLeft from '../../src/assets/svg/parts/parts_bang_light-left';
import bangLightRight from '../../src/assets/svg/parts/parts_bang_light-right';
import bangHeavyLeft from '../../src/assets/svg/parts/parts_bang_heavy-left';
import bangHeavyRight from '../../src/assets/svg/parts/parts_bang_heavy-right';
import bangCenter from '../../src/assets/svg/parts/parts_bang_center';
import bangPompadour from '../../src/assets/svg/parts/parts_bang_pompadour';
import bangBrushUpLeft from '../../src/assets/svg/parts/parts_bang_brush-up-left';
import bangBrushUpRight from '../../src/assets/svg/parts/parts_bang_brush-up-right';
import bangShortLeft from '../../src/assets/svg/parts/parts_bang_short-left';
import bangShortRight from '../../src/assets/svg/parts/parts_bang_short-right';

import backHairBob from '../../src/assets/svg/parts/parts_back-hair_bob';
import backHairShort from '../../src/assets/svg/parts/parts_back-hair_short';
import backHairLong from '../../src/assets/svg/parts/parts_back-hair_long';
import backHairHalfUp from '../../src/assets/svg/parts/parts_back-hair_half-up';

import hairOptionSide from '../../src/assets/svg/parts/parts_hair-option_side';
import hairOptionMesh from '../../src/assets/svg/parts/parts_hair-option_mesh';
import hairOptionStupidTop from '../../src/assets/svg/parts/parts_hair-option_stupid-top';
import hairOptionStupidBottom from '../../src/assets/svg/parts/parts_hair-option_stupid-bottom';

import accessory01MoleLeftEye from '../../src/assets/svg/parts/parts_accessory-01_mole-leftEye';
import accessory01MoleRightEye from '../../src/assets/svg/parts/parts_accessory-01_mole-rightEye';
import accessory01MoleFree from '../../src/assets/svg/parts/parts_accessory-01_mole-free';
import accessory01Freckles from '../../src/assets/svg/parts/parts_accessory-01_freckles';
import accessory01Pierce01 from '../../src/assets/svg/parts/parts_accessory-01_pierce-01';

import accessory02Eyelashes from '../../src/assets/svg/parts/parts_accessory-02_eyelashes';
import accessory02Pierce02 from '../../src/assets/svg/parts/parts_accessory-02_pierce-02';

import clothesTShirt from '../../src/assets/svg/parts/parts_clothes_t-shirt';

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
      svg: [outlineNormal],
      symmetry: false,
      colorPicker: false,
    },
    {
      titleJa: 'め',
      titleEn: 'eyes',
      color: [''],
      svg: [eyesNormal, eyesDown, eyesUp, eyesUhhm, eyesFun, eyesParallel],
      symmetry: true,
      colorPicker: true,
    },
    {
      titleJa: 'まゆ',
      titleEn: 'eyebrows',
      color: [''],
      svg: [
        eyebrowsNormal,
        eyebrowsDown,
        eyebrowsUp,
        eyebrowsBold,
        eyebrowsMaro,
        eyebrowsParallel,
      ],
      symmetry: true,
      colorPicker: true,
    },
    {
      titleJa: 'みみ',
      titleEn: 'ears',
      color: ['#ffe2cc', '#fff0e6', '#ecc09b'],
      svg: [earsNormal, earsElf],
      symmetry: true,
      colorPicker: false,
    },
    {
      titleJa: 'はな',
      titleEn: 'nose',
      color: ['#212121'],
      svg: [noseNormal],
      symmetry: false,
      colorPicker: false,
    },
    {
      titleJa: 'ほほ',
      titleEn: 'cheeks',
      color: ['#ffdfc0', '#ffdee1'],
      svg: [cheeksCircle, cheeksLine],
      symmetry: true,
      colorPicker: false,
    },
    {
      titleJa: 'くち',
      titleEn: 'mouth',
      color: ['#212121'],
      svg: [
        mouthNormal,
        mouthSmiley,
        mouthPero,
        mouthUhhm,
        mouthTriangle,
        mouthParallel,
        mouthDuck,
        mouthOh,
      ],
      symmetry: false,
      colorPicker: false,
    },
    {
      titleJa: 'まえがみ',
      titleEn: 'bang',
      color: ['#212121'],
      svg: [
        bangPattsun,
        bangLightLeft,
        bangLightRight,
        bangHeavyLeft,
        bangHeavyRight,
        bangCenter,
        bangPompadour,
        bangBrushUpLeft,
        bangBrushUpRight,
        bangShortLeft,
        bangShortRight,
      ],
      symmetry: false,
      colorPicker: true,
    },
    {
      titleJa: 'うしろがみ',
      titleEn: 'back-hair',
      color: [''],
      svg: [backHairBob, backHairShort, backHairLong, backHairHalfUp],
      symmetry: false,
      colorPicker: true,
    },
    {
      titleJa: 'オプション',
      titleEn: 'hair-option',
      color: [''],
      svg: [
        hairOptionSide,
        hairOptionMesh,
        hairOptionStupidTop,
        hairOptionStupidBottom,
      ],
      symmetry: false,
      colorPicker: true,
    },
    {
      titleJa: 'こもの1',
      titleEn: 'accessory-01',
      color: ['#212121'],
      svg: [
        accessory01MoleLeftEye,
        accessory01MoleRightEye,
        accessory01MoleFree,
        accessory01Freckles,
        accessory01Pierce01,
      ],
      symmetry: false,
      colorPicker: false,
    },
    {
      titleJa: 'こもの2',
      titleEn: 'accessory-02',
      color: ['#212121'],
      svg: [accessory02Eyelashes, accessory02Pierce02],
      symmetry: true,
      colorPicker: false,
    },
    {
      titleJa: 'ふく',
      titleEn: 'clothes',
      color: ['#ffffff'],
      svg: [clothesTShirt],
      symmetry: false,
      colorPicker: false,
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
