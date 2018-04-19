STB SDK localization
====================

[![build status](https://img.shields.io/travis/cjssdk/gettext.svg?style=flat-square)](https://travis-ci.org/cjssdk/gettext)
[![npm version](https://img.shields.io/npm/v/cjs-gettext.svg?style=flat-square)](https://www.npmjs.com/package/cjs-gettext)
[![dependencies status](https://img.shields.io/david/cjssdk/gettext.svg?style=flat-square)](https://david-dm.org/cjssdk/gettext)
[![devDependencies status](https://img.shields.io/david/dev/cjssdk/gettext.svg?style=flat-square)](https://david-dm.org/cjssdk/gettext?type=dev)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/cjssdk)
[![RunKit](https://img.shields.io/badge/RunKit-try-yellow.svg?style=flat-square)](https://npm.runkit.com/cjs-gettext)


This localization module is an instance of [Emitter](https://github.com/cjssdk/emitter) module.
Contains localization messages data used by other modules and provides methods to requests these messages.


## Installation ##

```bash
npm install cjs-gettext
```


## Usage ##

Example `data` format:

```json
{
    "meta": {
        "charset": "utf-8",
        "project": "downloads",
        "language": "ru",
        "plural": "(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)"
    },
    "data": {
        "": {
            "some text": "некоторый текст",
            "Close": "Закрыть",
            "Error": "Ошибка",
            "File name:": "Имя файла:",
        },
        "some context": {
            "some text": "Лирика",
            "Close": "Выйти",
            "Error": "Недопустимое действие",
        }

    }
}
```


Add the constructor to the scope and create an instance with some data:

```js
var Gettext = require('cjs-gettext'),
    gettext = new Gettext(data);
```

Then it's possible to make direct calls to make simple replacement:

```js
console.log(gettext.gettext('Close'));
```

Fetch a particular translation of the textual message:

```js
console.log(gettext.pgettext('some context', 'some text'));
```

Native language translation of a textual message whose grammatical form depends on a number:

```js
console.log(gettext.ngettext('{0} cat', '{0} cats', 1));
```


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problems or suggestions please open an [issue](https://github.com/cjssdk/gettext/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`cjs-gettext` is released under the [MIT License](license.md).
