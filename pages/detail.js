import Head from "next/head";
import styles from "../styles/Home.module.css";
import ReactMarkdown from "react-markdown";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { Row, Col, Breadcrumb, Affix } from "antd";
import Aside from "../components/Aside";
import ShowComment from "../components/ShowComment";

export default function Home() {
  let markdown =
    "# P01:课程介绍和环境搭建\n" +
    "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
    "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
    "**这是加粗的文字**\n\n" +
    "*这是倾斜的文字*`\n\n" +
    "***这是斜体加粗的文字***\n\n" +
    "~~这是加删除线的文字~~ \n\n" +
    "`console.log(111)` \n\n" +
    "# p02:来个Hello World 初始Vue3.0\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n" +
    "***\n\n\n" +
    "# p03:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p04:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "#5 p05:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p06:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p07:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "``` var a=11; ```";
  return (
    <div>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aside />
      <Row className={styles.comm_main} type="flex" justify="center">
        
        <Col xs={24} sm={24} md={20} lg={20} xl={10}>
          <div  className={styles.comm_left}>
          <div className={styles.comm_crumb}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>文章列表</Breadcrumb.Item>
              <Breadcrumb.Item>vue3新特性</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="detailed-content">
            <ReactMarkdown source={markdown} escapeHtml={false} />
          </div>
         
          </div>
           <div className={styles.comm_left}>
            <ShowComment/>
          </div>
        </Col>
        <Col className={styles.comm_right} xs={0} sm={0} md={4} lg={4} xl={4}>
          <Affix offsetTop={60}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <MarkNav
                className="article-menu"
                source={markdown}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
  );
}
