import React from 'react';

export default class Main {
  render() {
    const {children} = this.props;
    return (
      <div className="row">
        {children}
      </div>
    );
  }
}
