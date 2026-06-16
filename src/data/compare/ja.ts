import type { CompareContent } from "./types";

export const ja: CompareContent = {
  title: "オンラインビューア vs デスクトップアプリ",
  description:
    "無料のオンライン MBOX ビューアと Mac 向けの Mbox Viewer デスクトップアプリを比較します。ファイルサイズ、検索、プライバシー、オフライン利用について。",
  intro:
    "どちらもお客様のメールをローカルかつプライベートに読み込みます。ブラウザビューアは小さなアーカイブをのぞき見る最速の方法であり、デスクトップアプリは大きなアーカイブとパワフルな機能のために作られています。",
  onlineLabel: "オンラインビューア",
  desktopLabel: "デスクトップアプリ（Mac）",
  rows: [
    { feature: "価格", online: "無料", desktop: "無料体験版 · 買い切り" },
    { feature: "インストール", online: "不要 — ブラウザで動作", desktop: "Mac App Store" },
    { feature: "最大ファイルサイズ", online: "最大 25 MB", desktop: "サイズ無制限（巨大なファイルをストリーミング）" },
    { feature: "プライバシー", online: "100% ローカル、何もアップロードしない", desktop: "100% ローカル、完全オフライン" },
    { feature: "全文検索", online: "—", desktop: "あり" },
    { feature: "フォルダと Gmail ラベル", online: "ラベルで絞り込み", desktop: "完全なフォルダツリーとラベル" },
    { feature: "添付ファイル", online: "ダウンロード", desktop: "ダウンロードとプレビュー" },
    { feature: "エクスポート／変換", online: "—", desktop: "EML、PDF などへエクスポート" },
    { feature: "対応プラットフォーム", online: "あらゆる最新ブラウザ", desktop: "macOS は現在対応 · Windows は近日対応" },
  ],
  closing:
    "目安：ファイルが 25 MB 未満で、ただ読みたいだけならオンラインビューアで十分です。Gmail の Google Takeout 全体、アーカイブ、検索が必要な場合は、デスクトップアプリをご利用ください。",
};
