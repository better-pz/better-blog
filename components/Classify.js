import React, { useState, useEffect }  from 'react'
import styles from "../styles/Classify.module.css"
import {FolderAddOutlined,RightOutlined} from  "@ant-design/icons";
// 文章分类组件
export default function Classify() {
    const [classifyList ] = useState(['vue','React' ,'JavaScript','css','TypeScript'])
    return (
        <>
        <div className={'comm-box'}>
            <div className={styles.ls_title}>文章分类</div>
            
           { classifyList.map(item=> {
               return  <a className={'classifyList'}><FolderAddOutlined />{item}<RightOutlined/></a> 
             
           })}
            
        </div>
        
        </>
    )
}
