import type { CompareContent } from "./types";

export const ko: CompareContent = {
  title: "온라인 뷰어 vs 데스크톱 앱",
  description:
    "무료 온라인 MBOX 뷰어와 Mac용 Mbox Viewer 데스크톱 앱을 비교해 보세요 — 파일 크기, 검색, 개인정보 보호 및 오프라인 사용.",
  intro:
    "둘 다 여러분의 이메일을 로컬에서 비공개로 읽습니다. 브라우저 뷰어는 작은 아카이브를 살펴보는 가장 빠른 방법이며, 데스크톱 앱은 큰 아카이브와 고급 기능을 위해 만들어졌습니다.",
  onlineLabel: "온라인 뷰어",
  desktopLabel: "데스크톱 앱 (Mac)",
  rows: [
    { feature: "가격", online: "무료", desktop: "무료 체험 · 1회 구매" },
    { feature: "설치", online: "필요 없음 — 브라우저에서 실행", desktop: "Mac App Store" },
    { feature: "최대 파일 크기", online: "최대 25 MB", desktop: "모든 크기 (대용량 파일 스트리밍)" },
    { feature: "개인정보 보호", online: "100% 로컬, 업로드 없음", desktop: "100% 로컬, 완전 오프라인" },
    { feature: "전문 검색", online: "—", desktop: "지원" },
    { feature: "폴더 및 Gmail 라벨", online: "라벨별 필터링", desktop: "전체 폴더 트리 및 라벨" },
    { feature: "첨부 파일", online: "다운로드", desktop: "다운로드 및 미리보기" },
    { feature: "내보내기 / 변환", online: "—", desktop: "EML, PDF 등으로 내보내기" },
    { feature: "플랫폼", online: "모든 최신 브라우저", desktop: "현재 macOS · Windows 출시 예정" },
  ],
  closing:
    "기준: 파일이 25 MB 미만이고 읽기만 하면 된다면, 온라인 뷰어로 충분합니다. 전체 Google Takeout, 아카이빙 또는 검색이 필요하다면 데스크톱 앱을 받으세요.",
};
