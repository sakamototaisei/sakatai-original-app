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






// //値をグラフに表示させる
// Chart.plugins.register({
//   afterDatasetsDraw: function (chart, easing) {
//     let ctx = chart.ctx;
//     chart.data.datasets.forEach(function (dataset, i) {
//       let meta = chart.getDatasetMeta(i);
//       if (!meta.hidden) {
//         meta.data.forEach(function (element, index) {
//           //値の表示
//           ctx.fillStyle = 'rgb(0, 0, 0, 0.8)'; //文字の色
//           let fontSize = 12; //フォントサイズ
//           let fontStyle = 'normal'; //フォントスタイル
//           let fontFamily = 'Arial'; //フォントファミリー
//           ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

//           let dataString = dataset.data[index].toString();

//           //値の位置
//           ctx.textAlign = 'center'; //テキストを中央寄せ
//           ctx.textBaseline = 'middle'; //テキストベースラインの位置を中央揃え

//           let padding = 5; //余白
//           let position = element.tooltipPosition();
//           ctx.fillText(dataString, position.x, position.y, - (fontSize / 2) - padding);
//         });
//       }
//     });
//   }
// });

// // 棒グラフ縦
// $('#chart01').on('inview', function(event, isInView) { //画面に入ったらグラフを描画
//   if (isInView) {

//     let ctx = document.getElementById("chart01"); //グラフを描画したい場所のid
//     let chart = new Chart(ctx, {
//       type: 'bar', //グラフのタイプ
//       data: { //グラフのデータ
//         labels: ["令和3年度", "令和4年度", "令和5年度",], //データの名前
//         datasets: [{
//           label: "新入院患者数", //グラフのタイトル
//           backgroundColor: "#0584C5", //グラフの色
//           data: ["724", "776", "713",] //横列に並ぶデータ
//         }]
//       },
//       options: { //グラフのオプション
//         legend: {
//           display: false //グラフの説明を非表示
//         },
//         tooltips: { //グラフへカーソルを合わせた際の詳細表示の設定
//           callbacks: {
//             label: function(tooltipItems, data) {
//               if(tooltipItems.yLabel == "0") {
//                 return "";
//               }
//               return data.datasets[tooltipItems.datasetIndex].label + ":" + tooltipItems.yLabel + "人"; //人を最後につける
//             }
//           }
//         },
//         title: { //上部タイトル表示の設定
//           display: true,
//           fontSize: 10,
//           text: '単位:人'
//         },
//         scales: {
//           yAxes: [ //グラフ縦軸(Y軸)設定
//             {
//               ticks: {
//                 beginAtZero: true, //0からスタート
//                 suggestedMax: 1000, //最大が1000
//                 suggestedMin: 0, //最小が0
//                 stepSize: 100, //100づつ数値が刻まれる
//                 callback: function(value) {
//                   return value + '人' //数字＋人で表示
//                 }
//               }
//             }
//           ],
//           xAxes: [ //グラフ縦軸(X軸)設定
//             {
//               barPercentage: 0.5, //バーの太さ
//             }
//           ]
//         }
//       }
//     });
//   }
// });


// グラフ練習
const canvas = document.getElementById("stage");
const chart = new Chart(canvas, {
  type: 'bar',
  data: {
    labels: ["1年目", "2年目", "3年目", "4年目", "5年目", "6年目", "7年目", "8年目", "9年目", "10年目",
     "11年目", "12年目", "13年目", "14年目", "15年目", "16年目", "17年目", "18年目", "19年目", "20年目",
     "21年目", "22年目", "23年目", "24年目", "25年目", "26年目", "27年目", "28年目", "29年目", "30年目", ],
    datasets: [
      {
        label: "積立総額",
        backgroundColor:'#aaf',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
      },
      {
        label: "積立利益",
        backgroundColor: '#faa',
        data: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      display: false
    },
    tooltips: { //グラフへカーソルを合わせた際の詳細表示の設定
      callbacks: {
        label: function(tooltipItems, data) {
          if(tooltipItems.yLabel == "0") {
            return "";
          }
          return data.datasets[tooltipItems.datasetIndex].label + ":" + tooltipItems.yLabel + "万"; //万を最後につける
        }
      }
    },
    title: {
      display: true,
      fontSize: 18,
      text: "積立総額"
    },
    scales: {
      yAxes: [{
        stacked: true,
        ticks: {
          min: 0,
          max: 2000,
          fontSize: 18,
          stepSize: 100,
          callback: function(value) {
            return value + '万' //数字＋人で表示
          }
        },
      }],
      xAxes: [{
        stacked: true,
        display: true,
        barPercentage: 1,
        categoryPercentage: 0.5,
      }]
    },
    layout: {
      padding: {
        left: 100,
        right: 100,
        top: 0,
        bottom: 0
      }
    }
  }
});

