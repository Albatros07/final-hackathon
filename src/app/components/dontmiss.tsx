
import Image from "next/image"

export default function DontMiss(){
    return(
      <section className="my-20">
      <h1 className="font-semibold text-xl mb-3 ml-2">Don&apos;t Miss</h1>
      <Image src={"/DontMiss.png"} alt={"flight"} width={1344} height={700}/>
      <div className="flex flex-col justify-center items-center space-y-5 pt-10">
          <h1 className="font-semibold text-2xl md:text-4xl">FLIGHT ESSENTIALS</h1>
          <h2 className="text-[9px] md:text-sm">Your built-to-last,all-week wears—but with style only Jordan Brand can deliver.</h2>
            <div className="rounded-full hover:underline text-wrap font-bold" >Shop </div> 
      </div>
  </section>
    )
}