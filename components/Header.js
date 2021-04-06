import styles from "../styles/Header.module.css";
import Link from 'next/link'

import { Row, Col, Menu,Input } from "antd";
import {
  FileSearchOutlined,
  SmileOutlined,
  BookOutlined
} from "@ant-design/icons";
function Header(props) {
  return (
    // <div className={styles.affix}>
    <div className={styles.header}>
      <div className={styles.header_center}>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={13}>
            <Link href="/"><a className={styles.header_logo}>柏特</a></Link>
            
            <span className={styles.header_txt}>
              永远在路上,不一定逆风翻盘，但一定要向阳而生
            </span>
          </Col>

          <Col className="memu-div" xs={0} sm={0} md={11}>
            <Menu mode="horizontal">
              <Menu.Item key="home">
                <FileSearchOutlined />
                文章
              </Menu.Item>
              <Menu.Item key="video">
              <BookOutlined />
                作品集
              </Menu.Item>
              <Menu.Item key="life">
                <SmileOutlined />
                生活
              </Menu.Item>
            </Menu>
            {/* <Search/> */}
          </Col>
        </Row>
      </div>
    </div>
    // </div>
  );
}

export default Header;
