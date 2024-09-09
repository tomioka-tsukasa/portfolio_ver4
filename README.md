# Portfolio ver4

## Getting Started

😸 😸 😸 

### command

```bash
$ yarn install
# パッケージインストール
$ yarn dev
# 開発環境立ち上げ
$ yarn build
# SGビルド
```

### version

* `node`: `20.14.0`
* `yarn`: `1.22.22`
* `Next.js`: `14.2.5`（App Router）
* `react`: `^18`

nodeバージョンは`nodenv`で管理。yarnは`nodenv`でインストールして`~/.nodenv/shims/yarn`パスを向けるように注意。

「[nodenv-yarn-install｜GitHub](https://github.com/pine/nodenv-yarn-install)」を使えば、`nodenv install [version]`時にyarnも合わせてインストール可能。

## Deploy
🚚 💨

### 1. GitHubワークフローで自動デプロイ

[.github/workflows/main.yml](./.github/workflows/main.yml)

#### 【トリガー①】 main branch PR close

`main`ブランチへのPRがクローズされると自動デプロイが走ります。`main`から派生させるブランチは後述のブランチルールを参照。

#### 【トリガー②】 Newt(Headless CMS) Webhook

Newtの「手動デプロイApp」の「デプロイログモデル」を公開することで、自動デプロイが走るようにWebhookをかけています。詳細は後述の「[Newt Management](./?tab=readme-ov-file#)」を参照。

#### 【ステップ概要】

前述のトリガーで下記のタスクが実行されるよう組んでいます。

* [Install Dependencies]：yarnでパッケージインストール
* [Create .env File]：リポジトリの`Actions secrets and variables`で設定した`ENV_LOCAL`を扱って環境変数のセット
* [Build]：`yarn build`Next.jsのSGビルド
* [Sync files]：FTPでサーバーへのアップロード

### 2. FTPでサーバーへアップロード

* サーバー「[Xserver](https://secure.xserver.ne.jp/xapanel/login/xserver/?request_page=xserver%2Findex)」
* ドメインは「[Netowl](https://secure.netowl.jp/netowl/?service=stardomain)」

それぞれのアクセス情報は私用MacBookのローカル上で保存しているテキストを参照。

#### 直接アップロードの際の注意

ドメインフォルダのルート直下の`.ftp-deploy-sync-state.json`は自動デプロイのキャッシュ等が入っているので削除厳禁。Next.jsの機能でWebフォントをサブセット化してアップロードしており、初期のデプロイに11分は掛かるので、不要な削除を防ぐために直接アップは控える。

## Git Rules

🌿 🌿 🌿 

### コミットルール

* fix: バグ修正
* hotfix: 緊急のバグ修正
* add: 新規追加
* adjust: 微細な修正など
* update: ニュース更新など機能変更ががない更新
* style: ソースのフォーマット調整
* refactor: 仕様に影響がないコード改善(リファクタ)
* change: 仕様変更
* disable: 無効化（コメントアウト等）
* remove: 削除
* revert: 変更取り消し
* env: 開発環境の追加・調整
* docs: ドキュメントの作成・調整
* upgrade: バージョンアップ

### ブランチルール

| ブランチ名 | 役割 | チェックアウト元 |
| --- |  --- |  --- | 
| main | 公開ブランチ | - |
| develop | 開発ブランチ | main |
| feature/* | 新規開発・調整ブランチ | (main), develop |
| hotfix-* | 公開中のバグ修正 | main
| store/* | ソース保存用ブランチ | [any] |

## Newt Management

📦 🛠

Works、Blog、About、Uni Lab.、それぞれのページは「[Newt(Headless CMS)](https://app.newt.so/tsukasa-tomioka-lab)」でコンテンツ管理しています。Newt運用方法とNext.jsでの型定義や新規モデル読み込み時のルールなどをまとめます。

### Newt CDN API Token

公開中のコンテンツへのアクセスは、「[スペース設定 ＞ APIキー](https://app.newt.so/tsukasa-tomioka-lab/settings/api)」の「PORTFOLIO」のトークンを使用。

アクセストークンを使ったNewtへのリクエストは「[blob/main/src/lib/newt/index.ts](blob/main/src/lib/newt/index.ts)」の`newt-client-js`の初期化メソッドで行っている。

### GitHub Webhook

GitHub Actionsで自動デプロイが走るようにNewt側でWebhookの設定をしています。

* リクエストURL: [https://api.github.com/repos/tomioka-tsukasa/portfolio_ver4/dispatches](https://api.github.com/repos/tomioka-tsukasa/portfolio_ver4/dispatches)
* Appタイプ: CMS App
* トリガー: 手動デプロイ(App) - デプロイログ(Model)
* ペイロード: `Newt_Manual_Deploy`

GitHubのアクセストークンは「tomioka-tsukasa」アカウントの`Newt Webhook`にて発行。

### 運用方法【Tech Blog】

#### スラッグルール

* 学習系記事は、`learning-[category]-`のプレフィックスをつける
* 学習系以外(開発中のメモや記録など)は、`note-[category]-`のプレフィックスをつける
* 末尾に8桁のハッシュ値を付与する
  * 数字・小文字のみ
  * シリーズ系じゃない限り連番は使用しない

### 運用方法【コンテンツ管理】

Works、About、これらのページは一括で「コンテンツ管理モデル」で管理している。

モデルのフィールドで下記を設けており、投稿時に必要なフィールドを活用。

* QA型フィールド: AboutのQA
* 作品型フィールド: Works
* 画像付きアイテム型フィールド: 汎用系
* オブジェクト型フィールド: 汎用系

上記以外に新規ページを拡充する際は、適宜必要なフィールドを追加。パフォーマンス向上のためにも「（任意）フィールド指定」の設定を推奨します。

### 運用方法【手動デプロイ】

NewtのWebhookで、Tech Blog等の各モデル公開時に自動デプロイができるが、不用意なワークフロー発火を防ぐために、「手動デプロイ」のAppのみをトリガーにしています。

### Next.js内での型定義

「[newt.d.ts](./blob/main/src/types/newt.d.ts)」にてNewtに関連する型定義を一括で定義。import不要でどのファイルからもアクセス可能。

新規モデルを追加する際は上記で型定義をして、「[lib/newt/](./newt/index.ts)」にてデーフェッチ用関数を登録。

## Troubleshooting

🤔 🙄 😑 
