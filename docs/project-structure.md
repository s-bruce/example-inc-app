# Project Structure

The basic structure of the project looks like this:

```
[docs]
[src]
    ├── [app]
        ├── App.tsx
        ├── Router.tsx
        ├── config.ts
        └── [routes]
            ├── Example.tsx
    ├── [assets]
        └── example.png
    ├── [components]
        ├── [example-component]
            ├── ExampleComponent.test.tsx
            └── ExampleComponent.tsx
            └── types.ts
    ├── [features]
        └── [example-feature]
            ├── ExampleFeature.tsx
            ├── exampleFeatureSlice.ts
            └── [components]
                └── [example-subcomponent]
                    ├── ExampleSubcomponent.test.ts
                    ├── ExampleSubcomponent.ts
                    ├── types.ts
    ├── [hooks]
    ├── [store]
        ├── config.ts
        ├── index.ts
        ├── rootReducer.ts
    ├── [styles]
        └── theme.ts
    ├── [types]
        └── api.ts
    ├── [utils]
    ├── main.tsx
[tests]
    ├── [end-to-end]
    ├── [integration]
```

### Details

-   **Top-Level Directories**:
    -   `[docs]`: Documentation for the application.
    -   `[src]`: Source directory containing the application code.
    -   `[tests]`: Integration and end-to-end tests for the application.
-   **Subdirectories and Files for `[src]`**:
    -   `[app]`: Main application files and configuration.
        -   `App.tsx`: Root component of the application.
        -   `Router.tsx`: Router component where routes are defined.
        -   `config.ts`: Application configuration.
        -   `[routes]`: Directory containing route components. (Could alternatively be named `[pages]`)
            -   `Example.tsx`: Example route component.
    -   `[assets]`: Static assets for the application, such as images.
    -   `[components]`: Shared components for the application.
        -   `[example-component]`: Example component. (If there is only one file for the component, a folder is not necessary. Similarly, additional files and subfolders may be added as needed. For example, a hooks folder.)
            -   `ExampleComponent.test.tsx`: Unit tests for example component.
            -   `ExampleComponent.tsx`: Example component.
            -   `types.ts`: Types specific to example component. (Only necessary if there are multiple types. Otherwise types can go in component file.)
    -   `[features]`: Feature-specific components and logic.
        -   `[example-feature]`: Example feature.
            -   `ExampleFeature.tsx`: Example feature main component.
            -   `exampleFeatureSlice.ts`: Example feature slice. (A "slice" is a collection of Redux reducer logic and actions for a single feature in the app.)
            -   `[components]`: Subcomponents for example feature.
                -   `[example-subcomponent]`: Example subcomponent for example feature. (If there is only one file for the component, a folder is not necessary.)
                    -   `ExampleSubcomponent.test.ts`: Unit tests for example subcomponent.
                    -   `ExampleSubcomponent.tsx`: Example subcomponent component.
                    -   `types.ts`: Types specific to example subcomponent. (Only necessary if there are multiple types. Otherwise types can go in component file.)
    -   `[hooks]`: Shared hooks for the application.
    -   `[store]`: Redux store configuration.
        -   `config.ts`: Store configuration.
        -   `index.ts`: Store entry point.
        -   `rootReducer.ts`: Root reducer. (This combines the slice reducers created in the feature folders.)
    -   `[styles]`: Styling and theming for the application.
        -   `theme.ts`: Custom theme configuration.
    -   `[types]`: Shared type definitions for the application.
        -   `api.ts`: API-related types.
    -   `[utils]`: Utility functions for the application.
    -   `main.tsx`: Entry point of the application.
