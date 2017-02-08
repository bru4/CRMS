import React from 'react';
import Feedbacklist from './Feedbacklist'

const Feedback = ({list, total, type, showDetail}) =>
    <div>
        <Feedbacklist
            list={list}
            total={total}
            type={type}
            showDetail={showDetail}
        />
    </div>

export default Feedback;