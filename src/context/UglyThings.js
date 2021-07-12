import React from 'react'
import { UglyThingsContextConsumer } from './UglyThingsContext'
import { Card } from '../components/Card'

export function UglyThings() {
    return (
        <>
            <UglyThingsContextConsumer>
                {
                    ({uglyThingsArr}) => {
                        const submittedUglyThings = uglyThingsArr.map((item, index) => 
                        <Card 
                        key={index} 
                        item={item}
                        id={item._id} 
                        />
                    )
                        return submittedUglyThings
                    }    
                }
            </UglyThingsContextConsumer>
        </>
    )
}
