const reducer = (state= [], action) =>{
    let menu =[];
    let navCheck =[];

    if(action.type === 'OPENMENU'){
        menu =  {active: action.active};
        return menu
    }
    else if(action.type === 'CLEAR'){
        navCheck =  {isOpen: action.isOpen};
        return navCheck
    }
    else{
        return state
    }
}
export default reducer