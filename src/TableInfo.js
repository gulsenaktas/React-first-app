const TableInfo  = (props) => {

    const secretKey=props.secretKey
    const tableName=props.tableName

    const handleClick= (e)=>{
        if(e.target.classList.contains("row")){
            const id = e.target.children[0].innerHTML
    
            const api = `https://${secretKey}.mockapi.io/${tableName}/${id}`    
    
            fetch(api).then(response =>{
                return response.json()
            }).then(response=> {                
    
                response.updatedDate = new Date().toLocaleString().split(" ")[1];
                
                fetch(api, {
                     method: "PUT",
                     headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(response)
                      
                    }).then(response=> {
    
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
                })
            })
        }
    }


    return ( 
        <div className="TableInfo">
            <div id="info" className="info-table">
                <div onClick={handleClick} className="rows"></div>
            </div>
        </div>
     );
}

export default TableInfo;