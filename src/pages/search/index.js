import React, {useState} from "react";
import axios from "axios";
import './search.styl'
import Header from '../../components/header'
import {Input} from 'antd';
import {Button} from 'antd'


function SearchInput() {
    const [searchValue, setSearchValue] = useState("");
    //Initialize default data
    const [list, setData] = useState([
        {
            source: {
                id: "new-scientist",
                name: "New Scientist",
            },
            author: "Karmela Padavic-Callaghan",
            title:
                "Plastic bottles can be recycled into energy-storing supercapacitors",
            description:
                "Supercapacitors are charged like a battery but release their energy more rapidly – and some of their components can now be built from old plastic bottles",
            url: "https://www.newscientist.com/article/2388697-plastic-bottles-can-be-recycled-into-energy-storing-supercapacitors/",
            urlToImage:
                "https://images.newscientist.com/wp-content/uploads/2023/08/23172508/SEI_168561319.jpg",
            publishedAt: "2023-08-23T20:00:17Z",
            content:
                "We throw away billions of plastic bottles each year, but they could be turned into useful electronics components instead\r\nShutterstock/photka\r\nPlastic bottles can be upcycled into parts for supercapa… [+375 chars]",
        },
        {
            source: {
                id: null,
                name: "Grist",
            },
            author: "Kate Yoder",
            title: "Do you have ‘recycling bias’?",
            description:
                "Decades of messaging urging us to recycle crowded out other options — like consuming less in the first place.",
            url: "http://grist.org/regulation/recycling-bias-study-waste-prevention/",
            urlToImage:
                "https://grist.org/wp-content/uploads/2023/08/recycling-dumpster-sign.jpg",
            publishedAt: "2023-08-03T10:15:00Z",
            content:
                "It might be time to throw your preconceptions about recycling in the garbage. A decades-long effort to educate people about recycling has mostly backfired, according to new research. \r\nThe study, pub… [+3881 chars]",
        },
        {
            source: {
                id: null,
                name: "My Modern Met",
            },
            author: "Madeleine Muzdakis",
            title: "25,000 Pounds of Trash Removed From Ocean in Just One Extraction",
            description:
                "25,000 Pounds of Trash Removed From Ocean in Just One Extraction\nPlastic in the ocean is a huge environmental problem that affects everyone. From the microplastics that make their way into human and animal bodies to the trash which chokes vegetation and wildl…",
            url: "https://mymodernmet.com/the-ocean-cleanup-plastic/",
            urlToImage:
                "https://mymodernmet.com/wp/wp-content/uploads/2023/08/garbage-patch-cleanup-thumbnail.jpg",
            publishedAt: "2023-08-22T16:35:12Z",
            content:
                "System 002 being tested in 2021 in the Great Pacific Garbage Patch. (Photo: The Ocean Cleanup)\r\nPlastic in the ocean is a huge environmental problem that affects everyone. From the microplastics that… [+3183 chars]",
        },
    ]);
    //The value returned by the input box change event is stored
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };
    // Events triggered by clicking the search button
    const handleSearch = () => {
        axios
            .get(
                `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=a19e03e3fe484881805f31ce994dbcd6&pageSize=10`
            )
            .then((res) => {
                setData(res.data.articles);
                console.log(JSON.stringify(res.data.articles.splice(0, 3)));
            });

    };


    return (<div className="P-home">
            <Header/>
            <div className="App">
                <div className="search text-center">
                    <span>
                    <Input className="input"
                           type="text"
                           value={searchValue}
                           onChange={handleInputChange}/>
                    <Button className="inputbtn" onClick={handleSearch} type="primary">search</Button>
</span>
                    {/* Display of requested data */}
                    {list.map((i) => (<div
                        className="flex-w"
                        key={i.publishedAt}
                        onClick={() => {
                            // Click on the list to jump to the relative news
                            window.location.href = i.url;
                        }}
                    >
                        <img className="left_img" src={i.urlToImage}/>
                        <div className="rigth_box">
                            <h2>{i.title}</h2>
                            <span>{i.description}</span>
                        </div>
                    </div>))} </div>

            </div>
        </div>
    );
}

export default SearchInput;
