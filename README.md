# 祝二月 Official Website

GitHub Pagesで公開するための静的サイトです。

## 公開手順
1. GitHubで新しいPublicリポジトリを作成（例: `iwai-nigatsu`）。
2. このフォルダ内のファイルとフォルダをすべてリポジトリ直下にアップロード。
3. GitHubのリポジトリで Settings → Pages を開く。
4. Build and deployment の Source を `Deploy from a branch` にし、Branchを `main`、Folderを `/ (root)` にして Save。
5. 数分後に表示されるURLで公開を確認。

## ライブ情報の更新
`data/live.json` を編集します。1公演につき1つのオブジェクトを追加してください。

例:
```json
[
  {
    "date": "2026.12.20",
    "title": "イベント名",
    "venue": "会場名",
    "open": "18:00",
    "start": "18:30",
    "url": "https://チケットページのURL"
  }
]
```
情報がない項目は空欄または省略できます。`url` を省略すると詳細リンクは表示されません。

## NEWSの更新
`data/news.json` を編集します。形式はライブ情報と同じで、`date`、`title`、任意の `url` を使えます。

## 写真・SNSリンク
- アーティスト写真: `images/artist-photo.jpg`
- SNSとTuneCoreのURL: `index.html` 内のリンクを編集

## 注意
JSONのカンマやダブルクォートを崩すと一覧が読み込めなくなるため、編集後にプレビュー確認してください。


## MUSIC ジャケット掲載（今回追加）
- `images/4-3.jpeg`：4/3
- `images/panorama.png`：パノラマ
- `images/zoaholic.png`：Zoaholic
- `index.html` の MUSIC セクションに作品カードを追加しました。
- 現在、各作品の「LISTEN」は祝二月の TuneCore アーティストページにリンクしています。作品ごとの配信URLが分かれば、各カードの `href` を変更できます。
- GitHub リポジトリのルートに、このZIP内のファイルとフォルダをアップロードしてください。ZIPファイルそのものはアップロードしません。
