import Head from "next/head";
import styles from "../styles/Home.module.css";
import list from "../styles/list.module.css";
import { useState } from "react";
import { Row, Col, List } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";
import Header from "../components/Header";

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
      {/* <Header></Header> */}
      
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <div className={list.list_title}>{item.title}</div>
                <div className={list.list_icon}>
                  <span>
                    <CarryOutOutlined /> 2019-06-28
                  </span>
                </div>
                <div className={list.list_content}>{item.context}</div>
              </List.Item>
            )}
          />
       
    </div>
  );
}
