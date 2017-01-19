//import Vue from 'Vue'

import request from 'axios'
import Vue from 'vue'

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
  posts: ['test'],
  _byId: {
    test: {
      _id: 'test',
      title: 'sample',
      children: []
    }
  },
  root: []
}

export const getters = {
  root (state, getters) {
    //return getters.posts.filter( p => !p.parent_id )
    return state.root.filter( p => !p.parent_id )
  },
  posts (state) {
    let posts = state.posts.map ( id => {
      let post = state._byId[id]

      if (post.children.length > 0) {
        post.children = post.children.map( c => {
          if ( typeof c == 'object' ) return state._byId[c._id]

          return state._byId[c]
        })
      }

      return post
    } )

    return posts
  }
}

export const mutations = {
  setPosts (state, posts) {
    state.posts = posts.map( p => p._id )

    posts.forEach( p => {
      state._byId[p._id] = p
    })

    state.root = populate(state, posts)

  },

  setPost (state, post) {
    state.posts.push( post._id )
    state._byId[post._id] = post

    if (post.parent_id) {
      let parent = state._byId[post.parent_id]

      parent.children.push(post)
    }

    state.root = populate(state, state.posts.map( id => state._byId[id] ))
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

function populate (state, posts) {
  return posts.map ( post => {
    if (post.children.length > 0) {
      post.children = post.children.map( c => {
        if ( typeof c == 'object' ) return state._byId[c._id]

        return state._byId[c]
      })
    }

    return post
  } )
}