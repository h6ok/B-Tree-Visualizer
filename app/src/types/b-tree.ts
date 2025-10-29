/*
 * 次数(t)の制約について
 *
 * 子の数
 * ・最大の子の数 > 2t
 * ・最小の子の数 > t
 *
 * キーの数
 * ・最小 > t - 1
 * ・最大 > 2t - 1
 */

export type BTree = {
  root: Node; // ルートノードへの参照
  degree: number; // 次数
  add: (key: Key) => void;
  get: (index: number) => Key;
  delete: (index: number) => void;
};

export type Node = {
  keys: Key[];
  next: Node[];
  candidate?: Key | undefined;
  compare?: number | undefined;
  compareAt?: number | undefined;
  toIndex?: number | undefined;
};

export type Key = {
  index: number;
  value: any;
};

export type Data = {
  id: number;
  name: string;
  age: number;
};
