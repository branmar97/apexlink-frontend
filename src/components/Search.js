import React, { Component } from 'react';
import Lobbies from './Lobbies';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: '',
            searchPlatform: 'all',
            searchGamemode: 'all',
            searchRegion: 'all'
         }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    nameFilter = (lobby) => {
        if (this.state.searchTerm === '') {
            return lobby 
        } else if (lobby.gamertag.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
            return lobby
        }
    }

    regionFilter = (lobby) => {
        if (this.state.searchRegion === 'all') {
            return lobby 
        } else if (lobby.region.toLowerCase().includes(this.state.searchRegion.toLowerCase())) {
            return lobby 
        }
    }

    platformFilter = (lobby) => {
        if (this.state.searchPlatform === 'all') {
            return lobby 
        } else if (lobby.platform.toLowerCase().includes(this.state.searchPlatform.toLowerCase())) {
            return lobby 
        }
    }

    gamemodeFilter = (lobby) => {
        if (this.state.searchGamemode === 'all') {
            return lobby 
        } else if (lobby.gamemode.toLowerCase().includes(this.state.searchGamemode.toLowerCase())) {
            return lobby 
        }
    }

    filteredLobbies = () => {
        return this.props.lobbies.filter(this.nameFilter).filter(this.regionFilter).filter(this.platformFilter).filter(this.gamemodeFilter)
    }

    render() { 
        const renderLobbies = () => {
            if (this.filteredLobbies().length > 0) {
                return (
                    <Lobbies lobbies={this.filteredLobbies()} />
                )
            } else {
                return (
                    <div>
                        <h2 className='text-center text-white h-screen px-4 max-w-6xl mx-auto bg-transparent mt-16'>There are no lobbies to display.</h2>
                    </div>
                )
            }
        }
        return ( 
            <div className='px-4 max-w-6xl mx-auto mt-16 bg-transparent'>
                <h2 className='font-bold text-2xl uppercase mb-6'>Browse Lobbies</h2>

                <form>
                    <div class="flex flex-wrap -mx-4 mb-2">
                        <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className='block uppercase tracking-wide text-white text-xs font-bold mb-2' htmlFor='regionText'>Name</label>

                            <input 
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            type='text' 
                            name='searchTerm' 
                            value={this.state.searchTerm} 
                            placeholder='Search...' 
                            onChange={this.handleOnChange} />
                        </div>

                        <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className='block uppercase tracking-wide text-white text-xs font-bold mb-2' htmlFor='regionText'>Region</label>
                            <div class="relative">
                                <select 
                                className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                name='searchRegion'
                                onChange={this.handleOnChange}
                                >
                                    <option value='all'>All</option>
                                    <option value='united states'>United States</option>
                                    <option value='canada'>Canada</option>
                                    <option value='united kingdom'>United Kingdom</option>
                                </select>
                            </div>
                        </div>

                        <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className='block uppercase tracking-wide text-white text-xs font-bold mb-2' htmlFor='regionText'>Platform</label>
                            
                            <select 
                            className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            name='searchPlatform'
                            onChange={this.handleOnChange}
                            >
                                <option value='all'>All</option>
                                <option value='pc'>PC</option>
                                <option value='xbox'>Xbox</option>
                                <option value='playstation'>Playstation</option>
                            </select>
                        </div>

                        <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className='block uppercase tracking-wide text-white text-xs font-bold mb-2' htmlFor='regionText'>Gamemode</label>
                            
                            <select 
                            className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            name='searchGamemode'
                            onChange={this.handleOnChange}
                            >
                                <option value='all'>All</option>
                                <option value='duos'>Duos</option>
                                <option value='trios'>Trios</option>
                                <option value='ranked'>Ranked</option>
                            </select>
                        </div>
                    </div>
                </form>
                
                {renderLobbies()}
            </div>
         );
    }
}
 
export default Search;