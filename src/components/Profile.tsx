interface Props {
    name: string;
    city:string;
    text:string;
    src:string;
  }
function Profile(props:Props){
    return(
        <div className="flex flex-col justify-center items-center">
          <img 
            className="rounded-full w-20"
            src={props.src}
            alt="Avatar"
          />
          <h1 className="mt-3	text-2xl text-white font-bold">{props.name}</h1>
          <h2 className="mt-2	text-sm text-lime-400 font-bold">
           {props.city} 
          </h2>
          <p className="my-4 mb-4	text-white">
           {props.text}
          </p>
        </div>
    )
}
export default Profile