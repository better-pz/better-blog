import React from 'react'
import {LikeOutlined}  from "@ant-design/icons";
export default function Aside() {
    return (
        <div className='aside'>
            <div className={`aside_list aside_click`}>
            <LikeOutlined />
            </div>
            <div className='aside_list'>
                赏
            </div>
        </div>
    )
}
 