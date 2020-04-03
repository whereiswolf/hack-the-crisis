import React from 'react'

interface NotFoundMessageProps {}

const NotFoundMessage: React.FC<NotFoundMessageProps> = () => (
  <h3>
    Page not found <span role="img" aria-label="😢" />
  </h3>
)

export default NotFoundMessage
