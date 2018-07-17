import eyes from 'eyes.it';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {headingTestkitFactory} from '../../testkit/protractor';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

describe('Heading', () => {
  let driver;
  const storyUrl = getStoryUrl('1. Foundation', '1.3 Heading');
  const dataHook = 'storybook-heading';

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  beforeEach(async () => {
    driver = headingTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find Heading');
  });

  afterEach(() => autoExampleDriver.reset());

  eyes.it('should display correct content', () => {
    expect(driver.getText()).toBe('Hey there, good looking');
  });

  describe('light', () => {
    eyes.it('should render light component', async () => {
      await autoExampleDriver.setProps({light: true});
      expect(driver.element().isPresent()).toBe(true);
    });
  });
});
