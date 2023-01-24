import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./item.css"


export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } = this.props;

    return (
      
            
        <div className="card" style={{ width: '18rem' }}>
            <img className='card-img-top' src={imageUrl} alt='...'/>
            <div className='card-body'>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                 {description}
                </Card.Text>
                <a href={url} target="_black" className='btn btn-sm btn-primary'>Read more</a>
            </div>
        </div> 


    
    )
  }
}

export default NewsItem