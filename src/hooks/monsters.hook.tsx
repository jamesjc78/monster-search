import { useEffect, useState } from "react"
import { Monster } from "../types/types"

const useMonster= () => {
    const [monsters,setMonsters ]= useState<Monster[]>([])
    const [filteredMonsters,setFilteredMonsters]= useState<Monster[]>([])

    const fetchMonsters = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response:Response)=> response.json())
      .then((monsters:Monster[])=>{
        setMonsters(monsters)
        setFilteredMonsters(monsters)})
      return (()=>{
        setMonsters([])
      })
    }

    const updateMonsterSearch = (searchEvent:any) =>{

      const searchInput = searchEvent.target.value.toLocaleLowerCase()
      setFilteredMonsters(monsters.filter((monster)=> monster.name.toLocaleLowerCase().includes(searchInput)))
    }

    useEffect(()=>{
      fetchMonsters()
    },[]);

    return {monsters,filteredMonsters, updateMonsterSearch}
}

export default useMonster