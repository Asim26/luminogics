import React from 'react';
import Header from './Header';

import {connect} from 'react-redux'

function Contact(props) {
    console.log('contact props',props)
    return (
        <div>
            <Header/>
            <h1>Contact</h1>

        </div>
    )
}

const mapStateToProps=state=>({
    data:state
})


export default connect(mapStateToProps,null)(Contact)
// export default Contact
