import React from 'react'

const Categories = React.memo(function Categiries({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectIrem = (index) => {
        setActiveItem(index)
        onClickItem(index)
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
})

export default Categories
