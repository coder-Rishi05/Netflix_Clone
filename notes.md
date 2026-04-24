### Netflix Clone

```

This project includes -

- Authentication
- Protected route
- Handling forms
- GPT API
- React Routing

```

## Features

- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
  - Browse (after authentication)
    Header ✅
  - Main Movie
  - Tailer in Background
- Title & Description
  - MovieSuggestions
  - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

### changing on click page.

```
trying to render the diffrent page on same page.
```

### Setting up forms using formik

```
Used for handling the forms in react
```

npm i formik

---

also for ui daisy ui

and animations
framer
gsap
useref.

### Creating validation for form in utility

- creating a new file in utils
  validation.js
- using regex

`validation.js`
```js
export const checkValidData = (email, password) => {
  if (!email || !password) {
    return "Email and password are must to provide";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  if (!isEmailValid) return "Email Id not valid";
  if (!isPasswordValid) return "password Id not valid";

  return null;
};
```

### using refrence of input box
