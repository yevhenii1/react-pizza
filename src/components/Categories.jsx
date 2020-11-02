import React from 'react'

function Categories({ items }) {
    const [activeItem, setActiveItem] = React.useState(null)
    const onSelectIrem = (index) => {
        setActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectIrem(null)} >Все</li>
                {items &&
                    items.map((item, index) => (
                        <li
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectIrem(index)}
                            key={`${item}_${index}`}
                        >
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Categories
