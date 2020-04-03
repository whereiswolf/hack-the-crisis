import React from 'react'

interface LoaderProps {
  error: Error
}

const Loader: React.FC<LoaderProps> = ({ error }) =>
  error ? <h3>Oh nooess!</h3> : <h3>Loading...</h3>

export default Loader
