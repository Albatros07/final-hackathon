import Image from "next/image";
export default function Essential() {
  return (
    <section className="m-4" >
      <div>
        <h2 className="font-semibold text-xl py-5"> The Essentials</h2>
      </div>
      <div className="flex justify-evenly flex-wrap gap-5">
        <Image width={300} height={300} alt="" src={"/e1.png"} />
        <Image width={300} height={300} alt="" src={"/e2.png"} />
        <Image width={300} height={300} alt="" src={"/e3.png"} />
      </div>
    </section>
  );
}