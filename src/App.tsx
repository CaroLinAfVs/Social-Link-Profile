function App() {
  return (
    <div className=" bg-zinc-900 flex justify-center items-center h-screen">
      <div className="bg-zinc-800	w-96 h-[500px] flex flex-col justify-center items-center rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-full w-20"
            src="./avatar-jessica.jpeg"
            alt="Avatar jessica"
          />
          <h1 className="mt-3	text-2xl text-white font-bold">Jessica Randall</h1>
          <h2 className="mt-2	text-sm text-lime-400 font-bold">
            London, United Kingdom
          </h2>
          <p className="my-4 mb-4	text-white">
            "Front-end developer and avid reader."
          </p>
        </div>
        <div className="my-2.5 flex justify-center flex-col text-center items-center 	 ">
          <a
            className="bg-zinc-700 transition duration-1000 ease-out
             hover:bg-lime-500 hover:ease-out rounded-lg
              text-white px-3 py-1.5 w-[300px] hover:font-bold"
            href="https://github.com/CaroLinAfVs/Social-Link-Profile"
          >
            GitHub
          </a>
          <a
            className="bg-zinc-700 transition duration-1000 ease-out hover:font-bold hover:bg-lime-500 hover:ease-out	rounded-lg text-white px-3 py-1.5	w-[300px] mt-4"
            href="https://www.instagram.com/"
          >
            instagram
          </a>
          <a
            className="bg-zinc-700 transition duration-1000 ease-out hover:font-bold hover:bg-lime-500 hover:ease-out	rounded-lg text-white px-3 py-1.5	w-[300px] mt-4"
            href="https://www.linkedin.com/home"
          >
            linkedin
          </a>
          <a
            className="bg-zinc-700 transition duration-1000 ease-out hover:font-bold hover:bg-lime-500 hover:ease-out rounded-lg text-white px-3 py-1.5	w-[300px] mt-4"
            href="https://twitter.com/?lang=es"
          >
            twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
