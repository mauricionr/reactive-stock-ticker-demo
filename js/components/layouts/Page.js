import React from 'react';

export default class Page {
  render() {
    const {children} = this.props;
    return (
      <main className="container">
        {children}
      </main>
    );
  }
}
