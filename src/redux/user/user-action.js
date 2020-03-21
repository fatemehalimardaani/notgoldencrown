
import {UserActionType} from './user-type';

export const userAction= user =>({
    type:UserActionType.SET_CURRENT_USER,
    payload:user
})