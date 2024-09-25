import React from 'react'

const Context = React.createContext({
  theme: false,
  changeTheme: () => {},
  savedList: [],
})

export default Context
