import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import list from "../styles/list.module.css";
import { CarryOutOutlined,SnippetsOutlined ,RightOutlined,RiseOutlined } from "@ant-design/icons";

import { Row, Col,List } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert"
import Footer from "../components/Footer"
import Classify from '../components/Classify';
export default function Home() {
  const [mylist, setMylist] = useState([
    {
      title: "柏特的文章",
      context:
        "柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章",
    },
    {
      title: "柏特的文章",
      context:
        "柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章",
    },
    {
      title: "柏特的文章",
      context:
        "柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章",
    },
    {
      title: "柏特的文章",
      context:
        "柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章柏特的文章",
    },
  ]);
  return (
    <div>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Row className={styles.comm_main} type="flex" justify="center">
        <Col

          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={10}
        >
          <div className={styles.comm_left}>
            <List
            header={<div>热门文章</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <a className={list.list_title}>{item.title}</a>
                <div className={list.list_icon}>
                  <span>
                    <CarryOutOutlined /> 2019-06-28  &nbsp;<RiseOutlined />8888
                  </span>
                </div>
                <div className={list.list_content}>{item.context}</div>
                <div className={list.list_go}><SnippetsOutlined /> &nbsp; <a>查看全文  &nbsp;<RightOutlined /> </a></div>
              </List.Item>
            )}
          />
          </div>
           
        </Col>

        <Col className={styles.comm_right} xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Classify />
          <Advert/>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
}
