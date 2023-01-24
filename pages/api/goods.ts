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
      serial: '9283-3294-3478',
      name: 'かっこいいタキシード',
      category: ['setup'],
      color: ['navy', 'white', 'black'],
      price: 2400,
      img: ['', '', '', '', ''],
    },
    {
      id: 2,
      serial: '3219-8374-4757',
      name: 'まるくびのシャツ',
      category: ['tops'],
      color: ['navy', 'white', 'black'],
      price: 1500,
      img: ['', '', ''],
    },
    {
      id: 3,
      serial: '1802-0273-2481',
      name: 'ながいコート',
      category: ['tops'],
      color: ['black', 'khaki', 'brown'],
      price: 2000,
      img: ['', '', '', ''],
    },
    {
      id: 4,
      serial: '4592-7180-3019',
      name: 'すずしいハーフパンツ',
      category: ['bottoms'],
      color: ['black', 'khaki', 'denim'],
      price: 1000,
      img: ['', '', ''],
    },
  ]);
  // res.status(200).json({ name: 'タキシード', category: 'tops' });
}
