import React from 'react';
import {oneOf, bool} from 'prop-types';
import {Text as CoreText} from 'wix-ui-backoffice/dist/src/components/core/CoreText';
import omit from 'lodash/omit';
import style from './Heading.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export const APPEARANCES = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6'
};

const defaultProps = {
  appearance: APPEARANCES.H1,
  light: false
};

const StyledText = withStylable(
  CoreText,
  style,
  ({light, appearance}) => ({light, appearance}),
  defaultProps
);

export class Heading extends React.PureComponent {
  static displayName = 'Heading';

  static propTypes = {
    ...omit(CoreText.propTypes, ['tagName']),

    /** is the text has dark or light skin */
    light: bool,

    /** typography of the heading */
    appearance: oneOf(Object.keys(APPEARANCES))
  };

  static defaultProps = defaultProps;

  state = {tagName: this.props.appearance.toLowerCase()}

  render() {
    return (
      <StyledText {...this.props} tagName={this.state.tagName}/>
    );
  }
}
