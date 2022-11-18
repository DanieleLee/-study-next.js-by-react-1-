import{useRouter} from 'next/router'; 

function ClientPjPage(){
    const router = useRouter();
    console.log(router.query);
    
    return(
        <div>
            <h1>The Proj of a given Client</h1>
        </div>
    )
}

export default ClientPjPage;