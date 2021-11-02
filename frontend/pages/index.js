import Head from "next/head";
import "tailwindcss/tailwind.css";
const isClient = () => typeof window !== "undefined";



export default function Home() {
// Connectボタンの動作
  if(isClient()) {
    const ethereumButton = document.getElementById("connectButton");
    ethereumButton.addEventListener("click", () => {
      const accounts = ethereum.request({ method: 'eth_requestAccounts' });
      // promisseの中を取得する
      accounts.then(function(result) {
        console.log(result[0])
     })
    });
  } 
  // -----------------




  function test() {
    alert("ok");
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
          onClick={test}
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
