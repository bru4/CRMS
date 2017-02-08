import React from 'react';
import Memberlist from './Memberlist'

const Member = ({list, total, type, showDetail}) =>
    <div>
        <Memberlist
            list={list}
            total={total}
            type={type}
            showDetail={showDetail}
        />
    </div>

export default Member;
