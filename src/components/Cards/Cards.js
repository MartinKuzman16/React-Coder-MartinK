
function Cards ({titulo,agenda,img}){
    return(
        <div>
            <img src={img} />
            <h3>{titulo}  </h3>
            <p>{agenda} </p>
        </div>
    )
}

export default Cards