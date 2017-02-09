import React from 'react'
import Triallist from './Triallist'
import Trialreview from './Trialreview'

export const Trial = ({list, total, type, showDetail}) => (
    <div>
    {
        type==='all'?
        <Triallist
            list={list}
            total={total}
            showDetail={showDetail}
        />:
        <Trialreview
            list={list}
            total={total}
            showDetail={showDetail}
        />
    }
    </div>
)

export default Trial