import Image from "next/image";
import homeImg from "public/home.jpg"

export default function Home() {
  return (
    <div>
      Home Page
      <Image className="absolute -z-10 inset-0"
        src={ homeImg }
        alt="car factory"
        fill
        style={{ objectFit:'cover'}}
      />
    </div>
    
  );
}
