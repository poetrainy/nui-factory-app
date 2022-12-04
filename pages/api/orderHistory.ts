// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { historyType } from '../../src/types/example';

export default function goods(
  req: NextApiRequest,
  res: NextApiResponse<historyType[]>
) {
  res.status(200).json([
    {
      id: 1,
      date: {
        yyyy: 2022,
        mm: 1,
        dd: 1,
      },
      productId: [1, 3],
      address: 'ご登録住所',
      pay: 'コンビニ決済(セブンイレブン)',
      order: '0000-0000-0000',
    },
  ]);
}
