const totalPagesAndCount = (limit)=>{
    

    let promise = new Promise(async (resolve , reject)=>{

        try{
           
            let url = `${process.env.REACT_APP_DATA_API}/pokemon`;
            let response = await fetch(url);   
            const data = await response.json();
            const total = data.count;
            const pages = (total+limit-1)/limit;
            resolve({totalPages:pages , totalCount:total});
        
           
        }catch(err){
            reject(err)
        }
    })

    return promise;

}

export default totalPagesAndCount;