class Festival {

  //コンストラクタ
  constructor(name, fes, datetime) {
    this._name = name;
    this._fes = fes;

    //設定しようとしている日時が過ぎている場合は、修正して今後の日付にする。
    if (datetime < Date.now()) {
      //まず、年を今年にする。
      datetime.setFullYear(new Date().getFullYear());

      //今年にしても過ぎている場合は+1にする。
      if (datetime < Date.now()) {
        datetime.setFullYear(datetime.getFullYear() + 1);
      }
    }
    this._datetime = datetime;
  }

  //getter
  get name() {
    return this._name;
  }

  get fes() {
    return this._fes;
  }

  get datetime() {
    return this._datetime;
  }
}