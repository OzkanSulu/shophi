import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

function List() {
    const data = [
        {
          id: 1,
          img: "img1",
          img2: "img12",
          title: "title1",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 2,
          img: "img2",
          img2: "img22",
          title: "title2",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 3,
          img: "img3",
          img2: "img32",
          title: "title3",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 4,
          img: "img4",
          img2: "img42",
          title: "title4",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
      ];
  return (
    <div className='list'>
        {data?.map(item=>{
            return(
                <Card item={item} key={item.id} />
            )
        })}
    </div>
  )
}

export default List