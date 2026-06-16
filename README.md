# cursor-demo

이메일 검증·추출 유틸리티와 로그인 검증을 제공하는 Node.js ES Module 프로젝트입니다.

## 설치 및 테스트

```bash
npm test
```

## 릴리스 노트

### v1.0.0 — 이메일 검증·추출 모듈과 로그인 검증을 포함한 첫 공개 릴리스

#### ✨ 기능

- **RFC 5322 이메일 검증** (`validator.js`)
  - `isValidEmail(email)` — RFC 5322 정규식 + RFC 3696 길이 제한(로컬 파트 64자, 전체 254자)
  - IP 옥텟 버그가 수정된 정규식 패턴 적용
- **이메일 추출·필터링** (`email.js`)
  - `extractEmails(users)` — 사용자 배열에서 `email` 필드 추출
  - `getValidEmails(users)` — 유효한 이메일만 필터링
  - `uniqueValidEmails(users)` — 유효 이메일 중복 제거
  - `isValidEmail` re-export (하위 호환)
- **로그인 이메일 검증** (`auth.js`)
  - `login(email, password)` — 로그인 시 이메일 형식 검증, 실패 시 한국어 오류 메시지 반환
- **ES Module** — `import`/`export` 기반 모듈 구조
- **테스트** — Node.js 내장 테스트 러너로 `email.js` 단위 테스트 (`npm test`)

#### 🧹 기타

- `docs/validator.md` — `validator.js` 스펙·연동 규칙 문서화
- 진입점 `src/index.js`에서 `getValidEmails` export
