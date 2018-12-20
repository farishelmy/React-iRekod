import{MAIN_FAB,CHANGE_ISMULTI,SHOW_MULTIFAB,SET_SEL_ALL} from '../actions/types'

const initialState={
    fabMenu:false,
    showMultiFab:true,
    isMultiSel: false,
    isSelAll:false
     
}

export default function(state = initialState, action){
    switch(action.type){
        case MAIN_FAB:
        return {
            ...state,
            fabMenu:action.payload,
        }
        case CHANGE_ISMULTI:
        return {
            ...state,
            isMultiSel:action.payload
        }
        case SHOW_MULTIFAB:
        return {
            ...state,
            showMultiFab:action.payload
        }
        case SET_SEL_ALL:
        return {
            ...state,
            isSelAll:action.payload
        }
        default:
        return state
    }
}