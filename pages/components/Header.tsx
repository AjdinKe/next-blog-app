import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter()
    if(router.pathname === "/")
    {
        return (
            <div className="w-full flex items-center justify-end bg-[#E5E7EB]">
                <Image className="mr-auto"src="/blog-logo.png"alt="Logo"width={128} height={128} />
                <div className="flex items-center px-5">
                    <Link className="text-xl font-semibold px-1" href="/create">Add Blog</Link>
                    <Link className="hover:opacity-70" href="/create"><Image  className="" src="/plus-icon.png" alt="Plus" width={48} height={48} /></Link>
                </div>
            </div>
          );
      
    }
    else 
    {
        return (
            <div className="w-full flex items-center justify-end bg-[#E5E7EB]">
                <Image className="mr-auto"src="/blog-logo.png"alt="Logo"width={128} height={128} />
                <div className="flex items-center px-5">
                    <Link className="text-xl font-semibold px-2" href="/">Home Page</Link>
                    <Link className="hover:opacity-70" href="/"><Image  className="" src="/arrow-left-icon.png" alt="Back" width={32} height={48} /></Link>
                </div>
            </div>
          );   
    }
};

export default Header;
