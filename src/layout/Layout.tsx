import React, { FC } from "react";

import styles from "./Layout.module.css";

const Layout: FC = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
