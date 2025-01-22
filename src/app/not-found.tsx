import Link from "next/link"

export default function NotFound(){
    return (
        <div className="flex flex-col items-center  justify-center">
            <h1 className=" mt-6 text-center font-bold">Página não encontrada!</h1>
            <h2 className="text-center  font-bold text-4xl text-red-500">404</h2>
             <Link href="/" className="mt-10 text-blue-600 visited:text-purple-600">Voltar para a página inicial</Link>
        </div>
    )
   
}