<h1 align="center">
  <a href="https://react-book.netlify.com">
    reactbook
  </a>
</h1>

<img
  src="static/screens.jpg"
  style="display: block; margin: 0 auto;"
/>

<p align="center">
  <a href="https://travis-ci.org/luizclr/react-book">
    <img
      src="https://travis-ci.org/luizclr/react-book.svg?branch=master"
      alt="Build Status"/>
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"
      alt="code style: prettier"/>
  </a>
  <a href="https://app.netlify.com/sites/react-book/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/386f3b8d-5235-42c3-9f6c-1251b40af9b6/deploy-status"
      alt="Netlify Status"/>
  </a>
  <a href="https://coveralls.io/github/luizclr/react-book?branch=master">
    <img
      src="https://coveralls.io/repos/github/luizclr/react-book/badge.svg?branch=master"
      alt="Coverage Status"/>
  </a>
</p>

---

<h2 align="center">🚧 work in progress...</h2>

## Table of Contents

- [Requirements](#requirements)
- [Configs](#configs)
- [Running](#running)
  - [Local API](#local-api)
  - [Application](#application)
- [Coding style](#coding-style)
- [Testing](#testing)
- [Build](#build)
- [License](#license)

## Requirements

- nodejs >= 10.16.3
- yarn >= 1.9.0

## Configs

Copy the `db.example.json` file in `__fake-baskend__` folder and rename it to `db.json`.

## Running

```bash
# Install packages
yarn install
```

### Local API

```bash
yarn run fake-backend
```

Server will start on [localhost:3000](http://localhost:3000).

### Application

```bash
# Start server locally
yarn start
```

Application will be opened automatically on [localhost:8080](http://localhost:8080).

## Coding style

```bash
# Linter
yarn run lint
```

## Testing

```bash
# run teste
yarn run test
# test coverage
yarn run test:coverage
# watch changes
yarn run test:watch
```

## Build

```bash
# Build for production
yarn run buld
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
