📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Quick order Component

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

## Description

The Quick order component allows users to add products to their cart by entering a list of product SKUs and quantities.

![](https://i.imgur.com/Hp82H0S.gif)

## Configuration 

1. Add the Quick Order Component to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "{vendor}.quick-order": "0.x"
  }
 ```
 
 2. install node modules, go to `react` folder and run `yarn`
 
3. Add the `quick-order` block to your store-theme, for example:
```json
  {
    "flex-layout.col#quick__order--container": {
    "title": "quick order container",
    "children": [
      "flex-layout.col#quick__order--title",
      "quick-order"
    ],
    "props": {
      "blockClass": "search__by--department--col",
      "width": "100%"
    }
  },
  }
   ```
|  Block name     | Description                                     |
| -------------- | ----------------------------------------------- |
| `quick-order` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  This is the top-level block that must be declared in a `store-theme` block to render quick order block.   |

## Customization

No CSS Handles are available yet for the app customization.

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Heric Olier

---

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
