# 📚 eBook 프로젝트 디렉토리 구조 (2024 최신)

```
EBOOK/
├── .vscode/
│   └── settings.json
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .cursor/
│   └── rules/
│       ├── page1-context.mdc
│       └── page2-context.mdc
├── META-INF/
├── OEBPS/
│   ├── Audio/
│   ├── Fonts/
│   ├── Images/
│   ├── Misc/
│   ├── Styles/
│   ├── Text/
│   ├── Video/
│   └── content.opf
├── web-version/
│   └── index.html
├── mimetype
└── Doc/
    ├── eBook_dir_structure.md
    └── prd.md
```

## 주요 디렉토리 및 파일 설명

### EBOOK/ (루트 디렉토리)
- 프로젝트의 최상위 디렉토리입니다.

### .vscode/
- Visual Studio Code 편집기 관련 설정 파일이 저장됩니다.
    - `settings.json`: 워크스페이스 관련 VSCode 설정을 정의합니다.

### .github/workflows/
- GitHub Actions 워크플로우 파일이 위치합니다.
    - `deploy.yml`: GitHub Pages로 자동 배포를 위한 설정 파일입니다.

### .cursor/rules/
- 개발 환경 또는 자동화 관련 규칙 파일이 위치하는 디렉토리입니다.
    - `page1-context.mdc`, `page2-context.mdc`: 커서 플러그인 또는 자동화 도구에서 사용하는 규칙/컨텍스트 파일입니다.

### META-INF/
- EPUB 표준에 따른 메타 정보를 담는 디렉토리입니다. (예: `container.xml`)

### OEBPS/ (Open eBook Publication Structure)
- 실제 eBook의 콘텐츠와 리소스가 위치하는 핵심 디렉토리입니다.
    - `Audio/`: 오디오 파일 (MP3, OGG 등)을 저장합니다.
    - `Fonts/`: 사용자 정의 폰트 파일을 저장합니다.
    - `Images/`: 이미지 파일 (JPEG, PNG, SVG 등)을 저장합니다.
    - `Misc/`: 기타 다양한 리소스 파일 (예: PDF, 데이터 파일)을 저장할 수 있습니다.
    - `Styles/`: CSS 스타일시트 파일을 저장합니다.
    - `Text/`: XHTML 또는 HTML 콘텐츠 파일 (챕터, 본문 등)을 저장합니다.
    - `Video/`: 비디오 파일 (MP4 등)을 저장합니다.
    - `content.opf`: EPUB의 메타데이터, 매니페스트 (파일 목록), 스파인 (읽기 순서)을 정의하는 핵심 파일입니다.

### web-version/
- GitHub Pages로 퍼블리싱되는 웹 버전 eBook 파일이 위치합니다.
    - `index.html`: 웹 뷰어의 진입점이 되는 HTML 파일입니다.

### mimetype
- EPUB 파일임을 나타내는 특수 파일입니다. 내용은 `application/epub+zip` 이어야 합니다.

### Doc/
- 프로젝트 문서가 위치하는 디렉토리입니다.
    - `eBook_dir_structure.md`: 현재 보고 계신 이 파일로, 프로젝트의 디렉토리 구조를 설명합니다.
    - `prd.md`: 제품 요구사항 정의서(Product Requirements Document) 파일입니다.