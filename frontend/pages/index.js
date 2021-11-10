import Head from "next/head";
import "tailwindcss/tailwind.css";
import { ethers } from "ethers";
import { useEffect } from "react";
const isClient = () => typeof window !== "undefined";

export default function Home() {
  let token;
  let senderAddress;
  let NFT;
  let signer;
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    NFT = require("../../artifacts/contracts/sample.sol/SimpleStorage.json");
    senderAddress = "0x3E1edF1dB7D9303959a8c8e222BF76332B395Bf7";
    signer = provider.getSigner(0);
    console.log(signer);
    token = new ethers.Contract(senderAddress, NFT.abi, signer);
  }, []);

  if (isClient()) {
    const ethereumButton = document.getElementById("connectButton");
    ethereumButton.addEventListener("click", () => {
      const accounts = ethereum.request({ method: "eth_requestAccounts" });
      // promisseの中を取得する
      accounts.then(function (result) {
        console.log(result[0]);
      });
    });
  }
  // -----------------

  async function test() {
    if (typeof window !== "undefined") {
      console.log(token);
      let res = await token.get();
      let messageStatus = document.getElementById("messageStatus");
      messageStatus.textContent = res;
    }
  }

  async function storetest() {
    console.log(token);
    const set = await token.set(300);
    console.log(set);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* ここから */}

        <div className="text-red-400">Ethereum test dapp</div>
        <div>
          Accounts: <span id="address"></span>
        </div>
        <div>Actions</div>
        {/* コンタクトボタン(metamaskと接続させる)  */}
        <button
          id="connectButton"
          className="bg-gray-400 border-2 rounded-full"
        >
          Connect
        </button>
        {/* ブロックチェーン上に載せたデータを取得するボタン */}
        <button
          id="retrieveButton"
          className="bg-gray-600 border-2 rounded-md"
          onClick={test}
        >
          Retrieve
        </button>

        <div id="messageStatus">no status</div>
        {/* データを送るボタン */}
        <button
          id="storeButton"
          className="bg-gray-200 border-2 rounded-lg"
          onClick={storetest}
        >
          Store
        </button>

        <input type="text" id="inputMessage" className="border-2 rounded-lg" />

        {/* ここまで */}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
