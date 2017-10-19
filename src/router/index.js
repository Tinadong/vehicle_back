import Vue from 'vue'
import Router from 'vue-router'



// import HelloWorld from '@/components/content'

import one from '@/components/content/one'
import two from '@/components/content/two'
import three from '@/components/content/three'
import four from '@/components/content/four'
import five from '@/components/content/five'
import six from '@/components/content/six'
import seven from '@/components/content/seven'
import eight from '@/components/content/eight'
import nine from '@/components/content/nine'
import ten from '@/components/content/ten'

    
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: one
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/five',
      name: 'five',
      component: five
    },
    {
      path: '/six',
      name: 'six',
      component: six
    },
    {
      path: '/seven',
      name: 'seven',
      component: seven
    },
    {
      path: '/eight',
      name: 'eight',
      component: eight
    },
   {
      path: '/nine',
      name: 'nine',
      component: nine
    },
    {
      path: '/ten',
      name: 'ten',
      component:ten
    }


  ]
})