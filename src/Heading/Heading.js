import React from 'react';
import {oneOf, bool} from 'prop-types';
import {Text as CoreText} from 'wix-ui-backoffice/dist/src/components/core/CoreText';
import omit from 'lodash/omit';
import style from './Heading.st.css';

export const APPEARANCES = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6'
};

const Heading = ({light, appearance, ...rest}) => (
  <CoreText
    {...style('root', {light, appearance}, rest)}
    {...rest}
    tagName={appearance.toLowerCase()}
    />
);

Heading.displayName = 'Heading';

Heading.propTypes = {
  ...omit(CoreText.propTypes, ['tagName']),

  /** is the text has dark or light skin */
  light: bool,

  /** typography of the heading */
  appearance: oneOf(Object.keys(APPEARANCES))
};

Heading.defaultProps = {
  appearance: APPEARANCES.H1,
  light: false
};

export default Heading;
