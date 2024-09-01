export function getCategoryName(slug: string) {
  switch(slug) {
    case 'myself':
      return '自己紹介'
    case 'portfolio':
      return 'ポートフォリオについて'
    case 'skill':
      return 'エンジニアスキル'
    case 'work-style':
      return 'ワークスタイル'
    case 'life-style':
      return 'ライフスタイル'
    default:
      return '一致するカテゴリーがありません。'
  }
}
