interface Props {
  page: string;
  href: string;
}


function Link(props: Props) {
  return (
    <div className="my-2.5 flex justify-center flex-col text-center items-center 	 ">
      <a
        className="bg-zinc-700 transition duration-1000 ease-out hover:bg-lime-500 hover:ease-out rounded-lg  text-white px-3 py-1.5 w-[300px] hover:font-bold"
        href={props.href}
      >
        {props.page}
      </a>
    </div>
  );
}
export default Link;
