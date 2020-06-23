import React, { Component } from 'react'
import SHOP_DATA from './Shop.data'
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview.component'


export default class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = SHOP_DATA
    }
    render() {
        const collections = this.state
        return (
            <div>
                {
                    collections.map(({id ,...otherSelection} )=>( 
                        <CollectionPreview key={id} {...otherSelection} />
        ))
                }
            </div>
        )
    }
}
