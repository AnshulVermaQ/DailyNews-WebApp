import React, { Component } from 'react'

export class NewsItem extends Component{
 
 render(){
  let{ title, description, imageUrl, newsUrl , author, date} = this.props;
  return (
    <div className="card">
      <img src={!imageUrl?"competitive-eating-health.gif":imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className = "card-text"><small className = "text-muted">By {!author?"Unknown":author} on {date}</small></p>
        <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
 }
  }

export default NewsItem;