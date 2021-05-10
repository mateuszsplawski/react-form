import { Card, Col, Row } from "antd";
import Layout from "antd/lib/layout/layout";

import { ContractorForm } from "components/ContractorForm/ContractorForm";

export const Main = () => {
  const layoutStyle = {
    minHeight: "100%",
    justifyContent: "center",
  };
  return (
    <Layout style={layoutStyle}>
      <Row align="middle" justify="center">
        <Col xl={10} lg={14} md={18} sm={20} xs={22}>
          <Card bordered>
            <ContractorForm />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
