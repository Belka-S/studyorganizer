import PropTypes from 'prop-types';

import { AccentBtn, TransparentBtn } from './Button.styled';

const Button = ({
  $round,
  $w,
  $h,
  $s,
  $bs,
  onClick,
  name,
  variant,
  type = 'button',
  disabled,
  children,
}) => {
  return variant === 'accent' ? (
    <AccentBtn
      $w={$w}
      $h={$h}
      $s={$s}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </AccentBtn>
  ) : (
    <TransparentBtn
      $round={$round}
      $w={$w}
      $h={$h}
      $s={$s}
      $bs={$bs}
      onClick={onClick}
      name={name}
      variant={variant}
      type={type}
      disabled={disabled}
    >
      {children}
    </TransparentBtn>
  );
};

export default Button;

Button.propTypes = {
  $round: PropTypes.bool,
  $w: PropTypes.string,
  $h: PropTypes.string,
  $s: PropTypes.string,
  $bs: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.oneOf(['img', 'png', 'svg']),
  ]),
};
