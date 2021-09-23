"use strict";

const list = document.querySelectorAll("#body-list li");
const reset = document.getElementById("body-resetBtn");
const sequel = document.getElementById("header-sequel");
const option = {
  once: true,
};

// 初期値0は先行○
let playerId = 0;

list.forEach((item) => {
  item.addEventListener(
    "click",
    (event) => {
      const targetEl = event.target;

      // playerIdが偶数・奇数であるかで○か×を判定
      const idNum = playerId++ % 2 === 0 ? "○" : "×";
      targetEl.innerHTML = idNum;

      if (playerId === 9) {
        sequel.innerHTML = "終了しました";
      } else if (idNum === "○") {
        sequel.innerHTML = "×の番";
      } else if (idNum === "×") {
        sequel.innerHTML = "○の番";
      }
    },
    option // 一度だけ実行させる
  );
});

// reset.addEventListener("click", () => {

// });
