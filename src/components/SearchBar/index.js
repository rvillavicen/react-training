import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { SearchBarInput, SearchBarContainer } from './styled'

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
    const { showIcon } = this.props;
    return(
      <SearchBarContainer>
        <SearchBarInput placeholder="Search mail..." value={this.state.searchValue} onChange={this.handleOnChange} />
      </SearchBarContainer>
    )
  }
}

SearchBar.propTypes = {
  showIcon: PropTypes.bool
}

export default SearchBar;