import React from 'react'
import list from '../component/list.css'

const List = (props) => {
    const {people} = props;
  return (
    <div>
        {people.map((person) => {
            const {id,name,age,image} = person
            return (
                <article className="person" key={id}>
                    <img src={person.image} alt="" />
                    <div className="text">
                        <h4>{person.name}</h4>
                        <p>{person.age} years old</p>
                    </div>
                </article>
            );
        })}    
    </div>
  )
}

export default List;