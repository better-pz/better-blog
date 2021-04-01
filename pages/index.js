import Head from "next/head";
import { useState } from "react";
import list from "../styles/list.module.css";
import { CarryOutOutlined,SnippetsOutlined ,RightOutlined,RiseOutlined } from "@ant-design/icons";
import Link from 'next/link'
import { List } from "antd";

import Footer from "../components/Footer"

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
            header={<div>热门文章</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={(item) => (
              <List.Item>
                <Link  href="/detail">
                  <a className={list.list_title}>{item.title}</a>
                </Link>
                
                <div className={list.list_icon}>
                  <span>
                    <CarryOutOutlined /> 2019-06-28  &nbsp;<RiseOutlined />8888
                  </span>
                </div>
                <div className={list.list_content}>{item.context}</div>
                <div className={list.list_go}><SnippetsOutlined /> &nbsp; <Link  href="/detail"><a>查看全文  &nbsp;<RightOutlined /> </a></Link></div>
              </List.Item>
            )}
          />
      <Footer/>
    </div>
  );
}
