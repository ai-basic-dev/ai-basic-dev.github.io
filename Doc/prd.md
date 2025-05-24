# 📘 제품 요구사항 정의서 (PRD)

## 1. 개요
- 프로젝트명: 제어구조 이해를 위한 인터랙티브 eBook
- 타깃 사용자: 중학생 (정보과 교육 대상)
- 기획 배경: 디지털 교과서로의 전환과 함께, 학생이 직접 조작하고 피드백 받을 수 있는 인터랙티브 eBook 제작 필요

## 2. 목표
- 학습목표: 제어문(if, for, while 등)에 대한 이해를 인터랙션을 통해 학습

### 기술목표
- Cursor에서 HTML/JS/CSS 기반 콘텐츠 개발
- EPUB 3.0 구조 준수
- Sigil에서 메타데이터 및 목차 완성
- SVG, localStorage 등 HTML5 API 활용 가능성 검토

## 3. 주요 기능
| 기능명            | 설명                                           |
| --------------   | -----------------------------------            |
| Code Viewer      | JavaScript 코드가 문서 내 코드 블록으로 강조 표시됨  |
| Quiz Component   | 문항 출제, 정오답 시각적 피드백 (질문 끝에 True/False 텍스트 및 색상 표시, 2초 후 자동 사라짐), localStorage에 정답 기록 (예정)  |
| SVG 시각화        | 알고리즘 기본 구조(순차, 선택, 반복) 순서도 SVG로 표현 (page1.xhtml). 조건문 흐름도, 반복문 시뮬레이션 SVG 기반 시각화 (추후 확장)     |
| 목차/내비게이션    | EPUB 3.0 NCX 기준 목차 연결 구현                  |
| 오프라인 작동      | eReader에서 작동 가능한 순수 HTML/CSS/JS 환경      |


## 4. 사용자 흐름
- 표지 → 목차 페이지
- 제어문 소개 → 예제 코드 → 실습 퀴즈
- SVG 시각화 페이지 → 정답 확인 → 학습 이력 저장

## 5. 기술 스택
| 도구        | 설명                                   |
| ---------- | ---------------------------            |
| Cursor AI  | 코딩 및 자동화된 파일 구조 설계            |
| Sigil      | EPUB 메타데이터, 목차(NCX, OPF) 작성      |
| HTML5      | 콘텐츠 구조화                            |
| CSS3       | 반응형 및 접근성 지원 디자인               |
| JavaScript | 인터랙션(퀴즈 정오답 피드백 등), 퀴즈 로직, 시각화 로직 (로컬 저장 등은 추후 확장)  |
| SVG        | 제어 구조 시각화 (순서도 등)                         |


## 6. 파일 구조
-EBOOK/
├── .vscode/
│   └── settings.json
├── META-INF/
├── OEBPS/
│   ├── Audio/
│   ├── Fonts/
│   ├── Images/
│   ├── Misc/
│   │   └── script2.js       # 퀴즈 인터랙션 스크립트
│   ├── Styles/
│   │   └── style1.css       # page1, page2 공통 스타일
│   │   └── quiz_style.css   # page2 퀴즈 스타일 (예상)
│   ├── Text/
│   │   ├── page1.xhtml      # 알고리즘 기초, SVG 순서도 포함
│   │   └── page2.xhtml      # 알고리즘 종류, JS 연동 퀴즈 포함
│   └── Video/
│   └── content.opf
├── book.zip
├── eBook_dir_structure.md
├── mimetype
└── prd.md 

## 7. 테스트 항목
| 항목       | 기준                                           |
| -------- | ---------------------------------------        |
| EPUB 유효성 | EPUB 3.0 Validator 통과                       |
| 뷰어 호환성   | Calibre, Thorium, Sigil Preview에서 정상 표시 |
| 인터랙션 동작  | JavaScript 기반 퀴즈 선택 시 정오답 피드백(True/False) 정상 표시 및 2초 후 사라짐. 페이지 내 SVG 순서도 정상 표시.       |
| 파일 크기    | 모바일 디바이스 기준 로딩 지연 없음               |
 

## 8. 확장 계획
- AI 연동: 대화형 튜터 기능 삽입 (예: GPT 기반 코드 설명 기능)
- LRS 연계: xAPI 기반 학습 이력 추적
- 웹앱 이식: EPUB 콘텐츠를 PWA(Progressive Web App)로 변환