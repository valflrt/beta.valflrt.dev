<p align="center">
  <img src="https://cdn.discordapp.com/attachments/947485534194909224/967710993037807656/icon-128.png" />
  <p align="center">
    <img src="https://img.shields.io/github/workflow/status/valflrt/react-template/build" /> <img src="https://img.shields.io/github/deployments/valflrt/react-template/github-pages?label=example%20deployment" /> <img src="https://img.shields.io/github/license/valflrt/react-template" />
  </p>
</p>

# React Template

- [React Template](#react-template)
  - [Features](#features)
      - [More information](#more-information)
  - [How to install](#how-to-install)
  - [How to use](#how-to-use)
  - [Deployment](#deployment)
  - [Reporting bugs](#reporting-bugs)
  - [License](#license)

The react template I created and that I use, very simple and with typescript for those who **don't want** to use `create-react-app`.

## Features

**Routing** (react-router-dom), **css-modules** (css and scss) and **pure css** (also css and scss) are already implemented so you can use them right away !

#### More information

- routing - The ["router"](src/router/Router.tsx) and an [example route](src/routes/Main.tsx)
- css-modules - An [example of scss module file](src/layout/Layout.module.scss) and [its implementation](src/layout/Layout.tsx)
- simple css - You can also create pure css files (useful for global styles for example). see [globalStyles.css](src/globalStyles.css)

## How to install

First initialize an empty repository (if not done already):

```
git init
```

Then pull from this template to your repository:

```
git pull https://github.com/valflrt/react-template.git
```

## How to use

Two preset options are available:

- `npm start` - Starts live version for development (open **localhost:3000** on your computer)
- `npm run build` - Creates an optimized build for deployment (in **build/** directory)

**You can now customize this simple template to make a website that will surely be super-duper amazing !**

## Deployment

- [`deploy:gh-pages`](https://github.com/valflrt/react-template/blob/master/package.json#L7) - Deploy to github pages (deploys to branch "pages")

## Reporting bugs

If you encounter something working improperly please [create an issue](https://github.com/valflrt/react-template/issues/new) so I can fix the problem !

## License

MIT
