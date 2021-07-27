$(function () {
  let moneyResult = function () {
    // 値の入力
    let years = $("#years").val() * 1;
    let interest = $("#interest").val() * 1;
    let money = $("#money").val() * 1;

    // 値の計算
    // 減災基金係数を求める => 月額の金額を出す
    let interestNew = interest / 100
    let coefficient = interestNew / ((1 + interestNew) ** years - 1);
    let result = Math.floor(money * 10000 * coefficient / 12);

    // 値の出力
    $("#result").val(result);
  };

  // ボタンにイベントを追加
  $("#btnExec").click(moneyResult);
});