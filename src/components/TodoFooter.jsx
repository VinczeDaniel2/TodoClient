import React from 'react'

export const TodoFooter = ({nrTask}) => {
    
  return (
    <div>
        <footer style={{position:"fixed", bottom:"2px", right:"2px"}}>
            {nrTask} todos left
        </footer>
    </div>
  )
}