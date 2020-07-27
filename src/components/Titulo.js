import React from "react";
import PropTypes from "prop-types";
import "./Titulo.css";    

function Título({children, cor}) { 
    return (
    <h1 className={cor}>
         {children} {cor}
        Gin  </h1>
    );
}

Título.propTypes = {
    children: PropTypes.node.isRequired,
    cor: PropTypes.oneOf(["vermelho", "azul", "verde", "roxo", "laranja"])
};

Título.defaultProps = {
    cor: "laranja "
}

export default Título;