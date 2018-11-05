import React from 'react'

const HomePage = () => {
  const technologiesList = ['React', 'Redux', 'Thunk', 'Webpack', 'Jest', 'Enzyme', 'Standard']
  return (
    <div>
      <h1>React Boilerplate</h1>

      <h2>Some of the tech used: </h2>
      <ul>
        {
          technologiesList.map((technology, index) =>
            <li key={index}>{technology}</li>
          )
        }
        <li>
          <a href='https://github.com/kuhanloh/react-playground/blob/master/package.json' target='_blank'>
            Full list here
          </a>
        </li>

      </ul>
    </div>
  )
}

export default HomePage
