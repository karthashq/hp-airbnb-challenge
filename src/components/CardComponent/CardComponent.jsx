import PropTypes from 'prop-types';


import "./CardComponent.css";

export default function CardComponent({children, style}){
    return (
    <div className="p-3 container-fluid box-shadow" style={{style}}>
        {children}
    </div>);
}

CardComponent.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object // additional style to be set to the card
}