import Link from "next/link";

function ClientPage(){
    const clients = [
        {id:"daniel", name: "donghyun"},
        {id:"manu", name: "manuel"}
    ]

    return(
        <div>
            <h1>Clients Page</h1>
            <ul>
{/*                 
                <li><Link href={"/clients/max"}>danieleLee</Link></li>
                <li><Link href={"/clients/manu"}>manu</Link></li>
                 */}
{/* 
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link href={`/clients/${client.name}`}>{client.name}</Link>
                    </li>
                ))}
                 */}
                 {clients.map((client) => (
                    <li key={client.id}>
                        <Link href={{
                            pathname: "/clients/[id]",
                            query: {id: client.id}
                        }}>{client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClientPage;