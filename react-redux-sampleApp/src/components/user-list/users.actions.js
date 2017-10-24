const fetchData = () => {
    return (
        {
            type: 'FETCH_DATA',
            users: [
                {userId: 1 , name: 'Kunal Kashyap', age: 26, gender : 'Male', city : 'New Delhi' },
                {userId: 2 ,name: 'Prabhjot', age: 23, gender : 'Male' , city : 'Kanpur' },
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

