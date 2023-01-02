# CustomInput

Input field that masks the last characters entered by the user.
Masks on blur and retains the original value on focus of the input field
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Usage

> __npm i custom-input-lib-jtp__

> **module.ts** - 
`imports: [
    CustomInputModule
  ]`
  
 > **component.html** - 
`<lib-customInput [limit]="4"></lib-customInput>`

##### Options

- limit: number - No: of characters to be masked from last

## Code scaffolding

Run `ng generate component component-name --project customInput` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project customInput`.
> Note: Don't forget to add `--project customInput` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build customInput` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build customInput`, go to the dist folder `cd dist/custom-input` and run `npm publish`.

## Running unit tests

Run `ng test customInput` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
