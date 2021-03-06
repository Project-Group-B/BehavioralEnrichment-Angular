# BehavioralEnrichmentAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Documentation

Documentation was generated with Compodoc (https://compodoc.app) version 1.1.9. Navigate to https://project-group-b.github.io/BehavioralEnrichment-Angular/ to view the documentation pages.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment

1) Use '$git clone __your_github_repo_url'

2) $cd _new_directory_created_by_git_clone

3) $npm install

4) $npm install -g @angular/cli

5) $npm install --save-dev --unsafe-perm node-sass (sass module needs fixed every time)

6) Follow prompts to conduct an npm audit

7) $ng build

8) $cp ~/BehavioralEnrichment-Angular/dist /var/www/html (copies to nginx, install directions
here: https://arjunphp.com/deploy-angular-app-production-nginx/)

9) Edit /etc/nginx/ so it contains the files in the Nginx Config Files on the PGB-Java Repository.

10) Ensure 'baseUrl' in "global.ts" matches the front facing deployment address, and is using port 8080, as below:
`readonly baseUrl = 'http://ec2-3-84-52-67.compute-1.amazonaws.com:8080';`

