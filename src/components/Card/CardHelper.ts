import {
  layer1,
  layer2,
  layer3,
  layer4,
  layer5,
  layer6,
  layer7,
  layer8,
} from "../../assets/images";
import Layer from "../../models/Layer";

export const getParallaxImages = (projectName: string): Layer[] => {
  switch (projectName) {
    case "eyeDesigner":
      return layer_list1;

    case "Lightbeans":
      return layer_list2;

    case "Math en jeu":
      return layer_list3;

    default:
      return [];
  }
};

const layer_list1: Layer[] = [
  {
    image: new Image(),
    src: layer1,
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer2,
    z_index: -2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer3,
    z_index: -1.25,
    position: { x: 0, y: 0 },
    blend: "overlay",
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer4,
    z_index: -0.5,
    position: { x: 0, y: 0 },
    blend: "overlay",
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer5,
    z_index: -1.25,
    position: { x: 0, y: 0 },
    blend: "multiply",
    opacity: 0.75,
  },
  {
    image: new Image(),
    src: layer6,
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer7,
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer8,
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 0.9,
  },
];

const layer_list2: Layer[] = [
  {
    image: new Image(),
    src: layer1,
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer2,
    z_index: -2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer3,
    z_index: -1.25,
    position: { x: 0, y: 0 },
    blend: "overlay",
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer4,
    z_index: -0.5,
    position: { x: 0, y: 0 },
    blend: "overlay",
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer5,
    z_index: -1.25,
    position: { x: 0, y: 0 },
    blend: "multiply",
    opacity: 0.75,
  },
  {
    image: new Image(),
    src: layer6,
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer7,
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer8,
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 0.9,
  },
];

const layer_list3: Layer[] = [
  {
    image: new Image(),
    src: layer1,
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer2,
    z_index: -2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer3,
    z_index: -1.25,
    position: { x: 0, y: 0 },
    blend: "overlay",
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer4,
    z_index: -0.5,
    position: { x: 0, y: 0 },
    blend: "overlay",
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer5,
    z_index: -1.25,
    position: { x: 0, y: 0 },
    blend: "multiply",
    opacity: 0.75,
  },
  {
    image: new Image(),
    src: layer6,
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer7,
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: layer8,
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 0.9,
  },
];
