import { createStore } from 'redux'
import fetchData from '../user-list/users.actions';
import userDirectory from '../user-list/users.reducer';

const store = createStore(userDirectory);

store.subscribe(() => {
    console.log(`state is updated`, store.getState() );
});

const fun = () => {
    store.dispatch(fetchData());
};

fun();


export default store;