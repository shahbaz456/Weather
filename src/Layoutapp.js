import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navigationbar from "./Components/Header/Navigationbar";
import Body from "./Components/Body/Body";
import { useSelector } from "react-redux";
const { Header, Content } = Layout;

export default function Layoutapp() {
  const zipcode = useSelector((state) => state.data.zipcode);
  return (
    <div>
      <Layout className="layout">
        <Header>
          <Navigationbar />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            {zipcode.length === 0 ? (
              <h1 className="weather"> Weather App</h1>
            ) : (
              <Body />
            )}
          </div>
        </Content>
      </Layout>
    </div>
  );
}
