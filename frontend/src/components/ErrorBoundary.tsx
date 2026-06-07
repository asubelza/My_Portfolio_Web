'use client';

import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="max-w-md w-full bg-surface-elevated border border-border rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-error/20 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-error" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Algo salió mal</h2>
            <p className="text-muted mb-6">
              {this.state.error?.message || 'Ha ocurrido un error inesperado'}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Reintentar
              </button>
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary transition-colors"
              >
                <Home className="w-4 h-4" />
                Inicio
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}