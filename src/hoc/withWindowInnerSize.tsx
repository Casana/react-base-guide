import React, {Component} from 'react'

type WindowSizeProps = {
    innerWidth: number,
    innerHeight: number
}

// Tipado del wrapper
type wrappedComponentClass = new (windowProps: WindowSizeProps) => Component<WindowSizeProps | {}, {}>;

export const withWindowInnerSize = (WrappedComponent: wrappedComponentClass) => {
    return class extends WrappedComponent {
        constructor() {
            super({innerHeight: 100, innerWidth: 400})
            const {innerHeight, innerWidth} = window;
            this.state = {innerHeight, innerWidth};

            this.handleResize = this.handleResize.bind(this);
        }

        componentDidMount() {
            window.addEventListener('resize', this.handleResize)
        }
        handleResize() {
            const {innerHeight, innerWidth} = window;
            this.setState({innerHeight, innerWidth});
        }

        render() {
            return <WrappedComponent {...this.props} {...this.state} />
        }
    }
}