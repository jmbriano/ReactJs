import React, { Component } from 'react';
import { SocialCard } from './SocialCard';
import './App.css';
import userImage from './imgs/user.jpg';
import mainImage from './imgs/landscape.jpeg';


class App extends Component {
  render() {
    let data = {
      date: "Aug 15, 2018",
      user: {
        src: userImage,
        alt: "Logged User",
        username: "Nemo",
        account: "@jmbriano"
      },
      header: {
        text: "This is my first media card in react. I started by following a tutorial by @dceddia at https://daveceddia.com/react-practice-projects/ and made my own implementation",
        author: "@jmbriano"
      },
      image: {
        src: mainImage,
        caption: {
          title: "In storm times, find your relaxing place",
          description: "The mountains can help finding yourself, what you like, what makes you happy. The contact with nature can help here"
        },
        author: "Photo by unknown artist"
      },
      social:{
      }
    }

    return (<SocialCard data={data}/>);
  }
}

export default App;
