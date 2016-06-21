import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Sidebar from './Sidebar'
import styles from './styles.module.css'

describe('<Sidebar />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Sidebar title={'Restaurants'} />)
  });

  it('contains a title for the sidebar', () => {
    expect(wrapper.find('h1').first().text())
      .to.equal('Restaurants')
  });
})
