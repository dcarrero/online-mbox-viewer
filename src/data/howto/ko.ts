import type { HowToContent } from "./types";

export const ko: HowToContent = {
  title: ".mbox 파일 여는 방법",
  description:
    ".mbox 이메일 파일을 온라인에서 열고 읽는 간단하고 쉬운 안내 — 설치할 소프트웨어 없음, 업로드 없음.",
  intro:
    ".mbox 파일은 메일박스 전체를 저장하는 단일 파일로, 여러 이메일 메시지가 하나로 연결되어 있습니다. 이를 읽기 위해 메일 클라이언트가 필요하지 않습니다 — 바로 여기 브라우저에서 열 수 있습니다.",
  stepsHeading: "3단계로 파일 열기",
  steps: [
    { title: "파일을 끌어다 놓거나 선택하기", body: "홈페이지에서 .mbox 파일을 드롭 영역으로 끌어다 놓거나, 영역을 클릭해 컴퓨터에서 파일을 찾아보세요." },
    { title: "메시지 둘러보기", body: "모든 메시지가 발신자, 제목, 날짜와 함께 나열됩니다. 아카이브가 Gmail에서 온 것이라면 라벨별로 필터링할 수 있습니다." },
    { title: "메시지 읽기", body: "아무 메시지나 클릭해 읽어보세요. 이메일은 안전하게 표시되며, 원격 이미지는 기본적으로 차단되고 첨부 파일은 다운로드할 수 있습니다." },
  ],
  exportHeading: ".mbox 파일을 얻는 방법",
  exportIntro: "대부분의 이메일 앱은 .mbox로 내보낼 수 있습니다. 가장 일반적인 출처는 다음과 같습니다:",
  exporters: [
    { name: "Google Takeout (Gmail)", how: "takeout.google.com으로 이동해 메일을 선택하고 다운로드하세요. Gmail은 메시지를 단일 .mbox 파일로 내보냅니다." },
    { name: "Apple Mail", how: "메일박스를 선택한 다음 메일박스 ▸ 메일박스 내보내기…를 선택하세요. Apple Mail이 선택한 폴더에 .mbox 패키지를 씁니다." },
    { name: "Mozilla Thunderbird", how: "ImportExportTools NG 부가 기능을 설치하고, 폴더를 마우스 오른쪽 버튼으로 클릭한 뒤 폴더 내보내기를 선택해 .mbox 파일을 내보내세요." },
  ],
  whatHeading: "여기서 할 수 있는 것",
  what: [
    "모든 메시지를 안전하게 정화된 전체 HTML 서식으로 읽기.",
    "메시지에서 바로 첨부 파일 다운로드하기.",
    "Gmail 아카이브를 원래 라벨별로 필터링하기.",
    "모든 것을 비공개로 유지하기 — 파일은 절대 기기를 벗어나지 않습니다.",
  ],
  desktopHeading: "매우 큰 아카이브 열기",
  desktopBody:
    "온라인 뷰어는 최대 25 MB의 파일에 최적화되어 있습니다. 전체 Google Takeout은 수 기가바이트가 될 수 있으며, 그런 경우에는 어떤 크기의 아카이브든 스트리밍하고 검색과 내보내기를 더해주는 Mac용 네이티브 데스크톱 앱 Mbox Viewer(Windows 출시 예정)를 사용하세요.",
};
