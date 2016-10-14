import 'babel-polyfill'
import Remarkable from 'remarkable'
import React from 'react'
import ReactDom from 'react-dom'

const IndexBox = require('./Index.jsx')

ReactDom.render((
    <div>
        <IndexBox/>
    </div>
), document.getElementById('index'));
