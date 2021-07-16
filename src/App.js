import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './styles/GlobalStyles';

import SearchBar from './Components/SearchBar';
import List from './Components/List';
import SocialMedia from './Components/SocialMedia';

import API_Youtube from './API/YoutubeAPI';
import API_TicketMaster from './API/TicketMasterAPI';
import Header from './Components/Header';


const App = () => {

  const [videosInfo, setVideosInfo] = useState([]);
  const [panel, setPanel] = useState({});  
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSearch = async query => {
    let response;
    try {
      response = [
        await API_Youtube.get("/search", {
          params: {
            q: query,
          }
        }),
        await API_TicketMaster.get("attractions.json?", {
          params: {
            keyword: query,
          }
        })]
        setAlert(false);
    }catch (e) {
      setAlert(true);
      return;
    }
    setVideosInfo(response[0].data.items);
    setPanel(response[1]);
    setLoading(false);

    console.log(videosInfo);
    console.log(panel.data);
  }

  const videos = videosInfo.map((item, index) => {
    return (
      <List 
        key={`${index}vid`}
        title={item.snippet.title}
        description={item.snippet.description}
        src={item.snippet.thumbnails.medium.url}
        alt={`thumbnail: ${item.snippet.title}`}
        video={`https://www.youtube.com/embed/${item.id.videoId}`}
      />
    )
  })

  if(loading) {
    return (
      <Container>
        <GlobalStyle />
        <Header 
          middle={<SearchBar onSearch={handleSearch} />}
          right={<SocialMedia data={panel.data} />}
        />
      </Container>
    );
  }else {
    return (
        <Container>
          <GlobalStyle />
          <Header 
            middle={<SearchBar onSearch={handleSearch} />}
            right={<SocialMedia data={panel.data} />}
          />
          <h1>{panel.data._embedded.attractions[0].name}</h1>
          <VideoBox>
            <Videos>
                {
                  videosInfo && videos
                }
              </Videos>
          </VideoBox>
        </Container>
    );
  }
}

export default App;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #FFF;
    margin: 15px 0;
    text-align: center;
  }
`;

const Videos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const VideoBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;