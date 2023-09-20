import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'api';
import { generator } from 'pages/MovieDetails/MovieDetails';
import { ListActors, ItemActors, TextActors, ImgActors } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actorList, setActorList] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    axios
      .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(({ data }) => setActorList(data.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  

  return (
    <>
      <ListActors>
              {actorList.length > 0 ?(
                  actorList.map(actor => (
          <ItemActors key={actor.id}>
            <ImgActors
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : generator.generateRandomAvatar()
              }
              alt={actor.name}
            />
            <TextActors>{actor.name}</TextActors>
            <TextActors>{actor.character}</TextActors>
          </ItemActors>
                  ))
              ) : (
                      <p>We don't have any actors information</p>
              )
    }
              
      </ListActors>
    </>
  );
};

export default Cast;