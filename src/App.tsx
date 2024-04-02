import Link from './components/Link';
import Profile from './components/Profile';

function App() {
  
  return (
    <div className=" bg-zinc-900 flex justify-center items-center h-screen">
      <div className="bg-zinc-800	w-96 h-[500px] flex flex-col justify-center items-center rounded-2xl">
        <Profile
          src="./avatar-jessica.jpeg"
          name="Jessica Randall"
          city="London, United Kingdom"
          text="Front-end developer and avid reader."
        />

        <Link
          href="https://github.com/CaroLinAfVs/Social-Link-Profile"
          page="gitHub"
          
        />
        <Link href="https://www.instagram.com/" page="instagram" />
        <Link href="https://www.linkedin.com/home" page="linkedin" />
        <Link href="https://twitter.com/?lang=es" page="twitter" />
      </div>
    </div>
  );
}

export default App;
