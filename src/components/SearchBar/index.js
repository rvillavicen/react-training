import React, { PureComponent } from 'react'
import { SearchBarInput, SearchBarContainer, SearchIcon } from './styled'
import { FaSearch } from 'react-icons/fa'

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
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <SearchBarInput placeholder="Search mail..." value={this.state.searchValue} onChange={this.handleOnChange} />
      </SearchBarContainer>
    )
  }
}

export default SearchBar;