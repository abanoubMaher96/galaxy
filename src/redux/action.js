export const open_menu = (active) =>{
    const action = {
        type:'OPENMENU',
        active
    }
    return action
}
export const clear_state = (isOpen) =>{
    const action = {
        type:'CLEAR',
        isOpen
    }
    return action
}