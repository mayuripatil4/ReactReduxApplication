 
const iState ={
    firstName:"Mayuri",
    lastName:"Patil",
    wishes: ['eat','code']
}

const reducer = (state=iState, action) => {
    if(action.type === 'CHANGE_NAME'){
        return {
            ...state,
            firstName : action.payload
        }
    }
    return state;
}
export default reducer;