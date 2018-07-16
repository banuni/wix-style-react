import Heading from 'wix-style-react/Heading';
import {APPEARANCES} from '../src/Heading/Heading';

const propify = value => ({label: value.toString(), value});
const bools = [false, true].map(propify);

export default {
  category: '1. Foundation',
  storyName: '1.3 Heading',
  component: Heading,
  componentPath: '../src/Heading/Heading.js',

  componentProps: {
    children: 'Hey there, good looking',
    forceHideTitle: false,
    light: false,
    ellipsis: false
  },

  exampleProps: {
    appearance: Object.keys(APPEARANCES),
    forceHideTitle: bools,
    ellipsis: bools
  }
};
