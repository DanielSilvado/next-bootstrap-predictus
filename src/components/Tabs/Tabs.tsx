import { Tabs as RootTabs, TabsProps } from "react-bootstrap";
import clsx from "clsx";

import "./tabs.styles.scss";

export const Tabs: React.FC<TabsProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RootTabs {...props} className={clsx("custom-tabs", className)}>
      {children}
    </RootTabs>
  );
};
