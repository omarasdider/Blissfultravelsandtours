import Image from "next/image";

const Loader = () => {
    return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <Image src="/loader.gif" width={400} height={400} alt="loafing"
        />
    </div>
      );
}
 
export default Loader;