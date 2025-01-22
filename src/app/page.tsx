import { Metadata } from "next"


export const metadata: Metadata = { // facilitar que pessoas encontrem o site com mais facilidade
  title: "Dogs"
}

export default function Home(){
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}