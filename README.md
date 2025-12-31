# 🧩 Astro I18next 🧩

**i18next for Astro**

**Show your ❤️ and support by starring this project and following the author, [Guten Ye](https://github.com/gutenye)!**

[![Stars](https://img.shields.io/github/stars/gutenye/astro-i18next?style=social)](https://github.com/gutenye/astro-i18next)
[![NPM Version](https://img.shields.io/npm/v/@gutenye/astro-i18next)](https://www.npmjs.com/package/@gutenye/astro-i18next)
[![License](https://img.shields.io/github/license/gutenye/astro-i18next?color=blue)](https://github.com/gutenye/astro-i18next/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue)](https://github.com/gutenye/astro-i18next#-contribute)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

## 🌟 Features

- **Fast to load**: Emit zero JS, translate on buildtime

## 📖 Getting Started

### 1. Install the package

```sh
npx astro add @gutenye/astro-i18next
```

### 2. Create translation files

Create your locale files in `src/locales/`:

**`src/locales/en.json`**

```json
{
  "greeting": "Hello, World!"
}
```

**`src/locales/fr.json`**

```json
{
  "greeting": "Bonjour, le Monde!"
}
```

**`src/locales/index.ts`**

```ts
import en from "./en.json";
import fr from "./fr.json";

export const defaultLocale = "en";

export const locales = { en, fr };
```

### 3. Configure Astro

**`astro.config.mjs`**

```ts
import i18next from '@gutenye/astro-i18next'
import { defaultLocale, locales } from ''./src/locales'

export default defineConfig({
  integrations: [i18next({ defaultLocale, locales })],
});
```

### 4. Create localized pages

Create pages under `src/pages/[...locale]/` to enable locale routing:

**`src/pages/[...locale]/index.astro`**

```astro
---
import { t } from 'i18next'
export { getStaticPaths } from '@gutenye/astro-i18next'
---
<div>t('greeting')</div>
```

### 5. Run or build your site

```sh
npm run dev
npm run build
```

Visit your localized pages:

- `/` → English (default locale)
- `/fr` → French

## 🤝 Contributing

We love contributions! Whether you're fixing bugs, adding features, or improving documentation, your involvement makes this project better.

**How to Contribute:**

1. **Fork** the Repository
2. **Make** your changes (bug fixes, features, docs)
3. **Test** your changes thoroughly
4. **Open** a Pull Request on GitHub

**Looking for ideas?** Check out our [issues](https://github.com/gutenye/astro-i18next/issues) for bugs and feature requests!

---

Thank you for using Astro I18next! If you found it helpful, please ⭐️ **star the project** ⭐ on GitHub.

**Need help?** Check our [documentation](#-documentation) or [report an issue](https://github.com/gutenye/astro-i18next/issues) if you encounter any problems.

**Special Thanks to All Contributors:**

[![Contributors](https://contrib.rocks/image?repo=gutenye/astro-i18next)](https://github.com/gutenye/astro-i18next/graphs/contributors)

---

<p align="center">
  <strong><a href="#readme">⬆ Back to top ⬆</a></strong><br><br>
  Made with ❤️ by <a href="https://github.com/gutenye">Guten Ye</a>
</p>
