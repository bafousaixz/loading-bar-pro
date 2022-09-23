# loading-bar-pro

> Make easy loading bar

[![NPM](https://img.shields.io/npm/v/loading-bar-pro.svg)](https://www.npmjs.com/package/loading-bar-pro) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install
https://demo-loading-bar-pro-pu11.vercel.app/

## Install

```bash
npm install --save loading-bar-pro
```

## Usage

```tsx
import React, { Component } from 'react'

import LoadingBarComponent from 'loading-bar-pro'
import 'loading-bar-pro/dist/index.css'

class Example extends Component {
  render() {
    return <LoadingBarComponent time={1000} color="#E88E49" />
  }
}
```

## Document

| Option | Description     | Type           | 
| :---------- | :----------     | :--------------| 
| time    | time loading (ms) | number |
| color   | loading bar color | string | 
| width   | loading bar width | number | 
| height   | loading bar height | number | 
| borderRadius   | border radius loading bar | number | 
| borderColor   | border color (1px solid) | number | 
| updating...   | updating... | updating... | 

## License

MIT © [bafousaixz](https://github.com/bafousaixz)
