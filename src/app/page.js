import Image from "next/image";
import styles from "./page.module.css";
var data =["mango", "grapes","stawberry","orange","apple"]


export default function Home() {
  return (
    <>
    <ul>
      {data.map((fruit)=> (

       <li key={fruit}>{fruit}</li>))}
    </ul>
    </>
  );
}

