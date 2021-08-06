$(function() {
  // 回答に確認
  let check = function() {
    // 問題の答え
    let q1 = $("input[name=q1]:checked").val();
    let q2 = $("input[name=q2]:checked").val();
    let q3 = $("input[name=q3]:checked").val();
    let q4 = $("input[name=q4]:checked").val();
    let q5 = $("input[name=q5]:checked").val();
    let q6 = $("input[name=q6]:checked").val();
    let q7 = $("input[name=q7]:checked").val();
    let q8 = $("input[name=q8]:checked").val();
    let q9 = $("input[name=q9]:checked").val();
    let q10 = $("input[name=q10]:checked").val();

    // 答え合わせ
    let right = 0
    if (q1 == 4) {right += 1;}
    if (q2 == 2) {right += 1;}
    if (q3 == 2) {right += 1;}
    if (q4 == 3) {right += 1;}
    if (q5 == 3) {right += 1;}
    if (q6 == 2) {right += 1;}
    if (q7 == 3) {right += 1;}
    if (q8 == 4) {right += 1;}
    if (q9 == 1) {right += 1;}
    if (q10 == 1) {right += 1;}

    // 正答率を表示
    let percent = right / 10 * 100;
    let text = "正答率は" + percent + "％でした！";
    $("#res").empty().append(text);

    if (percent == 0) {
      $("#res").css({background: "#666", color: "#fff"});
    } else
    if (percent == 100) {
      $("#res").css({background: "#faa", color: "#000"});
    } else {
      $("#res").css({background: "#fff", color: "#000"});
    }
  };

  // 回答の確認ボタンにイベントを追加
  $("#btnCheck").click(check);
});