import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import 'typeface-roboto';

const NamesList = (props) => {
    return (
        <List>
            {
                props.names.length > 0 &&
                props.names.map((name, i) =>
                    <li key={name + i}>
                        <ListItemText primary={name} />
                    </li>)
            }
            {
                props.names.length === 0 &&
                (<li><ListItemText primary="No Names..." /></li>)
            }
        </List>
    )
}

export default NamesList;