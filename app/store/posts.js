//import Vue from 'Vue'

import request from 'axios'

const api = function (path) {

  let target = `http://localhost:3000/api/${path}`

  return {
    get (params) {
      return request.get(target)
    },

    post (params) {
      return request.post(target, params)
    }
  }
}


export const state = {
  posts: [],
  _byId: {}
}

export const getters = {
  root (state, getters) {
    console.log('root')
    return getters.posts.filter( p => !p.parent_id )
  },
  posts (state) {
    console.log('posts')
    return state.posts.map ( id => {
      let post = state._byId[id]

      if (post.children.length > 0) {
        post.children = post.children.map( c => {
          if ( typeof c == 'object' ) return state._byId[c._id]

          return state._byId[c]
        })
      }

      return post
    } )
  }
}

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts.map( p => p._id )

    posts.forEach( p => {
      state._byId[p._id] = p
    })
  },

  setPost (state, post) {
    state.posts.push( post._id )
    state._byId[post._id] = post

    if (post.parent_id) {
      let parent = state._byId[post.parent_id]
      console.log(parent)
      parent.children.push(post)
    }

  }
}

export const actions = {
  getPosts ({commit}) {
    return api('posts')
      .get()
      .then( res => {
        commit('setPosts', res.data)
        return res.data
      })


    let posts = getPosts()
    console.log(posts)
  },

  createPost ({commit}, {parent_id}) {
    console.log(parent_id)
    return request
      .post('/api/post/create', {parent_id, title: 'test'})
      .then( res => {
        commit('setPost', res.data)

        return res.data
      })
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