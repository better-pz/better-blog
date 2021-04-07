import React, { createElement, useState } from "react";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from 'moment';
const { TextArea } = Input;
export default function ShowComment() {
  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} 条评论`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  )
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
  const [like, setLike] = useState(0);
  const [value, setValue] = useState("");
  const [submitting, changeSubmitting] = useState(false);
  const [comments] = useState([
    {
      author: "柏特",
      avatar:
        "/images/author.jpg",
      content: <p>{value}</p>,
      datetime: moment().fromNow(),
    },
  ]);
    const hangleChange = e => {
        console.log('点击改变时候传的值',e);
        setValue( e.target.value)
    }
    const hangleSubmit = e => {
        console.log('点击改变时候传的值',e);
    }

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
