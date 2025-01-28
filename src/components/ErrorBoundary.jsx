import {Component} from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {hasError: false, errorMessage: ''}
  }

  static getDerivedStateFromError(error) {
    return {hasError: true, errorMessage: error.message}
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo)
  }

  render() {
    const {hasError, errorMessage} = this.state
    if (hasError) {
      return (
        <div>
          <h2>Error occurred:</h2>
          <p>{errorMessage}</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
