import Head from "next/head";
import "tailwindcss/tailwind.css";
import { ethers } from "ethers";
import { useEffect } from "react";
import { SimpleStorage, GameItem } from "../../config";

const isClient = () => typeof window !== "undefined";

// export const getServerSideProps = async () => {

//   }

export default function Home(props) {
  console.log(props);
  let token;
  let NFT;
  let signer;

  // コントラクトとの接続設定！！
  // abi, contractaddress, provider, token,の取得
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    NFT = require("../../artifacts/contracts/sample.sol/SimpleStorage.json");
    signer = provider.getSigner(0);
    console.log(signer);
    token = new ethers.Contract(SimpleStorage, NFT.abi, signer);
  }, []);

  // MetaMaskとの接続
  if (isClient()) {
    document.getElementById("connectButton").addEventListener("click", () => {
      const accounts = ethereum.request({ method: "eth_requestAccounts" });
      // promisseの中を取得する
      accounts.then(function (result) {
        console.log(result[0]);
      });
    });
  }

  async function pinatafile() {
    console.log('ok');
    const res = await fetch('http://localhost:3000/api/pinFileToIPFS');
    console.log(res);
    const data = await res.json()
    console.log(data);
    console.log('ok');
  
    // return {
    //   props: {
    //     data,
    //   },
    // }
    // https://api.pinata.cloud/pinning/pinFileToIPFS
  }
  async function Retrieve() {
    if (typeof window !== "undefined") {
      let res = await token.get();
      let messageStatus = document.getElementById("messageStatus");
      messageStatus.textContent = res;
    }
  }

  async function storetest() {
    const inputMessage = document.getElementById("inputMessage");
    const inputvalue = inputMessage.value;
    await token.set(inputvalue);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>-----メッセージの保存と取得-----</h1>
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
          onClick={Retrieve}
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

        <input
          type="text"
          id="inputMessage"
          className="border-2 rounded-lg"
          placeholder="uint"
        />

        <h1>-----デフォルトのmint-----</h1>

        <form >
          <input
            type="file"
            id="inputFile"
            name="file"
            accept="image/*"
          />
          <div onClick={pinatafile}>pinataにfileを保存</div>
          
        </form>
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
