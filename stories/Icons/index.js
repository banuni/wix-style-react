import React from 'react';
import {storiesOf} from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import Readme from '../../src/Icons/README.md';

import AllIcons from './AllIcons';
import AllIconsRaw from '!raw-loader!./AllIcons';

import CustomIcon from './CustomIcon';
import CustomIconRaw from '!raw-loader!./CustomIcon';

import RTLIcon from './RTLIcon';
import RTLIconRaw from '!raw-loader!./RTLIcon';

storiesOf('1. Foundation', module)
  .add('1.4 Icons - deprecated', () => (
    <div>
      <Markdown source={Readme}/>

      <CodeExample title="All Icons" code={AllIconsRaw}>
        <AllIcons/>
      </CodeExample>
      <CodeExample title="Custom Icon" code={CustomIconRaw}>
        <CustomIcon/>
      </CodeExample>
      <CodeExample title="RTL Icon" code={RTLIconRaw}>
        <RTLIcon/>
      </CodeExample>
    </div>
  ));
