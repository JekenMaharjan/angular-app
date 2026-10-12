# Angular Notes

## Angular CLI commands

1. Generate the Directive

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
