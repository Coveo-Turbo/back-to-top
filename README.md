# BackToTop

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

1. Install the component into your project.

```
npm i @coveops/back-to-top
```

2. Use the Component or extend it

Typescript:

```javascript
import { BackToTop, IBackToTopOptions } from '@coveops/back-to-top';
```

Javascript

```javascript
const BackToTop = require('@coveops/back-to-top').BackToTop;
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/back-to-top'
```

4. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/back-to-top@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

5. Include the component in your template as follows:

Place the component in your markup:

```html
<div class="CoveoBackToTop"></div>
```

## Options

The following options can be configured:

|       Option        | Required |  Type   |          Default           |                             Notes                         |
| ------------------- | -------- | ------- | -------------------------- | --------------------------------------------------------- |
| `titleCaption`      | No       | string  | `Back to Top`              | Specifies value for the element's `title` attribute.      |
| `textCaption`       | No       | string  | `Back to Top`              | Specifies the text value of the button.                   |
| `scrollBehavior`    | No       | string  | `auto`                     | Specifies the scroll behavior. Can be `auto` or `smooth`. |
| `shouldBeLocalized` | No       | boolean | `false`                    | Specifies whether to translate the button value.          |

## Extending

Extending the component can be done as follows:

```javascript
import { BackToTop, IBackToTopOptions } from "@coveops/back-to-top";

export interface IExtendedBackToTopOptions extends IBackToTopOptions {}

export class ExtendedBackToTop extends BackToTop {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`