# upower

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

It is simple React counter.

[**Live Demo**](https://penguenumut.github.io/upower/)

## Installation:

```bash
npm install upower --save-dev
```

or

```bash
yarn add -D upower
```

## Usage :

Add `MyCounter` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter } from 'upower'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <div>
            <h2>Default counter</h2>
            <MyCounter />
        </div>
        <hr />
        <div>
            <h2>Counter with predefined value</h2>
            <MyCounter value={5} />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/upower
[npm-image]: https://img.shields.io/npm/v/upower
[github-license]: https://img.shields.io/github/license/penguenumut/upower
[github-license-url]: https://github.com/penguenumut/upower/blob/master/LICENSE
[github-build]: https://github.com/penguenumut/upower/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/penguenumut/upower/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/upower