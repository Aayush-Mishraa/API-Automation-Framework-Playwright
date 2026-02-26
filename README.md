# API Automation Framework (Playwright)

A small, focused Playwright setup for API testing with a mix of REST flows, schema validation, auth examples, and a few end-to-end API scenarios. I keep it simple: run the tests, get a clean HTML report, and iterate fast.

## What is inside

- Playwright Test runner for API and network validations
- Schema validation with Ajv
- JSONPath queries via jsonpath-plus
- Examples for auth, CRUD, and E2E API flows

## Project layout

```
.github/
playwright.config.ts
tests/
  apis/
    basicauth.spec.ts
    gorest.spec.ts
    gorest_crud.spec.ts
    gorest_e2e.spec.ts
    network_monitoring.spec.ts
    product_jsonpath.spec.ts
    schema_validation.spec.ts
    spotify_oauth2.spec.ts
  utils/
    APIutils.js
```

## Prerequisites

- Node.js 18+ (LTS recommended)
- Git

## Install

```bash
npm install
```

## Run tests

All tests:

```bash
npx playwright test
```

Single file:

```bash
npx playwright test tests/apis/schema_validation.spec.ts
```

Single project:

```bash
npx playwright test --project=chromium
```

## Report

Playwright produces an HTML report by default.

```bash
npx playwright show-report
```

## Notes

- Some specs may require API tokens or environment variables depending on the target service. Add them locally as needed.
- If you are running on Windows and see line-ending warnings, it is safe to continue or configure Git with a `.gitattributes` file.

## License

ISC
