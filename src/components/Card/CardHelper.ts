import {
  cadre02,
  eyeDBG05,
  eyeDCarte03,
  eyeDesignerWatch04,
  eyeDTop01,
  layer1,
  layer2,
  layer3,
  layer4,
  layer5,
  layer6,
  layer7,
  layer8,
  lightBeansBG04,
  lightBeansComposante03,
  lightBeansTop01,
  MEJBG04,
  MEJPerso03,
  MEJTop01,
} from "../../assets/images";
import Layer from "../../models/Layer";

export const getParallaxImages = (projectName: string): Layer[] => {
  switch (projectName) {
    case "eyeDesigner":
      return layerListEyeDesigner;

    case "Lightbeans":
      return layerListLightbeans;

    case "Math en jeu":
      return layerListMEJ;

    default:
      return [];
  }
};

const layerListEyeDesigner: Layer[] = [
  {
    image: new Image(),
    src: eyeDBG05,
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: eyeDesignerWatch04,
    z_index: -1,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: cadre02,
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: eyeDCarte03,
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: eyeDTop01,
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
];

const layerListLightbeans: Layer[] = [
  {
    image: new Image(),
    src: lightBeansBG04,
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: cadre02,
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: lightBeansComposante03,
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: lightBeansTop01,
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
];

const layerListMEJ: Layer[] = [
  {
    image: new Image(),
    src: MEJBG04,
    z_index: -2.25,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: cadre02,
    z_index: 0,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: MEJPerso03,
    z_index: 0.8,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
  {
    image: new Image(),
    src: MEJTop01,
    z_index: 2,
    position: { x: 0, y: 0 },
    blend: null,
    opacity: 1,
  },
];

const basicLayerList: Layer[] = [
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
