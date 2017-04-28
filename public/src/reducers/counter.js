/**
 * Created by lipeishang on 17-4-18.
 */
export default function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        default:
            return state
    }
};