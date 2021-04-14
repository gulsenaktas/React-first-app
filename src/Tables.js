const Tables = (props) => {

    const secretKey=props.secretKey
    const setTableName=props.setTableName

    const handleClick=(e) =>{
    
        const tableName=e.target.innerHTML
        
        setTableName(tableName)
        
        const api = `https://${secretKey}.mockapi.io/${tableName}/`
        fetch(api).then(response =>{
            return response.json()
        }).then(datas=> {
            const infoTable= document.querySelector(".info-table")
            const rows = document.querySelector(".rows")
            
            const header = Object.keys(datas[0])
            rows.innerHTML = `<div class='row'>
                                    <div>${header[0]}</div>
                                    <div>${header[1]}</div>
                                    <div>${header[2]}</div>
                                    <div>${header[3]}</div>
                                </div>`
                                    
            datas.forEach(data => {

                const row = `<div class='row'>
                            <div>${data[header[0]]}</div>
                            <div>${data[header[1]]}</div>
                            <div>${data[header[2]]}</div>
                            <div>${data[header[3]]}</div>
                        </div>`
                rows.innerHTML += row
            
                infoTable.style.display="flex"

            });
        })
    }
        
    return ( 
        <div className="tables">
            <div onClick={handleClick} className="table"><a href="#info"></a></div>
            <div onClick={handleClick} className="table"><a href="#info"></a></div>
        </div>
     );
}
 
export default Tables;