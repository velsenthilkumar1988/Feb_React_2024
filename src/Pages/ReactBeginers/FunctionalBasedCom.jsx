const ChildFunctionalComponent = (props)=>{
    return(
        <>
        Child Component in Function Component based 
        "test "{45+50}
        
        </>
    )
}
function FunctionalBAsedCom(){
    return(
        <div className="container">
            <h2>Functional Based Compenents</h2>
            <ChildFunctionalComponent/>
        </div>        
    )
}
export default FunctionalBAsedCom;