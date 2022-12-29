export type orderApiType = {
  date: {
    yyyy: number;
    mm: number;
    dd: number;
  };
  id: string[];
  status: string;
  nui: string[];
  goods: string[];
  customer: string;
  total: number;
  settlement: string;
};

export type messageApiType = {
  date: {
    yyyy: number;
    mm: number;
    dd: number;
  };
  id: string;
  messageText: string;
  customer: string;
  staff: string;
  status: string;
};

export type nuiPartsType = {
  svg: number[];
  color: number;
  position: {
    x: -1 | 0 | 1;
    y: -1 | 0 | 1;
  };
};

export type nuiApiType = {
  id: string;
  parts: {
    outline: nuiPartsType;
    eyes: nuiPartsType;
    eyebrows: nuiPartsType;
    ears: nuiPartsType;
    nose: nuiPartsType;
    cheeks: nuiPartsType;
    mouth: nuiPartsType;
    bang: nuiPartsType;
    backHair: nuiPartsType;
    haiOption: nuiPartsType;
    accessory01: nuiPartsType;
    accessory02: nuiPartsType;
    clothes: nuiPartsType;
    body: nuiPartsType;
  };
};

export type partsType = {
  titleJa: string; // タイトル
  titleEn: string; // タイトル 英語
  color: string[] | undefined; // 色及び選択の可否
  symmetry: boolean; // 左右対称に配置するか
  colorPicker: boolean; // 色を自由に選択できるようにするか
  multiple: boolean; // 複数同時に選択できるようにするか
  reversal: boolean; // 左右対称に配置したとき反転するか
  noselected: boolean; // 選択しない ボタンを表示するか
  skin: boolean; // 肌であるか（色の統一）
};
