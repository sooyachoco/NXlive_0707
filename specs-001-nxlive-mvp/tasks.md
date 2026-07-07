# 태스크 — NXlive MVP (v2 · 정석 순서)

> 상류 설계(scenario→reference→ui-design)가 코딩을 이끔.
> 접근성(네이티브 a/button)이 ui-design.md에 명시 → **Phase 0에서 선반영** (v1의 F-001 사후수정 불필요).

## Phase 0 — UI 구현 (create-spec Step 2.7)
- [x] **T0-001** React 초기화 + 의존성 — `file: frontend/package.json`
- [x] **T0-002** 타입/Mock/서비스(USE_MOCK 게이트)
- [x] **T0-003** 레이아웃(사이드바+상단바) + 라우팅
- [x] **T0-004** 5개 페이지 — 홈/시청/채널/클립/검색
- [x] **T0-005** 접근성 선반영 — 클릭 요소 네이티브 `<a>/<button>`, `:focus-visible`, aria-label (ui-design.md 요구 이행)

## Phase 1 — 품질 검증 (Mock 유지) ✅
- [x] **T1-001** 상태 처리 일관화 — states.tsx, build 통과
- [x] **T1-002** 접근성 **검증 통과** — 클릭 전용 div 0건(실측), 아바타=`<a>`·편성표=`<button>` (설계 선반영으로 수정 불필요)
- [x] **T1-003** 반응형(≤960px) — index.css 미디어쿼리
- [x] **T1-004** E2E 스모크 파일 — `frontend/tests/e2e/smoke.spec.ts` (실행: `npx playwright install chromium`)
- [x] **T1-review** 인라인 리뷰 — 변경 없음(이식 검증), 레이어/보안 이슈 없음
