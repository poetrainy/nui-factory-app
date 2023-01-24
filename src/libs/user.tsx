import { userType } from '../types/user';

export const userApi: userType[] = [
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
    phone: ['080', '0000', '0000'],
    email: 'mayuzumi@kai.com',
    address: {
      postCode: ['530', '0015'],
      text: '大阪府大阪市北区中崎西２丁目３−３５',
    },
  },
];
