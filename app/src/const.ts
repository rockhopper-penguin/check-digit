export default class Const {
    /** チェックディジット種類 */
    static CHECK_DIGIT_TYPE: {name: string, selectType: number}[] = [
        /** モジュラス10ウエイト2・1分割 */
        {name: 'モジュラス10 ウエイト2・1分割', selectType: 0},
        /** モジュラス10ウエイト2 */
        {name: 'モジュラス10 ウエイト2', selectType: 1},
        /** モジュラス10ウエイト3 */
        {name: 'モジュラス10 ウエイト3', selectType: 2},
    ]

    static TYPE = {
        /** モジュラス10 ウエイト2・1分割 */
        MOD10W2_SPLIT: 0,
        /** モジュラス10 ウエイト2 */
        MOD10W2:1,
        /** モジュラス10 ウエイト3 */
        MOD10W3:2,
    }
}