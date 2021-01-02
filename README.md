# angular-x2js-wrapper

[![Version](https://img.shields.io/npm/v/angular-x2js-wrapper)](https://www.npmjs.com/package/angular-x2js-wrapper)
![build](https://github.com/FrequentlyMissedDeadlines/angular-x2js-wrapper/workflows/build/badge.svg)
![release](https://github.com/FrequentlyMissedDeadlines/angular-x2js-wrapper/workflows/release/badge.svg)
[![Downloads (total)](https://img.shields.io/npm/dt/angular-x2js-wrapper)](https://www.npmjs.com/package/angular-x2js-wrapper)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![](https://nodei.co/npm/angular-x2js-wrapper.png?downloads=true&stars=true)](https://www.npmjs.com/package/angular-x2js-wrapper)


I made this repo because I had troubles with X2JS in a webpack/angularjs/Meteor based application.
If you also face this kind of issues using [angular-x2js (seems no more maintained)](https://www.npmjs.com/package/angular-x2js):

```
ReferenceError: X2JS is not defined
```

**The solution is to replace the dependency on `angular-x2js` by `angular-x2js-wrapper` in your `package.json` file.**

And update Angular dependency injection accordingly:
```javascript
angular.module('your_module_name', ['fmd.x2js'])
```

Actually `angular-x2js` works only if `X2JS` variable is defined directly in `window`.

On the other hand, `angular-x2js-wrapper` doesn't require you to manually handle external dependencies, it's working out of the box. Enjoy it! 🎉
