
# Jekyll에서 Next.js로의 구조 마이그레이션 요약

이 문서는 기존 Jekyll 기반 블로그를 Next.js 프레임워크로 마이그레이션하는 과정과 주요 변경 사항을 요약합니다.

## 1. 초기 설정 및 프로젝트 구조 변경

### 백업 및 초기화
기존 Jekyll 프로젝트의 모든 파일과 디렉토리는 루트에 위치한 `jekyll-backup` 디렉토리로 백업되었습니다. 그 후, `npx create-next-app` 명령어를 사용하여 현재 디렉토리에 새로운 Next.js 프로젝트를 생성했습니다. 이 프로젝트는 TypeScript, Tailwind CSS, ESLint 및 App Router를 사용하도록 설정되었습니다.

### 주요 디렉토리 구조 변경

| Jekyll (기존) | Next.js (신규) | 설명 |
| :--- | :--- | :--- |
| `_posts/` | `posts/` | 블로그 게시물(Markdown)을 저장합니다. |
| `_projects/` | `projects/` | 프로젝트(Markdown)를 저장합니다. |
| `_data/*.yml`| `src/data/*.ts` | YAML 형식의 데이터를 TypeScript 파일로 변환하여 타입 안정성과 사용 편의성을 높였습니다. |
| `_layouts/` | `src/app/layout.tsx` | Next.js의 기본 레이아웃 파일이 Jekyll의 레이아웃 시스템을 대체합니다. |
| `pages/*.md`| `src/app/.../page.tsx`| 마크다운 페이지는 React 컴포넌트로 재구현되었습니다. |
| `_includes/`| `src/components/` | 재사용 가능한 UI 조각들은 React 컴포넌트로 만들어졌습니다. (예: `Header.tsx`) |

## 2. 콘텐츠 마이그레이션

### 블로그 게시물 및 프로젝트
- Jekyll의 `_posts`와 `_projects`에 있던 마크다운 파일들은 각각 루트의 `posts`와 `projects` 디렉토리로 이동되었습니다.
- 마크다운 파일의 프론트매터(front-matter)를 파싱하기 위해 `gray-matter` 라이브러리를 사용했습니다.
- 마크다운 본문을 HTML로 렌더링하기 위해 `remark`와 `remark-html`을 사용했습니다.
- `src/lib/posts.ts`와 `src/lib/projects.ts` 유틸리티 파일을 생성하여, 마크다운 파일을 읽고 파싱하는 로직을 중앙에서 관리하도록 했습니다.
- Next.js의 동적 라우팅(`app/posts/[id]/page.tsx`)을 사용하여 각 게시물과 프로젝트에 대한 페이지를 생성했습니다.

### 데이터 파일 (YAML)
- `_data` 디렉토리에 있던 `.yml` 파일들 (`languages.yml`, `social-media.yml` 등)은 `js-yaml`을 사용하여 파싱된 후, `src/data` 디렉토리 내의 `.ts` 파일로 변환되었습니다.
- 각 데이터는 `export const`를 통해 모듈화되어, 애플리케이션의 다른 컴포넌트에서 쉽게 `import`하여 사용할 수 있습니다.

### 정적 페이지 (About, Resume)
- 기존 `pages/about.md`, `pages/resume.md` 파일은 단순한 마크다운 렌더링을 넘어, Jekyll의 Liquid 문법(`{{ ... }}` or `{% ... %}`)을 사용하여 동적으로 컨텐츠를 포함하고 있었습니다.
- 이를 대체하기 위해 `src/app/about/page.tsx`와 `src/app/resume/page.tsx` 경로에 새로운 React 컴포넌트를 생성했습니다.
- 이 컴포넌트들은 마이그레이션된 `src/data`의 TypeScript 데이터와 `lib`의 프로젝트 데이터를 직접 `import`하여 UI를 동적으로 구성합니다. 이를 통해 Jekyll의 `include`와 유사한 기능을 React 컴포넌트 기반으로 재구현했습니다.

## 3. UI 및 레이아웃

- 모든 페이지에 공통적으로 적용될 레이아웃은 `src/app/layout.tsx`에서 관리합니다.
- 사이트의 상단 네비게이션을 담당하는 `Header` 컴포넌트(`src/components/Header.tsx`)를 생성했습니다.
- 이 `Header` 컴포넌트는 `RootLayout`에 포함되어 모든 페이지에 일관된 네비게이션 바를 제공합니다.
- 스타일링은 프로젝트 초기 설정에 따라 **Tailwind CSS**를 적극적으로 활용하여 진행되었습니다. `@tailwindcss/typography` 플러그인을 추가하여 마크다운에서 변환된 HTML 컨텐츠에 아름다운 기본 스타일을 적용했습니다.

## 4. 주요 의존성

마이그레이션 과정에서 다음과 같은 주요 npm 패키지들이 설치되었습니다:
- `next`, `react`, `react-dom`: Next.js 핵심 패키지
- `tailwindcss`: CSS 스타일링을 위한 프레임워크
- `@tailwindcss/typography`: 마크다운 컨텐츠 스타일링 플러그인
- `gray-matter`: 마크다운 프론트매터 파싱
- `remark`, `remark-html`: 마크다운을 HTML로 변환
- `js-yaml`: YAML 데이터 파싱 (개발용)

이 문서를 통해 Jekyll에서 Next.js로의 전환 과정에 대한 이해에 도움이 되기를 바랍니다.
