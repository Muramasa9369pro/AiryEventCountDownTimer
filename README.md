# AiryEventCountDownTimer
Vtuber事務所エアリープロダクションに所属するライバーの、イベントまでの時間をカウントダウンするwebサイトです。

【開発での注意】
- 「index.css」ではなく「index.scss」を編集しましょう。
index.cssファイルを直接編集しないほうが良いと思われます。
というのも、index.scssを記述したのち、それを専用ソフト（VSCodeの拡張機能）を使用してcss形式に変換しindex.cssを作成しているからです。
index.cssファイルを直接編集すると、index.scssが変更されずにそのまま残ってしまう可能性があります。
index.scssを編集して、index.cssは専用ソフトを使用して作成するというカタチをとった方が安全だと思われます。

【おもなファイル説明】
- index.html 　htmlファイルはこれだけです。画面の構成を記述しています。
- index.css    index.scssファイルをcssファイルに変換したものです。実際にはcssファイルを編集しておらず、scssファイルを編集してそのあと専用ソフト（もしくはVSCodeの拡張機能など）を使用してcssに変換しています。
- index.scss　 index.cssを作成するためのファイルです。cssファイルを直接編集するのではなく、このscssファイルを編集して専用ソフトを用いてcssファイルを作成するようにしましょう。
- main.js      処理ロジックを記述したJavaScriptファイルです。カウントダウン処理や画面更新などを管理しています。
- festival.js  各イベントの情報を管理するためのクラスを記述したJavaScriptファイルです。

【連絡先】
疑問点や質問などがあるときは、本プロジェクトの管理者である『Muramasa9369』までご連絡ください。
Twitter:@muramasa9369
