import React, { useRef, useState } from "react";
import { Tooltip, message } from "antd";
import Link from "next/link";
import {
  LikeOutlined,
  ShareAltOutlined,
  FormOutlined,
} from "@ant-design/icons";
export default function Aside() {
  const [isClicked, changeClicked] = useState(false);
  const [count, changeCount] = useState(1);

  const like = () => {
    changeClicked(!isClicked);
    // isClicked ? changeCount(count-1):changeCount(count+1)
  };
  const onShare = () => {
    document.execCommand("Copy");
    message.success("已复制当前网页地址");
  };
  return (
    <div className="aside">
      <Tooltip key="comment-basic-like" title={isClicked ? "取消点赞" : "点赞"}>
        <div className={`${isClicked ? "aside_click" : null} aside_list`}>
          <LikeOutlined onClick={like} />
        </div>
      </Tooltip>
      <div className="aside_count">
        <div className="aside_count_father">
          <span
            className={`aside_count_span ${
              isClicked ? "aside_like" : "aside_concel_like"
            }`}
          >
            {count}赞
          </span>
          <span className="aside_count_span">{count + 1}赞</span>
        </div>
      </div>
      <div className="aside_list">
        <Tooltip
          key="comment-FormOutlined"
          title="添加文章"
        >
          <Link href="/edit">
            <FormOutlined />
          </Link>
        </Tooltip>
      </div>
      <Tooltip key="comment-basic-share" title="分享">
        <div className="aside_list" onClick={onShare}>
          <ShareAltOutlined />
        </div>
      </Tooltip>
    </div>
  );
}
