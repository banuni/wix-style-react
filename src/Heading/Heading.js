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

class Heading extends React.PureComponent {
  static displayName = 'Heading';

  static propTypes = {
    ...omit(CoreText.propTypes, ['tagName']),

    /** is the text has dark or light skin */
    light: bool,

    /** typography of the heading */
    appearance: oneOf(Object.keys(APPEARANCES))
  };

  static defaultProps = {
    appearance: APPEARANCES.H1,
    light: false
  };

  state = {tagName: this.props.appearance.toLowerCase()}

  render() {
    const {light, appearance, ...rest} = this.props;

    return (
      <CoreText
        {...this.props}
        {...style('root', {light, appearance}, rest)}
        tagName={this.state.tagName}
        />
    );
  }
}

export default Heading;
