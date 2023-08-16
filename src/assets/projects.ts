import { ProjectObject } from "../types";
import brands from "./brands";

const projects: ProjectObject[] = [
  {
    name: "fencryption",
    id: "fencryption",
    description:
      "A crypto util cli program that encrypts/decrypts files and directories. I first built it in typescript but decided to switch to Rust because typescript was not appropriate for this kind of project that requires working with io and crypto. I also wanted to try Rust and low-level programming.",
    links: [
      {
        url: "https://github.com/valflrt/fencryption",
        name: "Github",
      },
    ],
    used: [brands.rust],
  },
  {
    name: "valflrt.dev (v2)",
    id: "v2.valflrt.dev",
    description:
      "This website, made using react and vitejs, it has some cool react hooks. I might rework it some day.",
    links: [
      {
        url: "https://github.com/valflrt/v2.valflrt.dev",
        name: "Github",
      },
    ],
    used: [brands.html, brands.react, brands.sass, brands.vite],
  },
  {
    name: "pixel_game",
    id: "pixel_game",
    description: "A simple (crappy) pixel art game, but I worked hard on the logic.",
    links: [
      {
        url: "https://github.com/valflrt/pixel_game",
        name: "Github",
      },
    ],
    used: [brands.rust],
  },
  // {
  //   name: "Le Jardinier",
  //   id: "lejardinier",
  //   description:
  //     "Simple utility/test discord bot made using typescript and discord.js.",
  //   links: [
  //     {
  //       url: "https://github.com/valflrt/lejardinier",
  //       name: "Github",
  //     },
  //     {
  //       url: "https://lejardinier.valflrt.dev/card",
  //       name: "Discord Invite",
  //     },
  //   ],
  // },
  {
    name: "Neural Network",
    id: "neural-network",
    description: "A simple neural network with two layers, inspired by several sources. It can for example act as a OR gate.",
    links: [
      {
        url: "https://github.com/valflrt/neural-network",
        name: "Github",
      },
    ],
    used: [brands.python],
  },
];

export default projects;
