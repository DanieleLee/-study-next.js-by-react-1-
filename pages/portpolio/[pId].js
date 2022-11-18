import {useRouter} from "next/router";

function PortFolioProjPage(){

    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);
    
    return(
        <div>
            <h2>portFolioProjPage</h2>
        </div>
    )

}

export default PortFolioProjPage;