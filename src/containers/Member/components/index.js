import React from 'react';
import Memberlist from './Memberlist'

const Member = ({list, total, type, showDetail, pass, reject}) =>
    <div>
        <Memberlist
            list={list}
            total={total}
            type={type}
            showDetail={showDetail}
            pass={pass}
            reject={reject}
        />
    </div>

export default Member;
