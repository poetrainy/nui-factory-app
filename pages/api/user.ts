// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { userType } from '../../src/types/user';

export default function goods(
  req: NextApiRequest,
  res: NextApiResponse<userType[]>
) {
  res.status(200).json([
    {
      name: {
        last: {
          kanji: '黛',
          furigana: 'マユズミ',
        },
        first: {
          kanji: '灰',
          furigana: 'カイ',
        },
      },
      phone: ["080", "0000", "0000"],
      email: 'mayuzumi@kai.com',
      address: {
        postCode: ["530", "0015"],
        text: '大阪府大阪市北区中崎西２丁目３−３５',
      },
    },
  ]);
}
