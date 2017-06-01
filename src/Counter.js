import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from './actions'
import { ReactDataGrid } from 'flexicious-react-datagrid'
import { ApiStyles } from 'flexicious-react-datagrid-styles'

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrease: () => {
      dispatch(increase())
    },
    onDecrease: () => {
      dispatch(decrease())
    }
  }
}

const Counter = ({ onIncrease, onDecrease, data }) => (
  <div>
    <button onClick={onIncrease}>Add Item</button>
    <button onClick={onDecrease}>Remove Item</button>
    
    <ReactDataGrid dataProvider={data.items}/>
  </div>
)

Counter.propTypes = {
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)