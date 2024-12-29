import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'withIconLeft' | 'withIconRight' | 'usual';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'withIconLeft',
  disabled,
  className,
  ...props
}) => {
  const buttonClass = classNames(styles.button, styles[variant], { [styles.disabled]: disabled });
  return (
    <button className={buttonClass} {...props}>{children}</button>
    );
}
 
export default Button;