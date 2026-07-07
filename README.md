# NXlive — 넥슨 게임 라이브 스트리밍 MVP

D2A 보일러플레이트 전체 파이프라인 + UX/UI 스킬 통합 테스트 산출물. Mock 데이터 기반 프론트엔드 MVP, 인증 없음.

## 🔗 웹페이지 (GitHub Pages)

- **앱**: https://sooyachoco.github.io/NXlive_0707/
- **대시보드**: https://sooyachoco.github.io/NXlive_0707/dashboard.html

## 화면 (5)

홈 · 라이브 시청 · 채널 · 클립 · 검색 — React 19 + Vite + TS + Tailwind · Zustand · react-router. NX Basic 1.0v(라이트) 디자인 토큰.

## 구조

- `frontend/` — React 앱 소스
- `docs/` — GitHub Pages로 배포되는 정적 사이트 (빌드 결과 + `dashboard.html` + SPA fallback `404.html`)
- `design/` — 디자인 방향 + 샘플 5안(`samples.html`)
- `specs-001-nxlive-mvp/` — spec · scenario · reference-board · flow · ui-design · UT 5종 · HANDOFF

## 로컬 실행

```bash
cd frontend && npm install && npm run dev   # http://localhost:8010
npm run build                                # 프로덕션 빌드
```

## 배포 (GitHub Pages)

Settings → Pages → Source: `main` 브랜치 / `/docs` 폴더. base 경로는 `/NXlive_0707/`.
