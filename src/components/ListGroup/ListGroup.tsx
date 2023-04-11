import { useState } from "react";
import styles from './ListGroup.module.css'
import styled from 'styled-components'
import { BsCalendar3Week } from 'react-icons/bs'

const ListStyles = styled.ul`
    list-style: none;
    padding: 0
`

interface ListItemProps {
    active: boolean
}

const ListItem = styled.li<ListItemProps>`
    padding: 25px 0;
    background: ${ props => props.active ? 'pink' : 'none' }
`
interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void
}

function ListGroup() {
    // const { items, heading, onSelectItem } = props
    const items = ['Lagos', 'London', 'Amsterdam', 'Mauritius', 'New York']
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <>
            <h1>My cities</h1>
            {items.length === 0 && <p>No items found</p>}
            {/* <ul className={styles['list-group']}> */}
            <BsCalendar3Week color="red" size={40} />
            <ListStyles
            // className={[styles.listGroup, styles.container].join(' ')}
            >
                {items.map((item, index) => 
                    <ListItem key={item}
                        active={index === selectedIndex}
                        // className={ selectedIndex === index ? "list-group-item active" : "list-group-item" }
                        onClick={() => { setSelectedIndex(index); }} 
                    >
                        {item}
                    </ListItem>
                )}
            </ListStyles>
        </> 
    )
}

export default ListGroup