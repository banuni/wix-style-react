import eyes from 'eyes.it';
import {getStoryUrl, waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {headingTestkitFactory} from '../../testkit/protractor';

describe('Heading', () => {
  const storyUrl = getStoryUrl('1. Foundation', '1.3 Heading');

  beforeEach(() => browser.get(storyUrl));
  eyes.it('should display correct content', () => {
    const dataHook = 'storybook-heading';
    const driver = headingTestkitFactory({dataHook});

    return waitForVisibilityOf(driver.element(), 'Cannot find Heading')
      .then(() => expect(driver.getText()).toBe('Hey there, good looking'));
  });
});
