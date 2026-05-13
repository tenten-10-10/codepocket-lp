# CodePocket Marketing LP

CodePocketのマーケティングLPです。GitHub Pagesで公開できるように、HTML / CSS / JavaScriptだけで構成しています。

## 概要

- 対象アプリ: CodePocket
- 内容: アプリ紹介、使い方、FAQ、サポート、プライバシーポリシー
- 想定公開URL: `https://tenten-10-10.github.io/codepocket-lp/`
- App Store URL: 現在は仮URL
- Webフォント: Google Fontsの `IBM Plex Sans JP` と `JetBrains Mono`

## ファイル構成

```txt
.
├── index.html
├── styles.css
├── app.js
├── assets/
│   ├── app-icon.png
│   ├── favicon.svg
│   ├── iphone-waterfall.png
│   ├── iphone-grid.png
│   ├── iphone-card-boxes.png
│   ├── ipad-overview.png
│   ├── og-image.svg
│   └── og-image.png
├── support/
│   └── index.html
├── privacy/
│   └── index.html
├── README.md
└── .nojekyll
```

## GitHub Pages公開手順

1. GitHubに `codepocket-lp` リポジトリを作成
2. このLP一式をpush
3. Settings → Pages
4. Sourceを「Deploy from a branch」にする
5. Branchを `main`、Folderを `/` にする
6. Save
7. 公開URL `https://tenten-10-10.github.io/codepocket-lp/` を確認

## App Store URL差し替え箇所

`app.js` の `APP_STORE_URL` を正式URLへ差し替えてください。

TODO:
正式なCodePocketのApp Store URLが確定したら、APP_STORE_URLを差し替える。

現在の仮URL:

```js
const APP_STORE_URL = "https://apps.apple.com/jp/search?term=CodePocket";
```

## 画像差し替え方法

`assets/` の画像を同名ファイルで差し替えると、HTML側の参照を変えずに更新できます。

- アプリアイコン: `assets/app-icon.png`
- ヒーロー画像: `assets/iphone-waterfall.png`, `assets/iphone-grid.png`
- 機能紹介画像: `assets/ipad-overview.png`
- OGP画像: `assets/og-image.png`

OGP画像は `1200x630` 推奨です。

## Support / Privacy URL

GitHub Pages公開後、App Store Connectでは以下を指定できます。

- Marketing URL: `https://tenten-10-10.github.io/codepocket-lp/`
- Support URL: `https://tenten-10-10.github.io/codepocket-lp/support/`
- Privacy Policy URL: `https://tenten-10-10.github.io/codepocket-lp/privacy/`

既存の `https://devlog-notes-support.vercel.app/support/` と `https://devlog-notes-support.vercel.app/privacy/` から差し替える場合は、App Store Connect上の対象アプリがCodePocketであることを確認してから変更してください。

## macOS版を正式公開するときの変更箇所

- `index.html` の「対応端末」セクションで `macOS` を `利用可能` に変更
- FAQの「パソコンがなくても使えますか？」の回答を更新
- README内の対応端末説明を更新

## ローカル確認方法

ファイルを直接開く場合:

```sh
open index.html
```

ローカルHTTPサーバーで確認する場合:

```sh
python3 -m http.server 4174
```

ブラウザで `http://localhost:4174/` を開いて確認してください。

## 確認項目

- `index.html` をローカルで開いて表示できる
- スマホ幅でCTAが見切れない
- FAQが開閉する
- App Store CTAが仮URLまたは正式URLへ遷移する
- Support / Privacyページが開ける
- OGP画像のパスが正しい
- GitHub Pagesで動く相対パスになっている
- コンソールエラーがない
