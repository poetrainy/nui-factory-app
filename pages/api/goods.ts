// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { goodsType } from '../../src/types/goods';

export default function goods(
  req: NextApiRequest,
  res: NextApiResponse<goodsType[]>
) {
  // export default function handler(req, res) {
  // // GET以外のリクエストを許可しない
  // if (req.method.toLocaleLowerCase() !== 'get') {
  //     return res.status(405).end()
  // }
  res.status(200).json([
    {
      id: 1,
      name: 'かっこいいタキシード',
      category: ['tops', 'bottoms'],
      color: ['navy', 'white', 'black'],
      price: 2400,
    },
    {
      id: 2,
      name: 'まるくびのシャツ',
      category: ['tops'],
      color: ['navy', 'white', 'black'],
      price: 1500,
    },
    {
      id: 3,
      name: 'ながいコート',
      category: ['tops'],
      color: ['black', 'khaki', 'brown'],
      price: 2000,
    },
    {
      id: 4,
      name: 'すずしいハーフパンツ',
      category: ['bottoms'],
      color: ['black', 'khaki', 'denim'],
      price: 1000,
    },
  ]);
  // res.status(200).json({ name: 'タキシード', category: 'tops' });
}
