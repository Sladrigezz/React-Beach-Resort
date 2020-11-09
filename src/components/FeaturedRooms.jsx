import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading.jsx'
import Room from './Room.jsx'
import Title from './Title.jsx'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let { loading, featuredRooms: rooms } = this.context
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}></Room>
        })

        return (
            <section className="featured-rooms">
                <Title title="featured rooms"></Title>
                <div className="featured-rooms-center">
                    {loading ? <Loading></Loading> : rooms}
                </div>
            </section>
        )
    }
}