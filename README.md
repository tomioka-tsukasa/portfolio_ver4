# Portfolio ver4

## Getting Started

```bash
yarn dev
yarn build
```

## ルール

### コミットルール

* fix: バグ修正
* hotfix: 緊急のバグ修正
* add: 新規追加
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
| feature/* | 新規開発・調整ブランチ | develop |
| hotfix-* | 公開中のバグ修正 | main
| store/* | ソース保存用ブランチ | develop, feature |

## Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## デプロイ

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
