import React, { Component } from 'react'

export class Article extends Component {
    render() {
        const prix = isNaN(this.props.prixNom) ? (this.props.prixNom) : (this.props.prixNom + "€")
        return (
            <div>
                <h1>Article: {this.props.nom}</h1>
                <span>Prix: {prix}</span>
            </div>
        )
    }
}

export default Article
