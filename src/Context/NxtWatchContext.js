import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  changeTheTheme: () => {},
})

export default NxtWatchContext
