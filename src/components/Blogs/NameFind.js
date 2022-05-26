import React from 'react';

const NameFind = () => {

    const arr =
        [{ name: "abc", items: ["itemA", "itemB", "itemC"], days: 138 },
        { name: "def", items: ["itemA1", "itemB2", "itemC1"], days: 157 },
        { name: "hfg", items: ["itemAN", "itemB7", "itemC7"], days: 189 }
        ]
    //----------------    
    const handleSearch = (arr, searchInput) => {
        const filteredData = arr.filter(value => {
            const searchStr = searchInput.toLowerCase();
            const nameMatches = value.name.toLowerCase().includes(searchStr);
            const daysMatches = value.days.toString().includes(searchStr);
            const oneItemMatches = value.items.some(item => item.toLowerCase().includes(searchStr));

            return nameMatches || daysMatches || oneItemMatches;
        });
        console.log(filteredData);
        //this.setState({ list: filteredData });
    }

    return (
        <div>

        </div>
    );
};

export default NameFind;