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
  const [checkDigit, setCheckDigit] = useState<string>('');

  /**
   * チェックディジットを求める
   * @returns チェックディジットを含んだ値
   */
  const getCheckDigit = (): void => {
    // 初期化
    setCheckDigit('')
    const cd = new CheckDigit();
    setCheckDigit( cd.getCd(Number(selectType), Number(inputValue)))
  };

  return (
    <div className="App">
      <h1>チェックディジット計算</h1>
      <div>
        <p>チェックディジット種類</p>
        <select
          value={selectType}
          onChange={(event) => setSelectType(event.target.value)}
        >
          {Const.CHECK_DIGIT_TYPE.map((val) => {
            return <option key={`key_${val.selectType}`} value={val.selectType}>{val.name}</option>;
          })}
        </select>
      </div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>
      <div>
        <button onClick={() => {getCheckDigit()}}>チェックディジット計算</button>
      </div>
      <div><p>{checkDigit}</p></div>
    </div>
  );
}

export default App;
