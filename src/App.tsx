
import './App.css';
import { useEffect, useState } from 'react';
import { Monster } from './types/types';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export default function App() {

  const [monsters,setMonsters ]= useState<Monster[]>([])
  const [filteredMonsters,setFilteredMonsters]= useState<Monster[]>([])

  const updateMonsterSearch = (searchEvent:any) =>{

    const searchInput = searchEvent.target.value.toLocaleLowerCase()
    setFilteredMonsters(monsters.filter((monster)=> monster.name.toLocaleLowerCase().includes(searchInput)))
  }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response:Response)=> response.json())
    .then((monsters:Monster[])=>{
      setMonsters(monsters)
      setFilteredMonsters(monsters)});
    return (()=>{
      setMonsters([])
    })
  },[]);

  

  return (
    <div className="App">
      <h1 className='app-title'>Monster Search</h1>
       <SearchBox placeholder='Search monsters' onChangeHandler={updateMonsterSearch}/>
       <CardList monsters = {filteredMonsters}/>
    </div>
  );
}  
