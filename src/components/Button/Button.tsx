import { Button as RootButton, ButtonProps } from "react-bootstrap";
import clsx from "clsx";

import "./button.styles.scss";

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RootButton
      {...props}
      className={clsx(
        "custom-button d-flex gap-2 align-items-center",
        className
      )}
    >
      {children}
    </RootButton>
  );
};
