import React, {Component} from 'react'
import {withWindowInnerSize} from './withWindowInnerSize'

type WindowSizeProps = {
    innerWidth: number,
    innerHeight: number
}

type ConBordeState = {
    width: number,
    height: number
}

export class ComponenteConBorde extends Component<WindowSizeProps, ConBordeState> {
    constructor(props: WindowSizeProps) {
        super(props);
        console.log(props)
    }

    componentDidUpdate() {

    }

    render() {
        const estilo = {
            border: '1px solid black',
            margin: '25px auto',
            backgroundColor: 'blue',
            width: Math.floor(this.props.innerWidth/2),
            height: Math.floor(this.props.innerHeight/2)
        } 
        return <div style={estilo}></div>
    }
}

export const ComponenteConBordeWithInnerSize = withWindowInnerSize(ComponenteConBorde)
