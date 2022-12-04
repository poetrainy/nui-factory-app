export type userNameType = {
  kanji: string;
  furigana: string;
};

export type userType = {
  name: {
    last: userNameType;
    first: userNameType;
  };
  phone: string[];
  email: string;
  address: {
    postCode: string[];
    text: string;
  };
};
