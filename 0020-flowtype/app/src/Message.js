/* @flow */
import React from 'react';

function Message({ message, times = 2 }: { message: string, times?: number }) {
  const messages = new Array(times).fill(0).map((el, idx) => {
    return <p key={idx}>{message}</p>;
  })

  return (
    <div>
      {messages}
    </div>
  );
}
export default Message;
