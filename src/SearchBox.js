import React, {Fragment} from 'react';

const SearchBox = ({SearchField, searchChange}) =>  {
  return (
    <Fragment className='pa2'>
       <input className ='pa3 ba b--green bg-lightest-blue' type="text" placeholder="Search a robot" onChange={searchChange}></input>
    </Fragment>
  )
}

export default SearchBox;