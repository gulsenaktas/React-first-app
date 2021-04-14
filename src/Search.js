import { useState } from "react";

const Search = (props) => {

    const setSecretKey=props.setSecretKey

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(value){
            const tablesNode = document.querySelector(".tables")
            const form = document.querySelector("form")

            const api = `https://${value}.mockapi.io/tables/`
            fetch(api).then(response =>{
                return response.json()
            }).then(tables=> {
                tables.forEach((table,index) => {
                    tablesNode.children[index].children[0].innerHTML= table.name
                });
            })
        
    
            form.style.paddingTop="20vh"
            form.style.height="20vh"
            tablesNode.style.display="flex"

            setSecretKey(value)
        }
    }

    return ( 
        <div className="Search">
            <form onSubmit ={handleSubmit}>
                <div className="input-group">
                    <input autoComplete="off" value={ value } onChange={(e)=>{setValue(e.target.value)}} type="text" className="input" id="kediname" placeholder=" please enter a secret key" required />
                    <button className="btn"></button>
                </div>
            </form>
        </div>
     );
}
 
export default Search;