import React from 'react'
import { UglyThingsContextConsumer } from './UglyThingsContext'
import { Card } from '../components/Card'

export function UglyThings() {
    return (
        <>
            <UglyThingsContextConsumer>
                {
                    ({uglyThingsArr}) => {
                        const submittedUglyThings = uglyThingsArr.map((item) => 
                        <Card 
                        key={item._id} 
                        item={item}
                        />
                    )
                        return submittedUglyThings
                    }    
                }
            </UglyThingsContextConsumer>
        </>
    )
}
