import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import list from "../styles/list.module.css";
import Link from 'next/link'
import {
  CarryOutOutlined,
  SnippetsOutlined,
  RightOutlined,
  RiseOutlined,
} from "@ant-design/icons";

import { Row, Col, List,Affix} from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";

import Classify from "../components/Classify";
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

      <Row className={styles.comm_main} type="flex" justify="center">
        <Col xs={24} sm={24} md={20} lg={20} xl={10}>
          <div className={styles.comm_left}>
            <List
              header={<div>热门文章</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={(item) => (
                <List.Item>
                  <Link href="/detail">
                  <a className={list.list_title}>
                    {item.title}
                  </a>
                  </Link>
                  <div className={list.list_icon}>
                    <span>
                      <CarryOutOutlined /> 2019-06-28 &nbsp;
                      <RiseOutlined />
                      8888
                    </span>
                  </div>
                  <div className={list.list_content}>{item.context}</div>
                  <div className={list.list_go}>
                    <SnippetsOutlined /> &nbsp;
                    <Link href="/detail">
                      <a href="/detail">
                        查看全文 &nbsp;
                        <RightOutlined />
                      </a>
                    </Link>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className={styles.comm_right} xs={0} sm={0} md={4} lg={4} xl={4}>
        <Affix offsetTop={60}>
          <Author />
          <Classify />
          <Advert />
          </Affix>
        </Col>
        
      </Row>
    </div>
  );
}
