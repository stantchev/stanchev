import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div 
          className="min-h-screen flex items-center justify-center bg-cyber-black text-white"
          role="alert"
          aria-live="assertive"
        >
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4 text-cyber-red">
              Възникна грешка
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Съжаляваме, но нещо се обърка. Моля, опитайте отново.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
              aria-label="Презареди страницата"
            >
              Презареди страницата
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;