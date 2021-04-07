import React, { createElement, useState } from "react";
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import moment from "moment";
const { TextArea } = Input;
export default function ShowComment() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [value, setValue] = useState("");
  const [submitting, changeSubmitting] = useState(false);
  const [comments, setComments] = useState([]);
  const [action, setAction] = useState(null);
  const hangleChange = (e) => {
    console.log("点击改变时候传的值", e);
    setValue(e.target.value);
  };
  const hangleSubmit = (e) => {
    console.log("点击改变时候传的值", e);
    if (!value) {
      return;
    }
    changeSubmitting(true);
    setTimeout(() => {
      setComments([
        ...comments,
        {
          author: "柏特",
          avatar: "/images/author.jpg",
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
          actions: [
            <Tooltip key="comment-basic-like" title="Like">
              <span onClick={like(key)}>
                {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
              </span>
            </Tooltip>,
            <Tooltip key="comment-basic-dislike" title="Dislike">
              <span onClick={dislike}>
                {React.createElement(
                  action === "disliked" ? DislikeFilled : DislikeOutlined
                )}
                <span className="comment-action">{dislikes}</span>
              </span>
            </Tooltip>,
            <span key="comment-basic-reply-to">Reply to</span>,
          ],
        },
      ]);
      changeSubmitting(false);
      setValue("");
    }, 1000);
  };
  const like = (index) => {
    console.log("点击喜欢",index);
    setLikes(1);
    setDislikes(0);
    setAction("liked");
    console.log('点击喜欢函数执行完成');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };
  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} 条评论`}
      itemLayout="horizontal"
      renderItem={(item, index)=> (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        😀评论： <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          添加评论
        </Button>
      </Form.Item>
    </>
  );

  return (
    <>
      <Comment
        avatar={<Avatar src="/images/author.jpg" alt="柏特" />}
        content={
          <Editor
            onChange={hangleChange}
            onSubmit={hangleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
      {comments.length > 0 && <CommentList comments={comments} />}
    </>
  );
}
