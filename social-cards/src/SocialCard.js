import React from 'react';
import './SocialCard.css';

/* TODO: inline links replacement */
/* TODO: hide blocks not present in data object */
/* TODO: encapsulate the header and the image in two subclasses */
/* TODO: social media footer */

export class SocialCard extends React.Component {
  render() {
    return (
      <div className="social-card">
        <div className="user-icon">
          <img src={this.props.data.user.src} alt={this.props.data.user.alt}/>
        </div>
        <div className="card-content">
          <div className="card-header">
            <div className="card-header-title">
              <span className="user-name">{this.props.data.user.username}</span>
              <span className="user-account">{this.props.data.user.account}</span>
              <span className="card-date">{this.props.data.date}</span>
            </div>
            <div className="card-header-description">
              <span>{this.props.data.header.text}</span>
            </div>
            <div className="card-header-author">
              <span>author: {this.props.data.header.author}</span>
            </div>
          </div>
          <div className="card-image-box">
            <div className="card-main-image">
              <img src={this.props.data.image.src} alt={this.props.data.image.title}/>
            </div>
            <div className="caption-title">
              <span>{this.props.data.image.caption.title}</span>
            </div>
            <div className="caption-text">
              <span>{this.props.data.image.caption.description}</span>
            </div>
            <div className="caption-footer">
              <span>{this.props.data.image.author}</span>
            </div>
          </div>
          <div className="social-media-footer">
            {/* ToDo */}
          </div>
        </div>
      </div>
    );
  }
}
