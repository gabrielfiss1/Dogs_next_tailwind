import Link from "next/link";

export function Header() {
   return (
     <header className=" bg-green-600 text-white p-4">
       <h1 className="flex justify-center text-3xl font-bold">DOGS</h1>
       <nav className=" flex justify-center mt-2">
         <ul className="flex space-x-4">
           <Link href="/" className="hover:text-green-300 cursor-pointer">Home</Link> 
           <Link href="/posts" className="hover:text-green-300 cursor-pointer">Posts</Link>
           <Link href="/dashboard" className="hover:text-green-300 cursor-pointer">Dashboard</Link>

         </ul>
       </nav>
     </header>
   );
 }
 