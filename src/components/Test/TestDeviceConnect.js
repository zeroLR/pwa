import React, { Fragment, useEffect, useState } from "react";
import webSocket from "socket.io-client";
import "antd/dist/antd.css";

const TestDeviceConnect = () => {
  const [ws, setWs] = useState(null);
  const connectWebSocket = () => {
    console.log(
      `host:${window.location.hostname} port:${window.location.port}`
    );
    setWs(webSocket(`ws://192.168.0.200:10000`));
  };

  const initWebSocket = () => {
    ws.on("192.168.0.101", (message) => {
      console.log(`${message}`);
    });
    ws.on("192.168.0.102", (message) => {
      console.log(message);
    });
    ws.on("192.168.0.103", (message) => {
      console.log(message);
    });
  };

  useEffect(() => {
    if (ws) {
      console.log("create websocket");
      console.log(ws);
      initWebSocket();
    }
  }, [ws]);

  useEffect(() => {
    connectWebSocket();
  }, []);

  return (
    <Fragment>
      <h1>check console</h1>
    </Fragment>
  );
};

export default TestDeviceConnect;
