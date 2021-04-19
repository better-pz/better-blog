import Head from "next/head";
import {useState} from "react"
import styles from "../styles/Home.module.css";
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/kimbie.dark.css';
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { Row, Col, Breadcrumb, Affix } from "antd";
import Aside from "../components/Aside";
import ShowComment from "../components/ShowComment";
import axios from 'axios';
export default function Home(data) {
  
  const [ mylist , setMylist ] = useState( data.data);
    const renderer = new marked.Renderer();
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: true,
      smartLists: true,
      smartypants: true,
      highlight: function (code) {
              return hljs.highlightAuto(code).value;
      }
    }); 
      let html = marked(mylist) 
  return (
    <div>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Aside />
      <Row className={styles.comm_main} type="flex" justify="center">
        
        <Col xs={24} sm={24} md={20} lg={20} xl={11}>
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
         
            {/* <ReactMarkdown source={markdown} escapeHtml={false} />
             */}
              <div className="detailed-content"  
                  dangerouslySetInnerHTML = {{__html:html}}   >


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
                source={mylist}
                ordered={false}
              />
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
  );
}
Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7001/list').then(
      (res)=>{
        //console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}