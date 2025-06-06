# Vite + React + TypeScript Template

React 프로젝트를 빠르게 시작하기 위한 템플릿입니다.

## 기술 스택

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Emotion](https://emotion.sh/docs/introduction) (CSS-in-JS)

## 특징

- ⚡️ 빠른 개발 환경 ([Vite](https://vitejs.dev/))
- 🎯 타입 안정성 ([TypeScript](https://www.typescriptlang.org/))
- 💅 CSS-in-JS ([Emotion](https://emotion.sh/))
- 📁 Path Alias (`@/*`, `@shared/*`)
- 🔍 ESLint 설정
- 📱 모바일 친화적인 설정

## 시작하기

```bash
# 프로젝트 클론
git clone [repository-url]

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev
```

## 폴더 구조

```
src/
├── components/     # 공통 컴포넌트
│   └── shared/    # 공유 컴포넌트
├── styles/        # 전역 스타일
└── main.tsx       # 앱 진입점
```

## Path Aliases

```typescript
// @ - src 폴더
import Component from "@/components/Component";

// @shared - src/components/shared 폴더
import { Text } from "@shared/Text";
```

## 사용 가능한 스크립트

- `npm run dev` - 개발 서버 시작
- `npm run build` - 프로덕션 빌드
- `npm run lint` - ESLint 실행
- `npm run preview` - 프로덕션 빌드 미리보기

## ESLint 설정

- React Hooks 규칙
- TypeScript 규칙
- Import/Export 규칙

## 환경 설정

### TypeScript

`tsconfig.app.json`에서 설정:

- Path aliases
- Strict 모드
- JSX 설정 (@emotion/react)

### Vite

`vite.config.ts`에서 설정:

- Path aliases
- Emotion 플러그인
- React 리프레시

## 라이센스

MIT
