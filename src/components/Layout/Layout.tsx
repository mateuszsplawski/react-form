import { Layout as AntLayout } from "antd/lib";
import { Content } from "antd/lib/layout/layout";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AntLayout>
      <Content>{children}</Content>
    </AntLayout>
  );
};
