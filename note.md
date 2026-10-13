# Angular Notes

## Angular CLI commands

1. Install Angular CLI

    ```bash
    npm install -g @angular/cli
    ```

2. Create new Angular project

    ```bash
    ng new <project-name>
    ```

3. Running new project locally

    ```bash
    cd my-first-angular-app
    ```

    ```bash
    npm start
    ```

    Or,

    ```bash
    ng serve
    ```

4. Generate a new component

    ```bash
    ng generate component component-name
    ```

    Shorthand version:

    ```bash
    ng g c component-name
    ```

    Skip the test file (.spec.ts):

    ```bash
    ng g c component-name --skip-tests
    ```

5. Generate the Directive

    ```bash
    ng g directive directives/{directive-name}
    ```

    Without '.spec.ts' file i.e. skip test file and only generate the single '.ts' file.

    ```bash
    ng g directive directives/{directive-name} --skip-tests
    ```

---

## Difference between 'With brackets' and 'No brackets'

1. Directives (With Brackets: '[appHighlight]')
    - Selector: selector: '[appHighlight]'
    - In HTML:

        ```bash
        <p appHighlight>This is a normal paragraph enhanced with the directive.</p>
        ```

2. Components (No Brackets: 'appUserCard')
    - Selector:
        selector: 'app-user-card'
    - In HTML:

        ```bash
        <app-user-card></app-user-card>
        ```

---
