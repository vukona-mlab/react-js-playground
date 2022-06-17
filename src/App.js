import { useState, useEffect } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import AddParentItem from './components/AddParentItem';
import DisplayTransactions from './components/DisplayTransaction';
import Description from './components/description';
import { firestore } from './firebaseConfig';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { getFirestore, getDoc, getDocs, doc, collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, DocumentReference, QuerySnapshot, QueryDocumentSnapshot } from 'firebase/firestore';
// import budgetReducer from './reducers';
import { getItems, itemAdded, itemsAdded } from './reducers';
import { store } from './store.js';
import { useSelector, useDispatch } from 'react-redux';
import DisplayCounter from './components/DisplayCounter';
import Login from './pages/login';
import Home from './pages/Home';
import BudgetTracking from './pages/BudgetTracking';



function App() {
  const [transactions, setTransactions] = useState([]);
  const listOfItems = useSelector((state) => state.budget);
  const dispatch = useDispatch();


  const addItem = (item) => {
    console.log(item);
    setTransactions([...transactions, item]);

  }

  useEffect(() => {
    getData();
    console.log(transactions);
  })
  const getQueryData = async (id) => {
    // const col = collection(firestore, 'lists')
    const ref = doc(firestore, 'lists/' + id);
    console.log(id);
    // const data = await getDoc(ref)
    // console.log(data.data());

    // using QueryDocumentSnapshot class to get docs
    // new QueryDocumentSnapshot(
    //   getDoc(ref).then( snap => {
    //     console.log(snap.data());
    //   })
    // )

    // listen to changes on a document
    onSnapshot(
      query(ref), (snap => {
        console.log(snap.data());
      })
    )

    // getting data from nested document
    const nestedRef = doc(firestore, 'lists/' + id + '/items/iGZtyzbxQKf7dd1iIXGd');
    onSnapshot(query(nestedRef), (snap => {
      console.log(snap.data());
    }))

  }
  const getData = async () => {
    const id = '5VpWNoWIdVYeXt4eryh8'
    // updateData(id)
    // deleteData(id)
    getQueryData(id);
    // const col = collection(firestore, 'lists');
    // await getCollectionDocs(col);
    // dispatch({ type: 'GET_LIST', payload: getCollectionDocs() })
    return
    // console.log(firestore);
    // const budgetDoc = doc(firestore, 'lists/yypKRKSpPs9bsYuDBP2m')
    // const snap = await getDoc(budgetDoc);
    // console.log(snap.data());

    const col = collection(firestore, 'lists');

    getDocs(col).then(snapshot => {
      console.log(snapshot);
      snapshot.docs.map(item => {
        console.log(item.data(), item.id);
      })
    });
    const snap = await getDocs(col);
    const items = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    console.log(items);
    console.log(snap);
    const arr = await getCollectionDocs(col);
    console.log(arr);
    // addData();
    // const id = '1FKE5I5At4LiY48BW6ja'

  }
  const addData = async () => {
    const col = collection(firestore, 'lists');
    const res = await addDoc(col, { item: 'USB', amount: 258, type: 'expense' });
    console.log(res);
  }
  const updateData = async (id) => {
    const col = collection(firestore, 'lists');
    const ref = doc(firestore, `lists/` + id);
    const res = await updateDoc(ref, { item: 'High Speed USB' })
    console.log(res);
  }
  const deleteData = async (id) => {
    const col = collection(firestore, 'lists');
    const ref = doc(firestore, `lists/${id}`)
    const res = await deleteDoc(ref);
    console.log(res);
  }
  const getCollectionDocs = async () => {
    const col = collection(firestore, 'lists');
    const snap = await getDocs(col);
    const items = snap.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    console.log(items);
    dispatch(itemsAdded(items));
    console.log(listOfItems)
    return items
  }
  return (
    <div>
     <Router>
       <Routes>
         <Route path='/home' element={ <Home /> } />
         <Route path='/budget-tracking' element={ <BudgetTracking /> } />
         <Route path='/' component={ Login } />
       </Routes>
     </Router>
    </div>


  );
}

export default App;
