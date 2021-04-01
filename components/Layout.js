import Header from "./Header";
import Author from "./Author";
import Classify from "./Classify";
import Advert from "./Advert";
import styles from "../styles/Home.module.css";


import {  Col,Row } from "antd";
function Layout(params) {
    return(
        <>
        <Header/>
        <Row className={styles.comm_main} type="flex" justify="center">
        <Col
          xs={24}
          sm={24}
          md={16}
          lg={18}
          xl={10}
        ><div className={styles.comm_left}>{params.children}</div></Col>
        
        <Col className={styles.comm_right} xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Classify />
          <Advert/>
        </Col>
        </Row>
        </>
    )
}
export default Layout
  
