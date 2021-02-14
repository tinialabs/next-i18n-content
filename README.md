# next-i18n-content [![npm version](https://badgen.net/npm/v/next-i18n-content)](https://www.npmjs.com/package/next-i18n-content) [![license](https://badgen.net/github/license/tinialabs/next-i18n-content)](https://github.com/tinialabs/next-i18n-content/blob/master/LICENSE) [![downloads](https://badgen.net/npm/dt/next-i18n-content)](https://www.npmjs.com/package/next-i18n-content)

Features:
- **Dynamic languages** Load locales from language files in content/locales folder

## Table of contents

- [Installation](#installation)
- [Options](#options)
- [Usage](#usage)
- [License](#license)

## Installation

```
npm install next-i18n-content next-compose-plugins
```

Add the plugin with [`next-compose-plugins`](https://github.com/cyrilwanner/next-compose-plugins) to your Next.js configuration:

```javascript
// next.config.js
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  require("next-i18n-content")
  // your other plugins here
]);
```

## Usage

Place locale files in your content/local folders.  Include optional translations if using the Novela or equivalent theme.

``` yaml
# en-US.yml
---
language:
  default: true
  path: en
  locale: en-us
  siteLanguage: en
  ogLang: en_US
translations:
  site: 
    title: Connect with KARLA
    description: Telehealth support face to face with a counselor + digital support through our application, Karla.
    hero:
      title: Telehealth support face to face with a counselor + digital support through our application, Karla. 
      maxWidth: 652
  Articles:
    Section:
      100: About the program
      500: Notes about resilience
    Show articles in Tile grid: Show articles in Tile grid
    Show articles in Row grid: Show articles in Row grid
  Paginator:
    Next: Next
    of: of
    Prev: Prev
  Slipway:
    tag: Tag
    tags: Tags
    note: Note
    notes: Notes
    was: was
    were: were
    recent: Recent
    allTags: All tags
    entries: entries
    min read: min read
    Feature: Feature
    by: by
    in: in
    More notes from: More notes from
    Notes authored by: Notes authored by
    Choose a specialist: Choose a specialist
    Request appointment: Request appointment

```

## License

Licensed under the [MIT](https://github.com/tinialabs/next-i18n-content/blob/master/LICENSE) license.

© Copyright Guy Barnard and Tinia Labs contributors