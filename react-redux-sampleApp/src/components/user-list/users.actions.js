const fetchData = () => {
    return (
        {
            type: 'FETCH_DATA',
            users: [
                {userId: 1 , name: 'Rey Misterio', age: 42, gender : 'Male', city : 'Toronto' },
                {userId: 2 ,name: 'Triple H', age: 45, gender : 'Male' , city : 'Colorado' },
            ]
        }
    )
};

export const showUserData = (usersData) => {
    return(
        {
            type : "SHOW_USER_DATA",
            payload : usersData
        }
    )
};

export const showEditUserData = (usersData) => {
    return(
        {
            type : "SHOW_EDIT_USER_DATA",
            payload : usersData
        }
    )
};

export const editUserData = (usersData) => {
    return(
        {
            type : "EDIT_USER_DATA",
            payload : usersData
        }
    )
};

export default fetchData;

