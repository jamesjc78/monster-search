
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import useMonster from './hooks/monsters.hook'

export default function App() {

  const {filteredMonsters,updateMonsterSearch} = useMonster()

  return (
    <div className="App">
      <h1 className='app-title'>Monster Search</h1>
       <SearchBox placeholder='Search monsters' onChangeHandler={updateMonsterSearch}/>
       <CardList monsters = {filteredMonsters}/>
    </div>
  )
}  
