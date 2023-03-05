import React from 'react'

function CardList({ list }) {
    return (
        <div className='row container'>
            {list && list.map((item) => {
                return (
                    <div key={item.id} className="col-md-3">
                        <div className="card">
                            <img src={item.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.body}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardList