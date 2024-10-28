import Button from "../components/Button"
import Heading from "../components/Heading"
import iphone from "../assets/iphone.png";
import "./home.css";

function Home  () {
  return (
    <div className="w-full h-[calc(100vh-10vh)] flex items-center justify-between p-10">
      <div className="w-[70%] flex flex-col gap-10 ">
        <Heading text={"Crypto Tracker"} styles={""}/>
        <Heading text={"Real Time."} styles={"text-[#3A80E9] "}/>
        <p className="text-slate-500 font-nunito">Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <div className="flex gap-12">
        <Button text={"Dashboard"} styles={"px-6 text-slate-100 bg-[#3A80E9] hover:shadow-xl "}/>
        <Button text={"Share"} styles={"px-12 text-slate-800 bg-slate-100 border-2 border-blue-700 hover:text-slate-100 hover:bg-[#3A80E9] hover:border-[#3A80E9]"} />
        </div>
      </div>
      <div className="w-[30%] h-full relative">
        <div className="w-[70%] h-[90%] bg-[#63A1DD] absolute bottom-0 right-10 rounded-3xl">
        </div>
        <img className="w-[75%] h-full absolute top-0 left-10  animate-up-down" src={iphone} alt="iphone" />
      </div>
    </div>
  )
}

export default Home