import PropTypes from 'prop-types'
import '../styles/globals.css'

function Item({ title, iconClass }) {
  return (
    <div className="item">
      {iconClass}
      <p className="sevices-paragraf">{title}</p>
    </div>
  )
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired
}

export default Item
