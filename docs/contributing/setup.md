# Getting started

In this guide, we'll walk through how to get started with Blue development.

## Setup

First, we need to clone the Github repo to your computer. Open up your terminal, and run this command in the directory of your choice:

```
git clone git@github.com:helpscout/blue.git
```

Next, go into that directory:

```
cd blue
```

And install all the dependencies in the world...

```
npm install
```

Note: You can use [Yarn](https://yarnpkg.com/en/) if you like, but it is recommended you use [npm](https://www.npmjs.com/), as that is what we use. This is to avoid install conflicts from `yarn.lock` vs `package-lock.json`.

Great 🌈! You've setup and installed all of Blue's dependencies.

## Development environment

![Blue's Storybook development environment](../images/storybook.jpg)

Blue's development environment is powered by [Storybook](https://storybook.js.org/). To fire up Blue's Storybook, run the following command:

```
npm start
```

Blue's `start` does a neat thing that automatically checks and installs dependencies for you. After the initial `npm install`, you most likely don't need to do this anymore when running `npm start` 💪.

Once Storybook builds, you'll be able to visit it at [http://localhost:8900/](http://localhost:8900/).

The live version of Blue's Storybook can be seen at [http://hsblue.surge.sh/](http://hsblue.surge.sh/).

Fantastic ✌️! You've got Blue up and running on your computer.

## Code editor

You can use **whatever code editor you like**! Blue is typed using [Flow](https://flow.org/). Because of this, we recommend using [Visual Studio Code](https://code.visualstudio.com/) as it has pretty great [Flow support](https://github.com/flowtype/flow-for-vscode).

Note: You may need to [install Flow globally](https://preview.npmjs.com/package/flow-bin) on your computer.

## Git branch

Create a new `git` branch for your work. You can call it whatever you like (the more descriptive of your work, the better):

```
git checkout -b strong-component
```

## Next

Let's [create our new component](creating.md) in Blue!