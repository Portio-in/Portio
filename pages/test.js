import {useEffect} from "react";
import ApiClient from "../controllers/api_client";

export default  function (){
    useEffect(()=>{
        async function test(){
            let c = new ApiClient();
            let res = await c.request("get", "/available/techstack");
            console.log(res)
        }
        test();
    }, [])
    return(
        <>
            <h1>dsdsd</h1>
        </>
    )
}