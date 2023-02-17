import "./styles.css";
/**
 * todo js
 */
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liタグを生成
  const li = document.createElement("li");

  // divタグを生成
  const divRow = document.createElement("div");
  divRow.className = "list-row";

  const divTitle = document.createElement("div");
  divTitle.className = "list-title";
  divTitle.innerText = text;

  // button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    // div以下を初期化
    addTarget.firstElementChild.textContent = null;

    const divTitle = document.createElement("div");
    divTitle.className = "list-title";
    divTitle.innerText = text;

    // 押された完了ボタンの親タグ(li)を完了リストに移動
    const restoreButton = document.createElement("button");
    restoreButton.innerText = "戻す";
    restoreButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を完了リストから削除
      deleteFromCompleteList(restoreButton.parentNode.parentNode);

      // テキスト取得
      const text = restoreButton.parentNode.firstElementChild.innerText;

      // 未完了リストに追加
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.firstElementChild.appendChild(divTitle);
    addTarget.firstElementChild.appendChild(restoreButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(divRow);
  divRow.appendChild(divTitle);
  divRow.appendChild(completeButton);
  divRow.appendChild(deleteButton);
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
