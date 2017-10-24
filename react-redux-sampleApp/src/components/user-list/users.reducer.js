
const userDirectory = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            console.log()
            return { ...state, usersData: action.users }
        }

        case 'SHOW_USER_DATA': {
            return state;
        }

        case 'SHOW_EDIT_USER_DATA': {
            return state;
        }

        case 'EDIT_USER_DATA': {
           var usersData = action.payload;
           const newUsers = [...state.usersData];
            let indexToEdit = -1;
            newUsers.forEach((user, idx) => {
               if(user.userId === action.payload.userId) {
                   indexToEdit = idx;
               }
           });
            if(indexToEdit >= 0) {
                newUsers[indexToEdit] = {...action.payload};
            }
            console.log("--------",newUsers, state.usersData);
            return {...state, usersData: newUsers};

        }

        default: {
            return state
        }
    }
}


export default userDirectory;
