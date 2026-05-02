# GirlfriendApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Deploying to GitHub Pages

The app is hosted at: https://rohit010796.github.io/girlfriend-app/

Every time you make changes and want to update the live site, run these commands:

```bash
ng build --base-href=/girlfriend-app/
cp docs/index.html docs/404.html
git add docs/
git commit -m "build: update GitHub Pages deployment"
git push origin main
```

GitHub Pages will automatically redeploy within a minute or two after the push.

**Why these steps:**
- `--base-href=/girlfriend-app/` — tells Angular the URL prefix so assets load correctly
- `cp docs/index.html docs/404.html` — makes Angular router work when navigating directly to a URL
- The build outputs to `docs/` (configured in `angular.json`) which is the folder GitHub Pages serves from

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
