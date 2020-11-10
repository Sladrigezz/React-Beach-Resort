import React from 'react'
import RoomFilter from './RoomFilter.jsx'
import RoomList from './RoomList.jsx'
import {withRoomConsumer} from '../context'
import Loading from './Loading.jsx'

function RoomContainer({context}) {
  const {loading, sortedRooms, rooms} = context
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <>
      <RoomFilter rooms={rooms}></RoomFilter>
      <RoomList rooms={sortedRooms}></RoomList>
    </>
  )
}

export default withRoomConsumer(RoomContainer)

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const {loading, sortedRooms, rooms} = value
//         if (loading) {
//           return <Loading></Loading>
//         }
//         return (
//           <div>
//             <RoomFilter rooms={rooms}></RoomFilter>
//             <RoomList rooms={sortedRooms}></RoomList>
//           </div>
//         )
//       }}
//     </RoomConsumer>
//   )
// }