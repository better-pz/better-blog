import styles from "../styles/Author.module.css";
import React, { useState, useEffect } from "react";
import { Avatar, Divider, Tooltip } from "antd";
import { QqOutlined,WechatOutlined,GithubOutlined } from '@ant-design/icons';
export default function Author() {
  const [slogin, setSlogoin] = useState([""]);
  useEffect(() => {
    myFuction();
  }, []);
  //文字逐个显示
  const myFuction = () => {
    // setInterval(function() {
      const str = "永远的不停留,永远的生生不息".split("");
      var sloginStr = "";
      var i = 0;
      var timer = setInterval(function() {
        if (i < str.length) {
          sloginStr += str[i];
          setSlogoin(sloginStr);
          i++;
        } else {
          clearInterval(timer);
        }
      }, 500);
    // }, 10000);
  };
  return (
    <div className={styles.author_div,'comm-box'}>
      {/* 注意next的静态图片的使用引入:public文件下的静态文件可以用'/'直接引入 */}
      <div>
        <Avatar size={100} src="/images/author.jpg" />
      </div>
      <div className={styles.author_description}>
        <div className={styles.author_name}>柏特</div>
        <div className={styles.author_slogin}>{slogin}</div>
      </div>
      <div>
        <Divider>社交账号</Divider>
        <Tooltip  title="联系我的QQ">
          <Avatar icon={<QqOutlined />} size={28} className="account" className={styles.account} />
        </Tooltip>
        <Tooltip  title="联系我的微信">
          <Avatar icon={<WechatOutlined />} size={28} className="account" className={styles.account} />
        </Tooltip>
        <Tooltip  title="访问我的GitHub">
          <Avatar icon={<GithubOutlined />} size={28} className="account" className={styles.account} />
        </Tooltip>
      </div>
    </div>
  );
}
