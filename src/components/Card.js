 const Card = (prop)=>{
    return(
        <div className="card">
            <div className="color" style={{background:prop.clrCard}}></div>
            <h2>{prop.clrCard}</h2>
            <span style={{color:prop.clrCard }}>{prop.clrName}</span>
        </div>
    )
 }

 export default Card;