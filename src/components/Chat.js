export default function Chat({ messageList }) {
  // console.log();
  let lastMessage = messageList.find((item) => {
    return messageList.shift();
  });
  if (lastMessage != undefined) {
    // console.log(lastMessage.message);
  }

  return (
    <div className="chat">
      {lastMessage != undefined && lastMessage.message}
    </div>
  );
}
