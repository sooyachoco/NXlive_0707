# 디자인 방향 — NXlive (기준 톤)

> 확정 단계: **reference-proposal STEP 2** (정석 순서 — write-scenario 다음, ui-design-workflow 앞)
> DESIGN_SYSTEM = nxbasic (승계 결정). 톤 발산 생략, 시스템 토큰 적용.

## 디자인 시스템
- 시스템: **NX Basic 1.0v (라이트)** · 적용 경로: 사용자 확정(승계)
- 참조: nxbasic-mcp `search_design_tokens` (2026-07-06 조회)

## 기준 톤 (1개 · 확정)
- **NX Basic 라이트 + 좌측 사이드바** — 정돈·신뢰(사내 표준) + 게임 스트리밍 밀도.
- 레이아웃: 좌측 고정 사이드바(210px) + 콘텐츠. 대표 라이브(히어로) + 실시간 그리드 + 인기 스트리머 + 편성표.
- 콘텐츠 카드는 테두리 없이 여백 위(박스 반복 완화), 히어로·편성표만 프레임.

## NX Basic 토큰 (실측)
| 용도 | 토큰 | 값 |
|---|---|---|
| Primary | pc-800 (semantic-primary) | #0a74ff |
| Primary hover | pc-900 | #0056c7 |
| 강조 배경 | pc-100 | #ecf1f9 |
| 텍스트 | bc-1000 | #17191c |
| 텍스트 서브 | bc-700 | #747a86 |
| 보더 | bc-200 | #d2d6e0 |
| 배경/서피스 | — | #f7f8fa / #ffffff |
| LIVE 상태 | 관용 레드(⬜ DS 확장 시 교체) | #e5484d |
| 타입 스케일 | type-default 11~28 | 음수 letter-spacing |
| 폰트 | Pretendard | — |

## UI 프레임워크
- React 19 + Vite + TS + Tailwind CSS (승계 결정)

## 확정된 방향
- 사이드바(홈/게임/클립/채널/e스포츠/검색) · 상단 검색바 · 반응형(≤960px 사이드바 수평화, 편성표 가로스크롤)

> **목업(화면 시각안)은 ui-design-workflow STEP 3에서 materialize** (이 단계는 톤·토큰 확정까지).
