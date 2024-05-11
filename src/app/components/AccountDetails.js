import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

const AccountDetails = () => {
  return (
    <div className=" w-full bg-white p-6 rounded-lg shadow-2xl text-black  ">
      {/* <h2 className="text-xl font-semibold my-4">Account Details</h2> */}
      <h2 className="text-xl font-semibold my-4 border-b border-gray-300">Account Details</h2>


      <div className="flex items-center gap-4 mb-4">
        <FaUser className="w-6 h-6 text-gray-500" />
        <div>
          <div className="font-semibold">Moralis Mage</div>
          <div className="text-sm text-gray-500">Address: 0x12...3456</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <AiTwotoneSafetyCertificate className="w-7 h-7 text-gray-500" />
        <div>
          <div className="font-semibold">Lisk Tokens</div>
          <div className="text-sm text-gray-500">100.32 Matic</div>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button className="text-blue-500 hover:text-blue-700 border border-blue-500 hover:border-blue-700 rounded-lg px-4  ">
          Set Username
        </button>
        <button className="text-blue-500 hover:text-blue-700 border border-blue-500 hover:border-blue-700 rounded-lg px-4 ">
          Switch Accounts
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;