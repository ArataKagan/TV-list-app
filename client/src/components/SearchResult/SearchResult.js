import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

class SearchResult extends Component {
    state = {
        results: []
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=fb6a1d3f38c3d97f67df6d141f936f29&language=en-US&query=${this.props.match.params.keyword}`)
            .then(responses => {
                console.log('[SearchResult]', responses);
                this.setState({
                    results: responses.data.results
                })
            })
    }

    render(){
        const searchResults = this.state.results.map(result => {
            return(
              <article className="ResultCard" key={result.id} >
                <Link to={`/tv/${result.id}`} key={result.id}>
                  <p>{result.name}</p>
                </Link>
              </article>  
            );
        })

        return(
            <div>
                <section className="searchResults">
                    {searchResults}
                </section>
            </div>
        );
    }
}

export default SearchResult;