import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles:[]
    };
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f58cfd82eadb45d3bfc4f4d387ff2e19')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      //console.log(myJson);
      this.setState({
        articles: myJson.articles
      })
    });
  }
  render() {
    console.log(this.state)
    return (
      <div className='container'>  
      <h1>{this.props.title}</h1>       
        <ul>
          {this.state.articles.map((item, i) => 
            <li key={i}>
              <h2>{item.title} {item.author}</h2>      
              <div><img src={item.urlToImage} width='500px' height='' /></div>
              <p>{item.description} <a href={item.url}>View More</a></p>  
            </li>)}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App title='News App using newsapi.org and fetch method' />, document.getElementById('root'));
