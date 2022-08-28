import React, { useState } from "react";
import "./App.css";
import { CheckDigit } from "./checkDigit";
import Const from "./const";

function App() {
  // チェックディジットを求めるタイプ
  const [selectType, setSelectType] = useState<
    string | number | readonly string[] | undefined
  >(0);
  // チェックディジットを求める値
  const [inputValue, setInputValue] = useState<
    string | number | readonly string[] | undefined
  >(undefined);
  // チェックディジットを付与した値を保持
  const [checkDigit, setCheckDigit] = useState<string>("");

  /**
   * チェックディジットを求める
   * @returns チェックディジットを含んだ値
   */
  const getCheckDigit = (): void => {
    // 求めたい値が入力されていない場合は早期リターン
    if (!inputValue) {
      return;
    }
    // 初期化
    setCheckDigit("");
    const cd = new CheckDigit();
    setCheckDigit(cd.getCd(Number(selectType), Number(inputValue)));
  };

  return (
    <div className="App">
      <h1>チェックディジット計算</h1>
      <div id="explanation">
        <ol>
          <li>チェックディジット種類を選択します。</li>
          <li>チェックディジットを付与したい数値を入力します。</li>
          <li>
            「チェックディジット計算」をクリックすることで、チェックディジットを付与した値が表示されます。
          </li>
        </ol>
      </div>
      <div id="cd-type">
        <p>チェックディジット種類</p>
        <p>
          <select
            value={selectType}
            onChange={(event) => setSelectType(event.target.value)}
          >
            {Const.CHECK_DIGIT_TYPE.map((val) => {
              return (
                <option key={`key_${val.selectType}`} value={val.selectType}>
                  {val.name}
                </option>
              );
            })}
          </select>
        </p>
      </div>
      <div id="cd-input">
        <p>求めたい値</p>
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
      </div>
      <div id="calc">
        <button
          className={inputValue ? "calc-button" : "button-disabled"}
          onClick={() => {
            getCheckDigit();
          }}
        >
          チェックディジット計算
        </button>
      </div>
      <div id="result">{checkDigit && <p>結果：{checkDigit}</p>}</div>
    </div>
  );
}

export default App;
