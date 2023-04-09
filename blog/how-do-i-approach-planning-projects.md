---
title: How do I approach planning projects?
description: Planning is the most important aspect of programming, and It's mostly a soft skill that you get by practicing, but In this article, I will tell you my journey planning apps and I will add a tutorial on how do I plan and organize my projects with Trello.
date: 2021-09-18
---

## My Journey

When I started to practice and program my own projects without following some tutorials I was frustrated.

I mean you have to think about what're the features that you will add and how to implement them, and the design 🤯.

### Vanilla JavaScript

When I was using Vanilla JavaScript I was dividing planning projects into two steps

1. Identifying the project

   - Describing the user experience, essential features, cool features, and the design the can contain these features.

2. Flowchart

   - You write down the steps of your project as a [Flowchart](https://en.wikipedia.org/wiki/Flowchart)

I wrote all of these things in a sketch then (try to) implement them.

The second step depends on that you use vanilla JavaScript since it's declarative, so When I learned React and started to practice it I couldn't really use this way to plan my projects.

### React

When I learned React I couldn't use the previously mentioned way (Flowcharts) because they're (as mentioned) declarative and the way React works is different so I needed to read some articles.

I found that React talked about that [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).

Also, I found that some people created tutorials based on the content of this article like [How to plan and organize a React project — by building a weather app](https://konstantinmuenster.medium.com/how-to-plan-and-organize-a-react-project-by-building-a-weather-app-95175b11bd01).

All of these articles were useful and allowed me to plan my apps.

But, when my apps got bigger organizing all of these steps was a nightmare.

### Organizing

If the project that you want to do is small you don't need to worry about organizing it that much.

For example, lately, I've been working on a [Typing speed test app](https://yosefbeder.github.io/typing-speed-test/), and to do I just followed the steps of the Thinking in React articles with a sketchbook.

Even If you sketch them you'll realize that you do things (the design for example) differently during the execution, and maybe add some features that you didn't include in the sketch because it's not that complex.

If you're approaching this kind of projects you may feel overwhelmed in the beginning, but in time you'll get used to doing them.

When I talk about organizing I talk about something bigger.

To be honest I don't program big apps that much, but the biggest and the only real-world website that I developed is this blog.

It took me about 40 hours to develop this blog and I encountered a lot of bugs, and I had a lot of ideas about improving it, so I needed a way to organize it and maintain it.

Although I finished the blog a week ago, I still want to add some features (like dark mode), articles, and optimize it more.

## Using Trello

### Identify the app

As we previously mentioned the first step is to identify the app.

I like to create a card called Plan which includes these four sections.

- Describe the app?

  - An overview of how the app should look like and the end-to-end experience.

- What are the main features?

  - You derive these features from the description.

- Any cool features?

  - These are additional features.

- Mock-up

  - The layout of the page and the names of components.

  - I also recommend turning this to a [Component tree](https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy).

- Where should the state live?

  - Organize app-wide state and the local state.

You should include the resources that you will use like for example

- The API that you will use in your app (If your app uses an API).

- The fonts that you will use.

- The color palettes that you will use.

- Some inspirations.

![Resources card in my blog board](https://i.postimg.cc/9fCfTKxQ/2021-09-15-09-42-23-Resources-on-Blog-Trello-Mozilla-Firefox.png)

As you can see I inspired the card design from [Hacker.io](https://hackr.io/blog) and the layout design from [Mohamed Abusrea Blog](https://mohamedabusrea.com/) and used the color palette of [tailwindcss](https://tailwindcss.com/).

### Tasks

I have four three labels for tasks

- `essential`

  - An essential feature.

- `enhancement`

  - A new feature that I want to add or an optimization.

- `bug`

  - A bug fix.

You know whether a task should be labeled as `essential` or `enhancement` from the plan.

![The lists in the board of this blog](https://i.postimg.cc/B3kxw9gW/2021-09-16-09-37-42-Mail.png)

As you noticed I added an additional label `idea` which isn't directly related to development it's just related to the app itself.

When you're developing the app you may come across ideas and features that you want to add, In this case just add it to the board and choose a label for it.

I recommend finding a naming convention to make it consistent, For me, I start the name with a verb.

## Conclusion

You may not have to organize the project If it's small just identify the features of it and the layout of it with a sketchbook and start immediately.

If your project is bigger use any [Project management app](https://collegeinfogeek.com/project-management-app/) like Trello.

I hope the article was useful 👋.
