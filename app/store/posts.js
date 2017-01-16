//import Vue from 'Vue'

export const state = {
  posts: []
}

export const getters = {
  posts () {
    return [
      {
        title: 'Exploring Vue',
        children: [
          {
            title: 'Vue Component'
          },
          {
            title: 'Vue Router'
          },
          {
            title: 'Vuex',
            children: [
              { title: 'Store' }
            ]
          }
        ]
      },
      {
        title: 'Projects',
        children: [
          {
            title: 'Shalendar'
          },
          {
            title: 'Bambee'
          },
          {
            title: 'Hackable'
          },
          {
            title: 'Amplfy'
          },
          {
            title: 'Startuptabs'
          }
        ]
      },
      {
        title: 'Docker How Tos',
        children: [
          {
            title: 'Building a node image'
          },
          {
            title: 'Jwilder Nginx Proxy'
          },
          {
            title: 'Dingy, Docker for Mac'
          },
          {
            title: 'Hak.sh'
          }
        ]
      }
    ]
  }
}

export const mutations = {
  setPosts (state, posts) {
    console.log('wtf')
    hello()
  }
}

export const actions = {
  getPosts ({commit}) {
    let posts = getPosts()
    console.log(posts)
  }
}



function createPost () {
  return {
    title: '',
    body: '',
    parent_id: null
  }
}

function getPosts () {
  return [
    {
      id: 1,
      title: 'post1',
      body: 'post 1 body',
      parent_id: null
    },
    {
      id: 2,
      title: 'post2',
      body: 'post 2 body',
      parent_id: 1
    }
  ]
}