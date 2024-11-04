# Frontend Engineering Take Home - Monte Carlo Data

This is a React and TypeScript application for Example, Inc. It provides a strong foundation designed to support the scalable addition of numerous features in the future.

## Requirements

✅ **Use React and TypeScript**<br>
Done and done :)

✅ **Internal documentation**

-   The `docs` folder located in the project root contains documentation for orienting new engineers.
-   This `README` contains instructions for installing and running the application.

✅ **Working example of loading, editing, and updating data from the API**<br>
You can find an example in the Manage Users feature.

✅ **Include a modern CSS framework**<br>
I chose to use Mantine. This is my first time working with the library, but it's similar to other libraries I've used and the docs are super helpful.

✅ **Bonus: Include a navigation bar to demonstrate routing**<br>
I added a nav bar at the top with two routes: Dashboard and Users. The Dashboard route is purely to demonstrate routing. You'll find all the good stuff within the Users route.

✅ **State management**<br>
The application uses Redux for state management.

✅ **Testing**<br>
You'll find a Test Plan Overview in the `docs` folder that outlines a testing strategy with examples.

## Next steps

There are a few more things I would have liked to accomplish as part of this assignment if I had more time.

1. **Improve testing** - While the Test Plan Overview gives recommendations and examples, I originally planned to have a working test environment for running tests. However, I somehow broke my testing setup and configuration and didn't have time to debug and resolve. Next steps would be to resolve those issues and then implement some of the tests I described in the Test Plan Overview.

2. **More documentation** - Personally, I find TypeScript code to serve as a good source of documentation within the codebase. However, I also like JSDoc and if I had more time I would have added documentation throughout the code using JSDoc. Next steps would be to do this :)

3. **Optimize rendering of a few components** - I added comments about this in `EditUserButton.tsx` and `DeleteUserButton.tsx`, but currently there is unnecessary rendering of child components within those two files. The problem would be easy to solve by refactoring where we add the logic/condition for rendering the child components. I just didn't have time.
