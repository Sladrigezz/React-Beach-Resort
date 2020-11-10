import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title.jsx'

const getUniqueItems = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({rooms}) {
  const context = useContext(RoomContext)
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context

  let types = getUniqueItems(rooms, 'type')
  types = ['all', ...types]
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })

  return (
    <section className="filter-contaoner">
      <Title title="search rooms"></Title>
      <form className="filter-form">
        {/*select type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}>
            {types}
          </select>
        </div>
        {/*end select type*/}
      </form>
    </section>
  )
}