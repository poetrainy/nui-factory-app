export type userNameType = {
  kanji: string;
  furigana: string;
};

export type userType = {
  name: {
    last: userNameType;
    first: userNameType;
  };
  phone: number[];
  email: string;
  address: {
    postCode: number[];
    text: string;
  };
};
