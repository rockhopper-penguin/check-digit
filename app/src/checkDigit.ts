import { Mod10 } from "./calcFunc/mod10";
import Const from "./const";

export class CheckDigit {
    /**
     * チェックディジットを付与する
     * @param type チェックディジットタイプ
     * @param value チェックディジットを求めたい値
     * @returns チェックディジットを付与した値
     */
  getCd = (type: number, value: number): string => {
    const mod10 = new Mod10();
    let result = "";
    switch (type) {
      /** モジュラス10 ウエイト2・1分割 */
      case Const.TYPE.MOD10W2_SPLIT:
        result = mod10.mod10w2Split(value);
        break;
      /** モジュラス10 ウエイト2 */
      case Const.TYPE.MOD10W2:
        result = mod10.mod10w2(value);
        break;
      /** モジュラス10 ウエイト2 */
      case Const.TYPE.MOD10W3:
        result = mod10.mod10w3(value);
        break;
    }
    return result
  };
}
