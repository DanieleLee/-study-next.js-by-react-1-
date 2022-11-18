import Link from "next/link";

function HomePage(){

    return (
    <div>
        <h1>Root Page Hello!!!!!!!!!!!!!!!!!</h1>
        <ul>
            <li>
                <Link href={"/portpolio"}>portfolio</Link>
            </li>
            <li>
                <Link href={"/clients"}>client</Link>
            </li>
        </ul>
    </div>
    )
}




export default HomePage;