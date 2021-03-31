import styles from "../styles/Author.module.css";
import React, { useState, useEffect } from "react";
import { Avatar, Divider } from "antd";

export default function Author() {
  const [slogin, setSlogoin] = useState([""]);
  useEffect(() => {
    showSlogin()
  }, []);
  const myFuction = () => {
    console.log('多次执行')
    const str = "永远的不停留".split('');
    var sloginStr = "";
    var i=0;
       var timer = setInterval(function () {
        if (i<str.length){
            sloginStr +=str[i];
            setSlogoin(sloginStr)
            i++;
        }else {
            clearInterval(timer);
        }
    },500); 
    
    
   
  };
  const showSlogin = () => {
    setInterval(myFuction(),5000)
    
  } 
  return (
    <div className={styles.author_div}>
      {/* 注意next的静态图片的使用引入:public文件下的静态文件可以用'/'直接引入 */}
      <div>
        <Avatar size={100} src="/images/author.jpg" />
      </div>
      <div className={styles.author_description}>
        <div className={styles.author_name}>柏特</div>
        <div>{slogin}</div>
      </div>
      <div>
        <Divider>社交账号</Divider>
        <Avatar size={28} className="account" className={styles.account} />
        <Avatar size={28} className="account" className={styles.account} />
        <Avatar size={28} className="account" className={styles.account} />
      </div>
    </div>
  );
}
