import React from 'react';
import {bool, func, node, string} from 'prop-types';
import styles from './Button.scss';
import WixComponent from '../../BaseComponents/WixComponent';
import ButtonLayout from '../../ButtonLayout/ButtonLayout';
import omit from 'omit';
import {withFocusable, focusableStates} from '../../common/Focusable';
import {pickAccessibilityProps} from '../../common/accessibility';
import Loader from './../../Loader';

const ICON_SIZES = {
  'x-small': '8px',
  small: '8px',
  medium: '12px'
};

const NEW_ICON_SIZES = {
  large: '24px',
  medium: '24px',
  small: '18px',
  tiny: '18px'
};

class Button extends WixComponent {
  static displayName = 'Button';

  static propTypes = {
    ...ButtonLayout.propTypes,
    children: node,
    id: string,
    loading: bool,
    prefixIcon: node,
    suffixIcon: node,
    type: string,
    withNewIcons: bool,
    onClick: func,
    onMouseEnter: func,
    onMouseLeave: func
  }

  static defaultProps = {
    ...ButtonLayout.defaultProps,
    withNewIcons: false
  };

  addIcon = (className, icon, height, key) => {
    const iconSizes = this.props.withNewIcons ? NEW_ICON_SIZES : ICON_SIZES;
    const fallbackSize = this.props.withNewIcons ? iconSizes.medium : '16px';
    const iconSize = iconSizes[height] || fallbackSize;
    const dataHook = className === styles.prefix ? 'btn-prefix' : 'btn-suffix';

    return (
      icon ?
        <div className={className} key={key} data-hook={dataHook}>
          {React.cloneElement(icon, {size: iconSize})}
        </div> :
        null
    );
  }

  addPrefix = () =>
    this.addIcon(styles.prefix, this.props.prefixIcon, this.props.height, 'prefix');

  addSuffix = () =>
    this.addIcon(styles.suffix, this.props.suffixIcon, this.props.height, 'suffix');

  renderButtonContent() {
    if (this.props.loading) {
      return <Loader size="tiny"/>;
    }

    return [
      this.addPrefix(),
      this.props.children,
      this.addSuffix()
    ];
  }

  render() {
    const {
      disabled,
      onClick,
      type,
      onMouseEnter,
      onMouseLeave
    } = this.props;

    const buttonLayoutProps = omit(['id', 'onClick', 'prefixIcon', 'suffixIcon', 'type'], this.props);

    return (
      <ButtonLayout {...buttonLayoutProps}>
        <button
          onClick={onClick}
          disabled={disabled}
          type={type}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={this.props.focusableOnFocus} // For some reason eslint react/prop-types rule doesn't work here ?!#$
          onBlur={this.props.focusableOnBlur}
          {...focusableStates(this.props)}
          {...pickAccessibilityProps(this.props)}
          >
          {this.renderButtonContent()}
        </button>
      </ButtonLayout>
    );
  }
}

export default withFocusable(Button);

