import "./styles.css";
/**
 * todo js
 */
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグを生成
  const li = document.createElement("li");

  // divタグを生成
  const divRow = document.createElement("div");
  divRow.className = "list-row";

  const divTitle = document.createElement("div");
  divTitle.className = "list-title";
  divTitle.innerText = inputText;

  // button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  console.log(completeButton);

  // button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);

  // liタグの子要素に各要素を設定
  li.appendChild(divRow);
  divRow.appendChild(divTitle);
  divRow.appendChild(completeButton);
  divRow.appendChild(deleteButton);
  console.log(li);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
