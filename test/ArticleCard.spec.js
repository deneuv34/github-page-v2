import { mount } from '@vue/test-utils'
import ArticleCard from '@/components/ArticleCard.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

describe('Article card', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
  })

  test('is a Vue instance', () => {
    const wrapper = mount(ArticleCard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('match with snapshot', () => {
    const wrapper = mount(ArticleCard)
    expect(wrapper.isVueInstance()).toMatchSnapshot()
  })
})
