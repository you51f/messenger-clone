import React from "react";
import { forwardRef } from "react";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div className="message__container">
      <div>
        {!isUser && (
          <Avatar
            className="message__avatar"
            alt={!isUser && `${message.username || "Uknown"} `}
            src="/static/images/avatar/1.pg"
          ></Avatar>
        )}
      </div>

      <div ref={ref} className={`message ${isUser && "message__user"}`}>
        <Card>
          <CardContent
            className={isUser ? "message__userCard" : "message__guestCard"}
          >
            <Typography color="white" variant="h5" component="h2">
              {!isUser && `${message.username || "Uknown"}: `} {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default Message;
