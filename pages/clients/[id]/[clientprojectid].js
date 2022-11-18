import{ useRouter} from 'next/router';

function SeleectedClientPage(){
    const router = useRouter();
    console.log(router.query);

    return(
        <div>selected Client Page</div>
    )
}

export default SeleectedClientPage;