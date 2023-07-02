import { Header } from './components/Header/Header';
import { Post } from './components/Posts/Posts';
import { Sidebar } from './components/Sidebar/Sidebar';

import './css/global.css'
import styles from './css/App.module.css'

const posts =[
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AugustoCVS.png',
      name: 'Augusto Santana',
      role: 'Intern Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-01 15:52:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/AugustoCVS.png',
      name: 'Larissa Cavalcante',
      role: 'Mediciner'
    },
    content: [
      {type: 'paragraph', content: 'Oii pessoal'},
      {type: 'paragraph', content: "Acabei de estudar mais um pouco sobre Biologia🚀"},
    ],
    publishedAt: new Date('2023-06-29 16:00:00')
  }
]


function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  )
}

export default App
