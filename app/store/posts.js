export const state = {
  posts: [
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