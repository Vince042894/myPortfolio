import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center"
      style={{backgroundImage: "url(/main-bg.webp)"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w[750px]">
          <h1 className="text-[20px] md:-[50px] items-center text-white font-semibold">
            Hi My Name is Runel a  <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              JR. Front-end Developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            "I like to craft solid and scalable frontend products with great user experiences."
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            Lear more
            </Link>
            <Link href="my-projects" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            
            My Projects
            </Link>
            <Link href="contact-me" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] cursor-pointer">
            Contact me
            </Link>          
          </div>
        </div>
      </div>

      {/* links btn mobile start  */}
      <div className="absolute bottom-10 z-[20] left-1/2 -translate-x-1/2 flex flex-col md:hidden gap-5">
            <Link href="my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            Learn more
            </Link>
            <Link href="my-projects" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            My Projects
            </Link>
            <Link href="contact-me" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
            Contact me
            </Link>
        </div>
        {/* links btn mobile end  */}

      <div className="absolute bottom-0 right-0 z-[10] hidden md:block">
        <Image 
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"          
        />

        <Image
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480} 
        />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
         />
      </div>
      <Image 
          src="/stars.png"
          alt="stars"
          height={300}
          width={300}
          className="absolute top-10 left-0 z-[10]"          
        />
    </main>
  );
}
