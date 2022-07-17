const INITIAL_STATE = {
    users: [{
        name: 'SyedAreeb',
        email: 'sareeb65@gmail.com'
    },
        {
            name:'Ghous',
            email:'ghous@gmail.com'
        }
    ],
}
export default (state = INITIAL_STATE, action) => {
    console.log('redux-action', action)
    switch (action.type) {
        case 'SETDATA':
            return ({
                ...state,
                users: [...state.users, action.data]
            })
    }
    return state
}