import React, { useState } from 'react';
import Lobbies from './Lobbies';

const Search = ({ lobbies }) => {
    const [formData, setFormData] = useState(
        {
            searchTerm: "",
            searchPlatform: "all",
            searchGamemode: "all",
            searchRegion: "all"
        }
    )

    const handleOnChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const nameFilter = lobby => {
        if (formData.searchTerm === '') {
            return lobby 
        } else if (lobby.gamertag.toLowerCase().includes(formData.searchTerm.toLowerCase())) {
            return lobby
        }
    }

    const regionFilter = lobby => {
        if (formData.searchRegion === 'all') {
            return lobby 
        } else if (lobby.region.toLowerCase().includes(formData.searchRegion.toLowerCase())) {
            return lobby 
        }
    }

    const platformFilter = lobby => {
        if (formData.searchPlatform === 'all') {
            return lobby 
        } else if (lobby.platform.toLowerCase().includes(formData.searchPlatform.toLowerCase())) {
            return lobby 
        }
    }

    const gamemodeFilter = lobby => {
        if (formData.searchGamemode === 'all') {
            return lobby 
        } else if (lobby.gamemode.toLowerCase().includes(formData.searchGamemode.toLowerCase())) {
            return lobby 
        }
    }

    const filteredLobbies = () => {
        return lobbies.filter(nameFilter).filter(regionFilter).filter(platformFilter).filter(gamemodeFilter)
    }

    const renderLobbies = () => {
        if (filteredLobbies().length > 0) {
            return (
                <Lobbies lobbies={filteredLobbies()} />
            )
        } else {
            return (
                <div>
                    <h2 className='text-center text-white h-screen px-4 max-w-6xl mx-auto mt-16'>There are no lobbies to display.</h2>
                </div>
            )
        }
    }

    return ( 
        <div className='justify-center max-w-6xl mx-auto'>
            <h2 className='font-bold text-2xl uppercase mb-6'>Browse Lobbies</h2>

            <form>
                <div className="flex flex-wrap mb-2">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <label className='block uppercase tracking-wide text-white text-xs font-bold mb-2' htmlFor='regionText'>Name</label>

                        <input 
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        type='text' 
                        name='searchTerm' 
                        value={formData.searchTerm} 
                        placeholder='Search...' 
                        onChange={handleOnChange} />
                    </div>

                    <div className="w-full md:w-1/4 lg:pl-2 mb-6 md:mb-0">
                        <label className='block uppercase tracking-wide text-white text-xs font-bold mb-2' htmlFor='regionText'>Region</label>
                        <div className="relative">
                            <select 
                            className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            name='searchRegion'
                            onChange={handleOnChange}
                            >
                                <option value='all'>All</option>
                                <option value='united states'>United States</option>
                                <option value='canada'>Canada</option>
                                <option value='united kingdom'>United Kingdom</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 lg:pl-2 mb-6 md:mb-0">
                        <label className='block uppercase tracking-wide text-white text-xs font-bold mb-2' htmlFor='regionText'>Platform</label>
                        
                        <select 
                        className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        name='searchPlatform'
                        onChange={handleOnChange}
                        >
                            <option value='all'>All</option>
                            <option value='pc'>PC</option>
                            <option value='xbox'>Xbox</option>
                            <option value='playstation'>Playstation</option>
                        </select>
                    </div>

                    <div className="w-full md:w-1/4 lg:pl-2 mb-6 md:mb-0">
                        <label className='block uppercase tracking-wide text-white text-xs font-bold mb-2' htmlFor='regionText'>Gamemode</label>
                        
                        <select 
                        className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        name='searchGamemode'
                        onChange={handleOnChange}
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
 
export default Search;