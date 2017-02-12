import { connect } from 'react-redux'
import React from 'react'
import { Form } from 'antd'

const Option = (props) => {
    return(
        <div>
            <Form />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

export default connect(
    mapStateToProps,
)(Option)