import { Component } from 'react';
import styles from './ErrorBoundary.module.css';

// Must be a class component — React has no hook equivalent for error boundaries.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console -- intentional: surfaces render errors in production without a monitoring service wired up yet
    console.error('Unhandled render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <p className={styles.heading}>Something went wrong.</p>
          <p className={styles.description}>Please refresh the page. If the problem continues, give us a call.</p>
          <button type="button" className={styles.button} onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
