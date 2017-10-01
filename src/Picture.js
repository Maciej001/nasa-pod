import React, {Component} from 'react';

const API_KEY = "LbFYO3SNWbNiztw71oMQpzChpytNi5uFxhKe7ZR0";
const API = "https://api.nasa.gov/planetary/apod?";

class Picture extends Component {
  state = {
    title: "",
    explanation: "",
    url: ""
  }

  componentDidMount() {
    this.fetchData(this.props.date);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.date);
  }

  fetchData = (date) => {
    const query = API + `date=${date}&api_key=${API_KEY}`
    fetch( query )
      .then(response => response.json())
      .then( data => {
        this.setState({
          title: data.title,
          explanation: data.explanation,
          url: data.url
        })
      })
  }

  render() {
    const {title, explanation, url } = this.state;
    
    return (
      <div className='picture-day'>
        <h2>{title}</h2>
        <img src={url} alt={title}/>
        <p>{explanation}</p>
      </div>
    );
  }
}

export default Picture;
