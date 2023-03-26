import React, { useEffect, useState } from 'react';
import axios from 'axios';
import X from '../../assets/X.png';
import person from '../../assets/profile.webp';
import { Informations, PPerfil, PersonPicture, Email, ContainerComments, Main, Posts, Header, ContainerPosts, Input, CloseButton, P, H2 } from './styles';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Home() {
  const [titles, setTitles] = useState([]);
  const [names, setNames] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalTwoOpen, setmodalTwoOpen] = useState(false);
  const [renderModal, setRenderModal] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openTwoModal() {
    setmodalTwoOpen(true);
  }

  function closeTwoModal() {
    setmodalTwoOpen(false);
  }

  useEffect(() => {
    async function getAPI() {
      const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const dataTwo = await axios.get('https://jsonplaceholder.typicode.com/users');
      const dataTree = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setTitles(data.data.sort(() => Math.random() - 0.5));
      setNames(dataTwo.data);
      setComments(dataTree.data);
    }

    getAPI();
  }, []);

  const filteredTitles = titles.filter((title) =>
    title.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    names.find((name) => name.id === title.userId).name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Main>
      <Header>
        <h1>BLOG DE POSTS</h1>
        <Input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Pesquisar..."
        />
      </Header>
      <ContainerPosts>
        {filteredTitles.map((title) => {
          const user = names.find((user) => user.id === title.userId);

          return (
            <Posts onClick={() => { setRenderModal(title); openModal() }} key={title.id}>

              <H2>{title.title}</H2>
              <hr />
              <div>
                <P onClick={openTwoModal}>Autor: {user.name}</P>
              </div>
              <P className="corpo">{title.body}</P>
            </Posts>
          );
        })}
      </ContainerPosts>
      <Modal style={{
        overlay: {
          backgroundColor: 'rgba(0, 0 ,0, 0.8)'
        },
        content: {
          border: '1px solid green',
          background: '#252948',
          borderRadius: '20px',
          padding: '20px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes dos Posts"
      >{renderModal && (
        <>
          <H2>{renderModal.title}</H2>
          <hr />
          <P onClick={openTwoModal}>Autor: {names.find((name) => name.id === renderModal.userId).name}</P>
          <P className='corpo-title'>{renderModal.body}</P>
          <H2 className='comentario'>COMENTÁRIOS:</H2>
          <ContainerComments>
            {comments.filter((comment) => comment.postId === renderModal.id).map((comment) => {
              return (
                <div key={comment.id}>
                  <Email>{comment.email}</Email>
                  <P className='corpo-comments'>{comment.body}</P>
                </div>
              )
            })}
          </ContainerComments>
        </>
      )}
        <CloseButton onClick={closeModal}><img alt='Close-Modal' src={X} /></CloseButton>
      </Modal>

      <Modal style={{
        overlay: {
          backgroundColor: 'rgba(0, 0 ,0, 0.8)'
        },
        content: {
          width: '50%',
          border: '1px solid green',
          background: '#252948',
          borderRadius: '20px',
          padding: '20px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '300px'
        }
      }}
        isOpen={modalTwoOpen}
        onRequestClose={closeTwoModal}
        contentLabel="Detalhes dos Posts"
      >{renderModal &&(<><CloseButton onClick={closeTwoModal}><img alt='Close-Modal' src={X} /></CloseButton>
        <PersonPicture>
          <div>
            <img alt='Person' src={person} />
            <PPerfil>{names.find((name) => name.id === renderModal.userId).name}</PPerfil>
          </div>
        </PersonPicture>
        <Informations>
          <div>
            <p>Usuário: {names.find((names) => names.id === renderModal.userId).username}</p>
            <p>Email: {names.find((names) => names.id === renderModal.userId).email}</p>
            <p>Celular: {names.find((names) => names.id === renderModal.userId).phone}</p>
            <p>Site: {names.find((names) => names.id === renderModal.userId).website}</p>
            <p>Empresa: {names.find((names) => names.id === renderModal.userId).company.name}</p>
          </div>

        </Informations>
        </>
        )}
      </Modal>
    </Main>
  );
}

export default Home;
