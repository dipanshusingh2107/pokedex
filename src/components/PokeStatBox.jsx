const PokeStatBox = (props) => {
    const {stats} = props;
    const maxValue = 150; //stats max value
    const minValue = 0; //stats min value
    const render = ()=>{
        
        if(!stats){
            
            return "LOADING";
        }


        const width = (statValue)=>{
            return `${100*(statValue/maxValue)}%`;
        }


        return stats.map((s,idx)=>(
        <div className="m-2" key={idx}>
            <div>
                {s.name}
            </div>
            <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{width:width(s.value)}} aria-valuenow={`${s.value}`} aria-valuemin={`${minValue}`} aria-valuemax={`${maxValue}`}>{s.value}</div>
            </div>
        </div>
        ))
    }
    


    return (  
        <div className="p-2">
            {render()}
        </div>
    );
}
 
export default PokeStatBox;
