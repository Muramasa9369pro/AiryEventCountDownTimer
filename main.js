/**ライバーのイベントオブジェクトリスト*/
const festivals = [
  new Festival("🅿️","るしふぁぽい", "デビュー記念", new Date("2024-05-01 00:00:00")),
  new Festival("🅿️","るしふぁぽい", "誕生日", new Date("2023-08-08 00:00:00")),
  new Festival("🎀","鏡迷アリス", "デビュー記念", new Date("2023-02-26 00:00:00")),
  new Festival("🎀","鏡迷アリス", "誕生日", new Date("2023-05-04 00:00:00")),
  new Festival("🐰", "月見かぐや", "デビュー記念", new Date("2023-03-05 20:01:00")),
  new Festival("🐰","月見かぐや", "誕生日", new Date("2023-07-07 00:00:00")),
  new Festival("🦔","茨姫わらび", "デビュー記念", new Date("2023-03-12 00:00:00")),
  new Festival("🦔","茨姫わらび", "誕生日", new Date("2023-01-29 00:00:00")),
  new Festival("🍎","白雪ミラ", "デビュー記念", new Date("2023-03-19 00:00:00")),
  new Festival("🍎","白雪ミラ", "誕生日", new Date("2023-04-09 00:00:00")),
  new Festival("🦋","風吹スサノオ", "デビュー記念", new Date("2023-09-12 00:00:00")),
  new Festival("🦋","風吹スサノオ", "誕生日", new Date("2023-11-05 00:00:00")),
  new Festival("☀️","天日テラス", "デビュー記念", new Date("2023-09-13 00:00:00")),
  new Festival("☀️","天日テラス", "誕生日", new Date("2023-03-14 00:00:00")),
  new Festival("🌋","紅炎イザナミ", "デビュー記念", new Date("2023-09-14 00:00:00")),
  new Festival("🌋","紅炎イザナミ", "誕生日", new Date("2023-02-11 00:00:00")),
  new Festival("☪️","月光ツクヨミ", "デビュー記念", new Date("2023-09-15 00:00:00")),
  new Festival("☪️","月光ツクヨミ", "誕生日", new Date("2023-11-23 00:00:00")),
  new Festival("🌸","木花サクヤ", "デビュー記念", new Date("2023-09-16 00:00:00")),
  new Festival("🌸","木花サクヤ", "誕生日", new Date("2023-03-09 00:00:00")),
  new Festival("⛓","宵闇ニャル", "デビュー記念", new Date("2023-05-08 00:00:00")),
  new Festival("⛓","宵闇ニャル", "誕生日", new Date("2023-08-20 00:00:00")),
  new Festival("🍝","飛影ハスタ", "デビュー記念", new Date("2023-05-09 00:00:00")),
  new Festival("🍝","飛影ハスタ", "誕生日", new Date("2023-10-25 00:00:00")),
  new Festival("👑","赤魔アザト", "デビュー記念", new Date("2023-05-10 00:00:00")),
  new Festival("👑","赤魔アザト", "誕生日", new Date("2023-12-10 00:00:00")),
  new Festival("♑️","黒羊ニグラス", "デビュー記念", new Date("2023-05-11 00:00:00")),
  new Festival("♑️","黒羊ニグラス", "誕生日", new Date("2023-01-16 00:00:00")),
  new Festival("🔮","無印ヨグ", "デビュー記念", new Date("2023-05-12 00:00:00")),
  new Festival("🔮","無印ヨグ", "誕生日", new Date("2023-10-04 00:00:00")),
  new Festival("🍃","屋島もみじ", "デビュー記念", new Date("2023-04-01 00:00:00")),
  new Festival("🍃","屋島もみじ", "誕生日", new Date("2023-08-04 00:00:00")),
  new Festival("❄️","雪車町ましろ", "デビュー記念", new Date("2023-04-02 00:00:00")),
  new Festival("❄️","雪車町ましろ", "誕生日", new Date("2023-02-20 00:00:00")),
  new Festival("🐚","五穣みずき", "デビュー記念", new Date("2023-04-03 00:00:00")),
  new Festival("🐚","五穣みずき", "誕生日", new Date("2023-07-20 00:00:00")),
  new Festival("🪭","九娥つばき", "デビュー記念", new Date("2023-04-04 00:00:00")),
  new Festival("🪭","九娥つばき", "誕生日", new Date("2023-10-29 00:00:00")),
  new Festival("🧡","火挟あかり", "デビュー記念", new Date("2023-04-05 00:00:00")),
  new Festival("🧡","火挟あかり", "誕生日", new Date("2023-12-01 00:00:00")),
];



//初回ソート
sortFestivals();

//過ぎてしまったイベント日時を修正する。
updateDatetime()

// 毎秒 updateTimers() を呼び出す
setInterval(updateDatetime, 1000);

/**
 * festivals配列の並び替えを行うメソッド
 * 現在時間までの残り時間が短い順に並び替える。
*/
function sortFestivals() {
  festivals.sort((a, b) => (a.datetime - Date.now()) - (b.datetime - Date.now())); // 終了時間の昇順でソート
}


/**
 * テーブルの表示を更新する。
 * テーブルに関するDOMを作り変えることで、テーブルの表示を変更する。
*/
function renderFestival() {
  
  //現在時刻を表示
  const nowDateTimeSpan = document.getElementById("nowDateTime");
  nowDateTimeSpan.textContent = getCurrentDateTime() ;
  
  
  //table要素を取得
  const countDownTimerTable = document.getElementById("count-down-timer-table");

  //最初の行を取得
  const firstRow = countDownTimerTable.querySelector("tr:first-child");

  // 既存の行をクリアする
  countDownTimerTable.innerHTML = '';

  //最初の行を復元
  countDownTimerTable.appendChild(firstRow);

  //festivals配列をもとに表示する。
  festivals.forEach(festival => {

    //tr要素を作成
    const trElement = document.createElement("tr");

    //td要素を作成し、テキストコンテンツを追加
    const tdElement_01 = document.createElement("td");
    tdElement_01.textContent = festival.icon;

    const tdElement_02 = document.createElement("td");
    tdElement_02.textContent = festival.name;

    const tdElement_03 = document.createElement("td");
    tdElement_03.textContent = festival.fes;

    const festivalMonth = festival.datetime.getMonth() + 1;
    const festivalDate = festival.datetime.getDate();
    const tdElement_04 = document.createElement("td");
    tdElement_04.textContent = `${festivalMonth}月${festivalDate}日`;

    const tdElement_05 = document.createElement("td");
    const remainingTime = festival.datetime - Date.now();
    //記念日当日は残り時間の表示を「当日」にして、その行を強調する。
    if (-3600 * 24000 < remainingTime && remainingTime <= 0) {
      tdElement_04.textContent = "★当日★";
      trElement.style.background = "rgba(255, 192, 192, 0.5)";
    }
    else {
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      if (0 <= remainingTime && remainingTime <= 3600 * 24000) {
        //あと1日以内になったら時・分・秒数も表示する。
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        tdElement_05.textContent = `${hours}時間 ${minutes}分 ${seconds}秒`;
      }
      else {
        tdElement_05.textContent = `${days}日`;
      }
    }

    //td要素をtr要素に追加
    trElement.appendChild(tdElement_01);
    trElement.appendChild(tdElement_02);
    trElement.appendChild(tdElement_03);
    trElement.appendChild(tdElement_04);
    trElement.appendChild(tdElement_05);

    //tr要素をtr要素に追加
    countDownTimerTable.appendChild(trElement);
  });
}

/**
 * 現在時刻がイベント日時を越したかを判断する。
 * 越した場合（イベント日時の翌日になった場合）、イベント日時を1年後に設定する。
 */
function updateDatetime() {
  festivals.forEach(festival => {
    const remainingTime = festival.datetime - Date.now();
    if (remainingTime < -3600 * 24000) {
      // 当日を過ぎたら、記念日を一年後に設定する。
      festival.datetime.setFullYear(festival.datetime.getFullYear() + 1);

      // イベント日時が変更されたということは再度ソートする必要がある。
      sortFestivals();
    }
  });

  //テーブルを更新する。
  renderFestival();
}

/**
 * 現在時刻を取得
 * @returns 現在時刻を文字列で取得
 */
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedDateTime = `${year}年${month}月${day}日${hours}時${minutes}分${seconds}秒`;
  return formattedDateTime;
}