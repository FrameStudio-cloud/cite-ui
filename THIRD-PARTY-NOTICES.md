# Third-party notices

cite-ui itself is licensed under the MIT License — see [LICENSE](./LICENSE).

The package contains no runtime dependencies, so nothing third-party is
redistributed in `dist/`. The notices below cover the code and assets in this
repository that came from somewhere else.

## Feather Icons

The SVG path data in `src/components/Icon/index.jsx` is derived from
[Feather](https://feathericons.com) (v4.x) by Cole Bemis.

```
The MIT License (MIT)

Copyright (c) 2013-present Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

A handful of glyphs were added or adjusted for this library
(`home`, `bell`, `compass`, `layers` and a few sizing tweaks); those changes are
covered by the MIT licence above.

## Fonts

Fonts are loaded by the documentation site only. They are **not** shipped in the
npm package and are **not** part of `dist/`.

| Family | Used for | Licence |
|---|---|---|
| [General Sans](https://www.fontshare.com/fonts/general-sans) | UI text | Free for personal and commercial use under the [Fontshare licence](https://www.fontshare.com/licenses/itf-ffl) (Indian Type Foundry) |
| [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) | Display headings | SIL Open Font License 1.1 |
| [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) | Editorial accents | SIL Open Font License 1.1 |
| [Space Mono](https://fonts.google.com/specimen/Space+Mono) | Labels and code | SIL Open Font License 1.1 |

General Sans is served by Fontshare. The Google Fonts families are served by
Google Fonts. Neither service is self-hosted here, so the font binaries and
their licence files are not redistributed with this repository.

## Development dependencies

Build and docs tooling (Vite, React, React Router, Tailwind CSS, PostCSS,
Autoprefixer) is listed in `package.json` and installed from npm under each
project's own licence. None of it is bundled for consumers.

## Reporting an attribution gap

If you believe something in this repository is used without the credit it
requires, open an issue at
<https://github.com/FrameStudio-cloud/cite-ui/issues> and it will be corrected.
