const IORedis = require("ioredis");
const redis = new IORedis();

const faglover = async function () {
  const channel = "ioredis_channel";
  // specify the channel. you want to know how many messages
  // have been written in this channel
  let messageCount = await redis.xlen(channel);
  console.log(
    `current message count in channel ${channel} is ${messageCount} messages`
  );

  // specify channel to write a message into,
  // messages are key value
  const myKey = "hello world";
  const myValue = "LOLOLOL";

  await redis.xadd(channel, "*", myKey, myValue);

  messageCount = await redis.xlen(channel);
  console.log(
    `current message count in channel ${channel} is ${messageCount} messages`
  );
  // now you can see we have one new message

  // use xread to read all messages in channel
  let messages = await redis.xread(["STREAMS", channel, 0]);
  messages = messages[0][1];
  console.log("SEE THIS " + messages);
  console.log("SEE THIS 2 " + messages[0][1]);
  console.log("SEE THIS 3 " + messages[0]);
  console.log("SEE THIS 4 " + messages[1]);
  console.log("SEE THIS 5 " + messages[0][1][0]);
  console.log(
    `reading messages from channel ${channel}, found ${messages.length} messages`
  );
  for (let i = 0; i < messages.length; i++) {
    let msg = messages[i];
    //msg = msg[1][0].toString();
    msg = msg[1][0];
    console.log("reading message:", msg);
  }
  process.exit(0);
};
faglover();
