import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SearchBarInput, SearchBarContainer, SearchIcon } from './styled'

class SearchBar extends PureComponent {
  state = {
    searchValue: ''
  }

  handleOnChange = e => {
    this.setState({
      searchValue: e.target.value
    })
  }


  render() {
    return(
      <SearchBarContainer>
        <SearchIcon role="img" ariaLabel="looking glass icon">🔎</SearchIcon>
        <SearchBarInput placeholder="Search mail..." value={this.state.searchValue} onChange={this.handleOnChange} />
      </SearchBarContainer>
    )
  }
}

export default SearchBar;