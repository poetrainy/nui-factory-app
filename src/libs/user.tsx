import { userType } from '../types/user';

export const userApi: userType[] = [
  {
    name: {
      last: {
        kanji: '田中',
        furigana: 'タナカ',
      },
      first: {
        kanji: '明夫',
        furigana: 'アキオ',
      },
    },
    phone: ['080', '0000', '0000'],
    email: 'tanaka@akio.com',
    address: {
      postCode: ['530', '0015'],
      text: '大阪府大阪市北区中崎西2丁目3-35',
    },
  },
];
