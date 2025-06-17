import React, { type ReactNode } from "react";
import Logo from "@theme/Logo";
import { GlobalOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./styles.module.css";

export default function NavbarLogo(): ReactNode {
  return (
    <>
      <Logo className="navbar__brand" imageClassName="navbar__logo" titleClassName="navbar__title text--truncate" />

      <div className={styles.xdd}>xdd</div>
      <div className="hehe">xdd</div>
      <GlobalOutlined />
      <Button className="hehe">xdd</Button>
    </>
  );
}
