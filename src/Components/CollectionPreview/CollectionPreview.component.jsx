import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './CollectionPreview.styles.scss'

export default function CollectionPreview({title,items}) {
    return (
        <div className='collection-preview'>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((value, index) => index < 4).map(({id , ...OtherItemProp }) => (
                        <CollectionItem key={id} {...OtherItemProp} />
                    ))
                }
            </div>
            
        </div>
    )
}

 