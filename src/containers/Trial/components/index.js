import React from 'react'
import Triallist from './Triallist'

export const Trial = ({list, total, type, showDetail}) => (
    <div>
        <Triallist
            list={list}
            total={total}
            type={type}
            showDetail={showDetail}
        />
    </div>
)

export default Trial