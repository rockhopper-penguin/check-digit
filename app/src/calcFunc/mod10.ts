/** モジュラス10 */
export class Mod10 {
  /**
   * モジュラス10 ウエイト2・1分割
   * @param value チェックディジットを追加したい値
   * @returns チェックディジット付きの値
   */
  mod10w2Split = (value: number): string => {
    let sum = 0;
    const valueArray = this.numberToArrayReverse(value);
    valueArray.forEach((val, idx) => {
      // 偶数の場合、値に2をかける
      if (idx % 2 === 0) {
        const tmp = +val * 2;
        // 値が2桁の場合は、1の位と10の位に分け、足した値を代入
        sum += tmp > 9 ? this.splitOnesAndTens(tmp) : tmp;
      } else {
        sum += +val;
      }
    });
    const cd = sum % 10 === 0 ? 0 : 10 - (sum % 10);
    return `${value}${cd}`;
  };

  /**
   * モジュラス10 ウエイト2
   * @param value チェックディジットを追加したい値
   * @returns チェックディジット付きの値
   */
  mod10w2 = (value: number): string => {
    let sum = 0;
    const valueArray = this.numberToArrayReverse(value);
    valueArray.forEach((val, idx) => {
      // 偶数の場合、値に2をかける
      sum += idx % 2 === 0 ? +val * 2 : +val;
    });
    const cd = sum % 10 === 0 ? 0 : 10 - (sum % 10);
    return `${value}${cd}`;
  };

  /**
   * 数値を1文字づつ配列に挿入し、逆順にする
   * @param value 配列に変換したい数値
   * @returns 1文字づつ配列に挿入したあと、反転させた配列
   */
  numberToArrayReverse = (value: number): string[] => {
    // 数値を文字列にキャストして配列に1文字ずつ挿入した後、配列を逆順にする
    // ex. 入力値(1234) => 配列(['4','3','2','1'])
    return [...value.toString()].reverse();
  };

  /**
   * 1の位と10の位を足した値を求める
   * @param value 1の位と10の位に分解したい値
   * @returns 1の位と10の位を足した値
   */
  splitOnesAndTens = (value: number): number => {
    const valueTmp = String(value);
    return +valueTmp.slice(0, 1) + +valueTmp.slice(1, 2);
  };
}
