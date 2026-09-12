# Mangala Vihara International Buddhist Center

Official website for the Mangala Vihara International Buddhist Center in Anuradhapura, Sri Lanka.

- Live website: [https://mvibc.lk](https://mvibc.lk)
- Content editor: [Pages CMS](https://app.pagescms.org)
- Deployment history: [GitHub Actions](https://github.com/tranmt-chris/mvibc.lk/actions/workflows/deploy-pages.yml)

## How the website works

The repository contains the website's source files rather than a manually maintained `index.html`.

```text
PageCMS content or code changes
              ↓
        Pull request to main
              ↓
          Review and merge
              ↓
     GitHub Actions static build
              ↓
     dist/client/index.html
              ↓
          GitHub Pages
              ↓
        https://mvibc.lk
```

The build command generates a static website in `dist/client`. That generated directory is temporary and excluded from Git, so `index.html` will not appear in the repository. GitHub Actions uploads the generated files directly to GitHub Pages.

## Making content changes with PageCMS

Use this process for text, contact details, the logo, and images:

1. Open [Pages CMS](https://app.pagescms.org) and select this repository.
2. Use the branch selector to choose **`pagecms`**. Do not edit `main`.
3. Open **Centre details** to change the name, logo, address, telephone number, or tagline.
4. Open **Homepage** to change the homepage headings, introduction, about text, or vision.
5. Save the changes.
6. GitHub Actions automatically creates or updates a pull request named **Review PageCMS website changes**.
7. Open the repository's [Pull requests](https://github.com/tranmt-chris/mvibc.lk/pulls) page.
8. Review the **Files changed** tab and approve the pull request.
9. Merge the pull request into `main` when the content is ready to publish.
10. Wait about one minute for the deployment workflow, then refresh [mvibc.lk](https://mvibc.lk).

The `main` branch is protected. It requires a pull request and one approval, so PageCMS content cannot be published directly without review.

### Important PageCMS branch rule

Always confirm that PageCMS shows **`pagecms`** in its branch selector before editing. PageCMS saves to the branch currently selected in its interface.

## Where content and images are stored

| Website content | Repository location | PageCMS section |
| --- | --- | --- |
| Centre name, address, phone, tagline and logo | `src/data/site.json` | Centre details |
| Homepage headings, introduction, about text and vision | `src/data/home.json` | Homepage |
| Uploaded images | `public/images/` | Media or image selector |
| PageCMS field configuration | `.pages.yml` | Repository configuration |

The selected logo is also used as the website favicon. Browsers cache favicons heavily, so an updated icon may require closing and reopening the browser tab.

## Making design or code changes

Design and layout changes should also use a pull request:

1. Create a new branch from `main`.
2. Make and test the changes on that branch.
3. Push the branch to GitHub.
4. Open a pull request into `main`.
5. Review and approve it.
6. Merge it to publish the change.

Important source files:

- `app/page.tsx` — homepage structure and sections
- `app/globals.css` — colors, typography, layout and responsive styling
- `app/layout.tsx` — page metadata, social image and favicon
- `src/components/Header.tsx` — header, logo and navigation
- `src/components/Footer.tsx` — footer and contact information
- `next.config.ts` — static-export settings

## Deployment process

The workflow in `.github/workflows/deploy-pages.yml` runs automatically whenever a pull request is merged into `main`.

It performs these steps:

1. Installs the locked project dependencies.
2. Runs `pnpm run build:static`.
3. Confirms that `dist/client/index.html` exists.
4. Uploads `dist/client` as the GitHub Pages artifact.
5. Publishes the artifact to [https://mvibc.lk](https://mvibc.lk).
6. Creates a separate downloadable static package named `mvibc-cpanel-static` for cPanel hosting.

The PageCMS workflow in `.github/workflows/pagecms-pull-request.yml` watches the `pagecms` branch and opens a pull request into `main` when it detects new content commits.

## Running the website locally

Requirements: Node.js 22 or newer and pnpm 10.

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

To verify the static build:

```bash
DEPLOY_TARGET=github-pages pnpm run build:static
```

The generated site will be available in `dist/client`, including `dist/client/index.html`.

## If a change does not appear

1. Confirm that the PageCMS change was saved to `pagecms`.
2. Check that the automatic pull request was created.
3. Confirm that the pull request was approved and merged into `main`.
4. Check the [deployment workflow](https://github.com/tranmt-chris/mvibc.lk/actions/workflows/deploy-pages.yml) for a green success result.
5. Refresh the website without cache or reopen the browser tab.

Only commits merged into `main` are deployed to the live website.
