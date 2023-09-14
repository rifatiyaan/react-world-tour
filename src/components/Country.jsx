
export default function Country({country}){
    const {name} = country;
    return(
        <div className="box">
            <h3>Name: {name?.common}</h3>
        </div>
    )
}