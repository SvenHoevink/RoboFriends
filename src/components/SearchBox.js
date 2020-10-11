import React, {Fragment} from 'react';

const SearchBox = ({SearchField, searchChange}) =>  {
  return (
    <Fragment>
      <div className='pa2'>
      <input className ='pa3 ba b--green bg-lightest-blue' type="text" placeholder="Search a robot" onChange={searchChange}></input>
      </div>
      
    </Fragment>
  )
}

export default SearchBox;