import React, { createElement, useState, useRef } from "react";
import {
  Comment,
  Avatar,
  Form,
  Button,
  List,
  Input,
  Tooltip,
  Popover,
} from "antd";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import moment from "moment";
const { TextArea } = Input;
export default function ShowComment() {
  const [value, setValue] = useState("");
  const [submitting, changeSubmitting] = useState(false);
  const [comments, setComments] = useState([]);
  const inputVal = useRef();
  const hangleChange = (e) => {
    setValue(e.target.value);
  };
  const hangleSubmit = () => {
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
          actions: { likes: 0, dislikes: 0, action: null },
        },
      ]);
      changeSubmitting(false);
      setValue("");
    }, 1000);
  };
  const like = (index) => {
    const arr = [...comments];
    arr[index].actions = { likes: 1, dislikes: 0, action: "liked" };
    setComments(arr);
  };

  const dislike = (index) => {
    const arr = [...comments];
    arr[index].actions = { likes: 0, dislikes: 1, action: "disliked" };
    setComments(arr);
  };
  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} 条评论`}
      itemLayout="horizontal"
      renderItem={(item, index) => (
        <li>
          <Comment
            actions={[
              <Tooltip key="comment-basic-like" title="太赞了">
                <span onClick={() => like(index)}>
                  {createElement(
                    item.actions.action === "liked" ? LikeFilled : LikeOutlined
                  )}
                  <span className="comment-action">{item.actions.likes}</span>
                </span>
              </Tooltip>,
              <Tooltip key="comment-basic-dislike" title="不太行">
                <span onClick={() => dislike(index)}>
                  {React.createElement(
                    item.actions.action === "disliked"
                      ? DislikeFilled
                      : DislikeOutlined
                  )}
                  <span className="comment-action">
                    {item.actions.dislikes}
                  </span>
                </span>
              </Tooltip>,
            ]}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
  );
  const emojis = [
    "😀","🤠","😄","😁","😅","😂","🤣","🙂","🙃","😉","😍","😘","😜",
    "🤡", "😤", "🥵","😎","😰","☹️","😭","😱","👍","✊","💪","👋","👀","🩲",
  ];
  const content = (
    <div className="emojis_content">
      {emojis.map((item, index) => {
        return (
          <li key={index} onClick={() => addEmojis(index)}>
            {item}
          </li>
        );
      })}
    </div>
  );
  const addEmojis = (index) => {
    const emojisValue = `${value}${emojis[index]}`;
    setValue(emojisValue);

    inputVal.current.focus();
  };
  return (
    <>
      <Comment
        avatar={<Avatar src="/images/author.jpg" alt="柏特" />}
        content={
          <>
            <Form.Item>
              <TextArea
                className="comment_textarea"
                rows={4}
                ref={inputVal}
                onChange={hangleChange}
                placeholder="输入评论"
                value={value}
              />
            </Form.Item>
            <Form.Item>
              <div className="comment_bottom">
                <Popover placement="left" content={content} trigger="click">
                  <span>😀表情</span>
                </Popover>
                <Button
                  htmlType="submit"
                  loading={submitting}
                  onClick={hangleSubmit}
                  type="primary"
                >
                  添加评论
                </Button>
              </div>
            </Form.Item>
          </>
        }
      />
      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <div className={"comments_nodata"}>暂时还有评论哦😀,快来抢沙发吧😜</div>
      )}
    </>
  );
}
