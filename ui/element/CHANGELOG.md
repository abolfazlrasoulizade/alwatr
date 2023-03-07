# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.30.0](https://github.com/AliMD/alwatr/compare/v0.29.0...v0.30.0) (2023-03-06)

### Bug Fixes

- **element/router-mixin:** prevent to duplicate first render ([453403e](https://github.com/AliMD/alwatr/commit/453403e8d42902ff2fe5391513dbecb8cc8a9948))
- **element:** null able mapIterable items ([7bb7f01](https://github.com/AliMD/alwatr/commit/7bb7f01a5381389a9264005927e460725e4db842))
- **element:** router mixin error ([c890b69](https://github.com/AliMD/alwatr/commit/c890b69feb6f7ea68d1a565bf9fadb55a55da90e))
- **element:** state machine tender names ([c9b806a](https://github.com/AliMD/alwatr/commit/c9b806a983f38f7c438f709b8929f23d9c8164fb))
- **router:** add \_routeContextUpdated to interface ([72865b8](https://github.com/AliMD/alwatr/commit/72865b808db4c2267dac07347e26dc8914f7c3f0))

### Features

- **element/fsm:** add render_unresolved, render_resolving ([5b8674c](https://github.com/AliMD/alwatr/commit/5b8674cd15558280bf2ad3d39bcd2ab89ab72508))
- **element/state-machine-mixin:** add stateUpdated method ([d599282](https://github.com/AliMD/alwatr/commit/d599282c4056cafa3e68817e4697c11721ccf09b))
- **element/StateMachineMixin:** reflect state to host attrib ([b054b50](https://github.com/AliMD/alwatr/commit/b054b5052b8ce452470e80838cdd49c26fdc533b))
- **element/toggle:** selected property ([5d6c0a9](https://github.com/AliMD/alwatr/commit/5d6c0a9e08abe933932943c842a0d6766a311076))
- **element:** add live directive ([4a95b0f](https://github.com/AliMD/alwatr/commit/4a95b0fef0e3c3fdc3a79396e7c8f749d0e380f3))
- **element:** mapIterable, mapObject directives ([8958655](https://github.com/AliMD/alwatr/commit/89586552a9294b167462d025080e1b93c9088845))
- **element:** router mixin ([5e80f82](https://github.com/AliMD/alwatr/commit/5e80f82882e930675e15ecc0448e7451708a36d5))
- **element:** StateMachineMixin ([b395b79](https://github.com/AliMD/alwatr/commit/b395b795e4d115fd74632e25a4373db2c36fdad0))
- **element:** toggle mixin ([5140b22](https://github.com/AliMD/alwatr/commit/5140b226f5b8330f2e930f3e125d73a0c6791b90))
- **element:** UnresolvedMixin ([4a1c89a](https://github.com/AliMD/alwatr/commit/4a1c89aa41d7479b5b9f8e33252a11e5d372206c))

### Performance Improvements

- **element/StateMachineMixin:** limit scheduleUpdate to animation frame ([e23317e](https://github.com/AliMD/alwatr/commit/e23317e2bc5efeeb6f0198b3f49f12d682bcc8e1))
- **element:** clear signal listeners memory cost ([fe20757](https://github.com/AliMD/alwatr/commit/fe2075730436becf8642dcabd44116b40d33a4c7))

# [0.29.0](https://github.com/AliMD/alwatr/compare/v0.28.0...v0.29.0) (2023-02-10)

### Bug Fixes

- compatible with i18n ([89c4a90](https://github.com/AliMD/alwatr/commit/89c4a90444db12930b1d0211942c9b84185cbb32))
- **element:** compatible with new signal api ([020a083](https://github.com/AliMD/alwatr/commit/020a0837de496d8c4943fe5cdb659fee3dc0e051))
- **element:** import issue ([87b3e12](https://github.com/AliMD/alwatr/commit/87b3e12a289fc477b072c1321aca160db46dc69c))
- **element:** import type ([b125318](https://github.com/AliMD/alwatr/commit/b1253186036df3dcafca06f1bc4aca613c220f51))
- **element:** logger mixin issue ([db5d96d](https://github.com/AliMD/alwatr/commit/db5d96d3a3b3cf5e07c60474e69ebf75a77978c4))

### Features

- **element/direction:** compute mode and improve performance ([9d3b2ed](https://github.com/AliMD/alwatr/commit/9d3b2ed4443585e0b2eb497dd24501d8753983c5))
- **element:** ali ([25422c4](https://github.com/AliMD/alwatr/commit/25422c4dee951be8c8bd37ec709f1492946731ad))
- **element:** rewrite all mixins with new api ([baa1e5e](https://github.com/AliMD/alwatr/commit/baa1e5e546654658f473622b148ceb7e7e8e3da6))
- **pwa-helper:** new package ([a77c049](https://github.com/AliMD/alwatr/commit/a77c0491a6337cb48b42a667a0ee67c7f9f150fa))
- review ([53726b7](https://github.com/AliMD/alwatr/commit/53726b77274be429c87b2fd322fe2d939b048c77))
- **surface-element:** active-outline ([3261091](https://github.com/AliMD/alwatr/commit/3261091bdfbb3dd777aa2676f1bf0ce5d3aa7192))

# [0.28.0](https://github.com/AliMD/alwatr/compare/v0.27.0...v0.28.0) (2023-01-20)

### Bug Fixes

- **element/sw-helper:** reload on new update ([b07db77](https://github.com/AliMD/alwatr/commit/b07db77bf8a9c28235cdfe9f1d0aff972feda73c))
- **pwa-element:** prevent to default import css for backward compatibility ([89591a2](https://github.com/AliMD/alwatr/commit/89591a28d1d829512200c8a0a026cbb7558e198d))
- **pwa:** debug mode scripts ([681fdc2](https://github.com/AliMD/alwatr/commit/681fdc24897b7bd4f677f26fd45ea048d5f9a675))
- version in package.json ([403baa5](https://github.com/AliMD/alwatr/commit/403baa53159db2a0fff5b3651769b85e66b13191))

### Features

- **demo-pwa:** register service worker ([ad8e2d8](https://github.com/AliMD/alwatr/commit/ad8e2d8073327d289bd069069847e98b12dba302))
- **element:** separate \_initLocale, \_initRouter and \_routeChanged ([a0af8ec](https://github.com/AliMD/alwatr/commit/a0af8ecfb6f5da24898da629de822cfe54ea5586))
- **element:** service worker register ([c98b1f6](https://github.com/AliMD/alwatr/commit/c98b1f601b7a277d2bf713637f7475b037961f3a))
- **element:** service-worker helper ([6ec8b59](https://github.com/AliMD/alwatr/commit/6ec8b59a617d514315926dac7c3e3318867782d2))
- **icon-box:** new style and layout ([2003e33](https://github.com/AliMD/alwatr/commit/2003e33e5095358e24fd4e07b3fc92a3b8a9d7d7))
- **pwa:** unresolved state for show skeleton or loading ([8c4e834](https://github.com/AliMD/alwatr/commit/8c4e834b1415df14d6c76ef4d2040c60dc638b9e))
- **type:** define constructor type ([39c5ab7](https://github.com/AliMD/alwatr/commit/39c5ab74f0a1471d5e20beff89f6885265907633))
- **ui/element:** export `unsafeHTML` ([2cb6d49](https://github.com/AliMD/alwatr/commit/2cb6d49aca60dbbda45990bf13e0b9622725a0ef))
- **ui:** new AlwatrSurfaceElement with elevation/tint/state simulation ([0877f4f](https://github.com/AliMD/alwatr/commit/0877f4f3dd780321f3c7498cffde66653a24de43))

# [0.27.0](https://github.com/AliMD/alwatr/compare/v0.26.0...v0.27.0) (2022-12-29)

### Bug Fixes

- **element:** build issues ([0bfb016](https://github.com/AliMD/alwatr/commit/0bfb0167a82c1dfbd04884a049b76cf7f6033f86))
- **element:** signal mixing safety check ([2f3c871](https://github.com/AliMD/alwatr/commit/2f3c87141e162e8f600246bf863fcfe93f41f53b))
- **ui/element:** listener list type ([e089d01](https://github.com/AliMD/alwatr/commit/e089d018ed29eae8f0ba92767b12d37f5ad1729c))

### Features

- **element/root:** host box-sizing ([0c4ce83](https://github.com/AliMD/alwatr/commit/0c4ce83c5f777aecb2317c832817854ff4cadcf9))
- **element:** AlwatrRootElement ([3b4e59f](https://github.com/AliMD/alwatr/commit/3b4e59f840f600ebedf07c27a9e4cf4c5f1253c0))
- **element:** DirectionMixin ([d2670dd](https://github.com/AliMD/alwatr/commit/d2670dd247f93759e3b6457b339a066cc2433269))
- **element:** export from lit ([21f15d8](https://github.com/AliMD/alwatr/commit/21f15d86319a40fab02d86f24a1451c056f36a7c))
- **element:** LocalizeMixin ([94f0f7f](https://github.com/AliMD/alwatr/commit/94f0f7f832ff885d7176884f243c57a2a03c7bdb))
- **element:** use logger ([95708a7](https://github.com/AliMD/alwatr/commit/95708a7b8a8418ffe0cb9a98c6d5ed50ff6308e1))
- **page-chat:** new demo ([451d63f](https://github.com/AliMD/alwatr/commit/451d63fc0b904bb780c898c2909b1d7a116b353f))
- **ui/element/i18n:** localization mixin ([999e1b1](https://github.com/AliMD/alwatr/commit/999e1b11f0af55704fdd5859398908aeedbb833c))
- **ui/element:** seprate mixins ([a305c5d](https://github.com/AliMD/alwatr/commit/a305c5d0e027b4c19fb1a22e4dc75797d205655a))

# [0.26.0](https://github.com/AliMD/alwatr/compare/v0.25.0...v0.26.0) (2022-12-22)

### Bug Fixes

- **ui/\*:** package path in refrences ([841d86d](https://github.com/AliMD/alwatr/commit/841d86dc2555fdc86a950b490ea2eb9fffe4df2d))

# [0.25.0](https://github.com/AliMD/alwatr/compare/v0.24.1...v0.25.0) (2022-12-07)

**Note:** Version bump only for package @alwatr/element

## [0.24.1](https://github.com/AliMD/alwatr/compare/v0.24.0...v0.24.1) (2022-12-01)

**Note:** Version bump only for package @alwatr/element

# [0.24.0](https://github.com/AliMD/alwatr/compare/v0.23.0...v0.24.0) (2022-11-28)

### Bug Fixes

- use ~ for package version ([4e027ff](https://github.com/AliMD/alwatr/commit/4e027ff63875e03b088ebcdc1bdf2495f4494eec))

# [0.23.0](https://github.com/AliMD/alwatr/compare/v0.22.1...v0.23.0) (2022-11-23)

**Note:** Version bump only for package @alwatr/element

# [0.22.0](https://github.com/AliMD/alwatr/compare/v0.21.0...v0.22.0) (2022-11-20)

**Note:** Version bump only for package @alwatr/element

# [0.21.0](https://github.com/AliMD/alwatr/compare/v0.20.0...v0.21.0) (2022-11-13)

**Note:** Version bump only for package @alwatr/element

# [0.20.0](https://github.com/AliMD/alwatr/compare/v0.19.0...v0.20.0) (2022-11-05)

**Note:** Version bump only for package @alwatr/element

# [0.19.0](https://github.com/AliMD/alwatr/compare/v0.18.0...v0.19.0) (2022-11-01)

### Bug Fixes

- Import error in webpack ([1a52f67](https://github.com/AliMD/alwatr/commit/1a52f67ff2788c51abd13126f34353c26aa669c3))

# [0.18.0](https://github.com/AliMD/alwatr/compare/v0.17.0...v0.18.0) (2022-10-22)

**Note:** Version bump only for package @alwatr/element

# [0.17.0](https://github.com/AliMD/alwatr/compare/v0.16.1...v0.17.0) (2022-10-21)

**Note:** Version bump only for package @alwatr/element

# [0.16.0](https://github.com/AliMD/alwatr/compare/v0.15.0...v0.16.0) (2022-09-08)

**Note:** Version bump only for package @alwatr/element

# [0.15.0](https://github.com/AliMD/alwatr/compare/v0.14.0...v0.15.0) (2022-09-01)

**Note:** Version bump only for package @alwatr/element

# [0.14.0](https://github.com/AliMD/alwatr/compare/v0.13.0...v0.14.0) (2022-08-19)

**Note:** Version bump only for package @alwatr/element

# [0.13.0](https://github.com/AliMD/alwatr/compare/v0.12.0...v0.13.0) (2022-08-06)

**Note:** Version bump only for package @alwatr/element

# [0.12.0](https://github.com/AliMD/alwatr/compare/v0.11.0...v0.12.0) (2022-07-22)

**Note:** Version bump only for package @alwatr/element

# [0.11.0](https://github.com/AliMD/alwatr/compare/v0.10.1...v0.11.0) (2022-04-16)

### Features

- **element:** init new package ([a9a65d9](https://github.com/AliMD/alwatr/commit/a9a65d94beb86583cb7e5e2b47b8f235994310cb))
- **element:** LoggerMixin ([e5825e1](https://github.com/AliMD/alwatr/commit/e5825e160324cde596dbf3982bf080d54ba9955f))
