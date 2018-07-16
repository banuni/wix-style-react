import {textDriverFactory} from 'wix-ui-backoffice/dist/src/components/core/CoreText/Text.driver';
import {StylableDOMUtil} from 'stylable/test-utils';
import style from './Heading.st.css';

const headingDriverFactory = factoryParams => {
  const coreTextDriver = textDriverFactory(factoryParams);
  const stylableDOMUtil = new StylableDOMUtil(style);
  const {element} = factoryParams;

  return {
    ...coreTextDriver,
    getAppearance: () => stylableDOMUtil.getStyleState(element, 'appearance'),
    isLight: () => stylableDOMUtil.hasStyleState(element, 'light')
  };
};

export default headingDriverFactory;
