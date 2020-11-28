import React, {Component} from 'react';
import Header from "./Header";
import './main-page.css';
import FeaturedHouse from "./FeaturedHouse";
import HouseFilter from "./HouseFilter";

class App extends Component {

    state = {};

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = () => {
        fetch("/houses.json")
            .then(resp => resp.json())
            .then(allHouses => {
                this.allHouses = allHouses;
                this.determineFeaturedHouse();
                this.determineUniqueCountries();
            });
    };

    determineFeaturedHouse = () => {
        if (this.allHouses) {
            const randomIndex = Math.floor(Math.random() * this.allHouses.length);
            const featuredHouse = this.allHouses[randomIndex];
            this.setState({featuredHouse});
        }
    };

    determineUniqueCountries = () => {
        const countries = this.allHouses
            ? Array.from(new Set(this.allHouses.map(h => h.country)))
            : [];
        countries.unshift(null);
        this.setState({ countries });
    }

    filterHouses = (country) => {
        this.setState({ activeHouse: null });
        const filteredHouses = this.allHouses.filter((h) => h.country === country);
        this.setState({ filteredHouses });
        this.setState({ country });
    }

    setActiveHouse = (house) => {
        this.setState({ activeHouse: house });
    }

    render() {
        return (
            <div className="container">
                <Header title="Providing houses all over the world "/>
                <HouseFilter filterHouses={this.filterHouses} countries={this.state.countries}/>
                <FeaturedHouse house={this.state.featuredHouse}/>
            </div>
        );
    }
}

export default App;