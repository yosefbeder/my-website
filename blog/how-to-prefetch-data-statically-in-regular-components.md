---
title: How to prefetch data statically in regular components?
description: Prefetching data in a non-page component is not enjoyable to do, so I decided to share with you a better way of doing it with a node script!
date: 2021-10-21
---

## Motivation

When I first created this blog I panicked when I faced prefetching data in a non-page component, I really wanted to sync the data in the sidebar with my github account, but this won't be effective.

I mean, I would have to fetch the data in each page!

I didn't want to do that, so I used client-side fetching.

This led to that the sidebar content is loaded after the real data and the layout is broken for the first 500ms or so.

I found that I can use [prefetching with client-side rendering](https://swr.vercel.app/docs/prefetching), but I tried it and it didn't solve the problem.

After a while, I decided to just fetch it in every page and pass it to the sidebar component from `_app`.

This worked fine, although I didn't like it.

Why should I fetch the data in each page and pass can't I just fetch it once.

But, When I decided to use MDX in the site I faced a small issue, I have to rewrite the logic of `getStaticProps` for each blog, and I didn't want to do so.

That didn't look good to me, so I had to find a solution.

## Solution

The idea of the solution is very simple, you create a node script that does the following:

1. Fetches the data from github.
2. Writes this data to a JSON file.
3. Using [json-loader](https://v4.webpack.js.org/loaders/json-loader/) - Which exists by default in Next - Reads the data from the sidebar component and use it.

It would also be cool If the script runs automatically before running `dev` or `build`.

## Implementation

### Fetching data

```jsx
const getUserData = async () => {
  const {
    name,
    html_url: githubUrl,
    avatar_url: avatarUrl,
    bio,
    twitter_username: twitterUsername,
  } = await fetch("https://api.github.com/users/yosefbeder").then((req) =>
    req.json()
  );

  return {
    name,
    githubUrl,
    avatarUrl,
    bio,
    twitterUsername,
    // 😅
    email: "dryosefbeder@gmail.com",
  };
};
```

Btw, the `email` field is hardcoded because the github API - for some reason - returns `null`, although I made the email public.

### Writing to a JSON file

```js
(async () => {
  try {
    // 1.
    const data = await getUserData();

    // 2.
    await fs.writeFile(
      path.join(process.cwd(), "./public/user-data.json"),
      JSON.stringify(data)
    );
  } catch (_) {
    throw "Something went wrong";
  }
})();
```

> The JSON file should be written to `public`, otherwise, it will only work locally, because vercel doesn't allow you to change any folder except `public` before the build process starts.

Now, you need to untrack the generated file from `.gitignore`.

```
# generated data
public/user-data.json
```

### Reading the data from the component

```jsx
import userData from "../public/user-data.json";

const Sidebar = () => {
  const { route } = useRouter();

  const { name, bio, avatarUrl, twitterUsername, email, githubUrl } = userData;

  // do something with it.
  return <div></div>;
};
```

If you're using typescript the types will be inferred automatically.

### Running the script automatically

Now, We want the script to run automatically before we run `dev` or `build`, Fortunately, [npm provides this ability](https://docs.npmjs.com/cli/v7/using-npm/scripts#pre--post-scripts) with `pre` and `post`.

All you need to do as to add `pre` before the name of the script to run it automatically before it, For instance, `dev` becomes `predev`.

As you can expect `post` does the opposite.

```json
"scripts": {
    "build:data": "node ./scripts/generate-user-data.mjs",
    "predev": "npm run build:data",
    "dev": "next dev",
    "prebuild": "npm run build:data"
}
```

## Caveats

1. You should rebuild whenever the data changes, so It's only useful if you're ready to rebuild whenever the data changes (because it doesn't change that often).
