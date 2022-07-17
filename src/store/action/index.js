// const set_data = () => {
//     console.log("hello")
// }
// const  alertBtn = () => {
//     alert("hello")
// }
// export {set_data,alertBtn}




const set_data = (data) => {
    return (dispatch) => {      
        dispatch({
            type:'SETDATA',data:data
        })
    }
}
export {set_data}