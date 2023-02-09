import React from 'react'
import './Cards.css';
import { useState } from 'react';

import TinderCard from 'react-tinder-card'

function Cards() {
    const [people] = useState([
        {
            name:'Luffy',
            url:'https://i.pinimg.com/474x/1c/86/09/1c860905d1b07bffa020e0849ab2e8e8.jpg'
        },
        {
            name:'Zoro',
            url:'https://i.pinimg.com/736x/76/3f/40/763f40f9d25100d688e71d91e03ad07a.jpg'
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing', nameToDelete);
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name, " left the screen")
    }

    return (
    <div className='cards'>
        <div className='cards__cardContainer'>
            {people.map[(person) => {
                <TinderCard className='swipe' id={person.name}
                  preventSwipe={['up','down']}
                  onSwipe={(dir) => swiped(dir, person.name)}
                  onCardLeftScreen={()=>outOfFrame(person.name)}>
                    <div style={{ backGroundImage:`url(${person.url})`}}
                      className='card'>
                        <h3>person.name</h3>
                      </div>
                </TinderCard>
            }]}
        </div>
    </div>
    )
}

export default Cards
