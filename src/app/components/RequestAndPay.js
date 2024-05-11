import React, { useState } from "react";
import { DollarOutlined, SwapOutlined } from "@ant-design/icons";
import { Modal, Input, InputNumber } from "antd";

const RequestAndPay = () => {
  const [payModal, setPayModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [requestAmount, setRequestAmount] = useState(5);
  const [requestAddress, setRequestAddress] = useState("");
  const [requestMessage, setRequestMessage] = useState("");

  const togglePayModal = () => {
    setPayModal(!payModal);
  };

  const toggleRequestModal = () => {
    setRequestModal(!requestModal);
  };

  return (
    <>
      <Modal
        title="Confirm Payment"
        open={payModal}
        onOk={togglePayModal}
        onCancel={togglePayModal}
        okText="Proceed To Pay"
        cancelText="Cancel"
      >
        {/* Additional content for payment modal */}
      </Modal>

      <Modal
        title="Request A Payment"
        open={requestModal}
        onOk={toggleRequestModal}
        onCancel={toggleRequestModal}
        okText="Proceed To Request"
        cancelText="Cancel"
      >
        <p>Amount (Lisk)</p>
        <InputNumber
          value={requestAmount}
          onChange={(val) => setRequestAmount(val)}
        />
        <p>From (address)</p>
        <Input
          placeholder="0x..."
          value={requestAddress}
          onChange={(e) => setRequestAddress(e.target.value)}
        />
        <p>Message</p>
        <Input
          placeholder="Lunch Bill..."
          value={requestMessage}
          onChange={(e) => setRequestMessage(e.target.value)}
        />
      </Modal>

      <div className="flex justify-center gap-10 p-4 text-black">
        <div
          className="flex flex-col items-center justify-center p- border border-gray-800 bg-gray-300  rounded cursor-pointer w-24"
          onClick={togglePayModal}
        >
          <DollarOutlined style={{ fontSize: "26px" }} />
          <span>Pay</span>
        </div>

        {/* <div
          className="flex flex-col items-center justify-center p-4 border border-gray-800 bg-gray-300 rounded cursor-pointer"
          onClick={toggleRequestModal}
        >
          <SwapOutlined style={{ fontSize: "26px" }} />
          <span>Request</span>
        </div> */}
        <div
  className="flex flex-col items-center justify-center p-4 border border-gray-800 bg-gray-300 rounded cursor-pointer w-24"
  onClick={toggleRequestModal}
  style={{ transition: "background-color 0.6s ease", ":hover": { backgroundColor: "green" } }}
>
  <SwapOutlined style={{ fontSize: "26px" }} />
  <span>Request</span>
</div>

      </div>
    </>
  );
};

export default RequestAndPay;