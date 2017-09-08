import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, InputNumber, Button, Icon } from 'antd'
import styled from 'styled-components'
import { handleTranslation } from '../actions/translations'
import { dummyProducts, dummySuppliers } from '../constants/dummyData'
import Dictionary from '../constants/dictionary'

import Recommended from '../components/partials/Recommended'
import { shortDescription } from '../constants/placeholders'
import { ActionBar } from '../components/partials/ActionBar'

const StyledHomePage = styled.div`
  img {
    width: 100%;
  }
  {
    padding-top: 1rem;
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  header {
    width: 100%;
    height: 60px;
    span {
      font-size: 3em;
    }
  }
  .product-subheader {
    font-size: 1em;
  }
  .product-subheader2 {
    font-size: 2em;
  }
  .product-container {
    section + section {
      margin-top: 1rem;
    }
  }
`

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product: dummyProducts[props.match.params.productId]
    }
    this.handleLangChange = this.handleLangChange.bind(this)
  }
  handleLangChange (event) {
    this.props.handleTranslation(event.target.dataset.lang)
  }
  render () {
    const lang = this.props.translation
    const { name, price, img, supplier } = this.state.product
    const { handleLangChange } = this
    return (
      <StyledHomePage>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <Row gutter={16}>
              <Col xs={24} sm={10} md={10}>
                <img src={require(`../images/${img}`)} alt='product image' />
              </Col>
              <Col xs={24} sm={14} md={14}>
                <div className='product-container'>
                  <header>
                    <div>
                      <span>{name[lang]}</span>
                      {` by `}
                      <span className='product-subheader'>
                        <Link to={`/companies/${dummySuppliers[supplier]._id}`}>{dummySuppliers[supplier].name[lang]}</Link>
                      </span>
                    </div>
                  </header>
                  <section>
                    <div>
                      <a data-lang='en' onClick={handleLangChange}>en</a> | <a data-lang='cn' onClick={handleLangChange}>cn</a>
                    </div>
                  </section>
                  <section>
                    <Row>
                      <Col xs={24} sm={4} md={4}>{Dictionary.price[lang]}: </Col>
                      <Col xs={24} sm={20} md={20}>{price}</Col>
                    </Row>
                    <Row>
                      <Col xs={24} sm={4} md={4}>{Dictionary.quantity[lang]}: </Col>
                      <Col xs={24} sm={20} md={20}>
                        <InputNumber min={1} max={10} defaultValue={3} />
                      </Col>
                    </Row>
                  </section>
                  <section style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button type='primary'>
                      <Icon type='shopping-cart' />{Dictionary.addToCart[lang]}
                    </Button>
                    <ActionBar />
                  </section>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={24} sm={24} md={24}>
                <div className='product-container'>
                  <section>
                    <span className='product-subheader2'>{Dictionary.description[lang]}</span>
                    <p>{shortDescription}</p>
                  </section>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={6} md={6} style={{paddingLeft: '1%'}}>
            <Recommended />
          </Col>
        </Row>

      </StyledHomePage>
    )
  }
}

function mapStateToProps (state, props) {
  const {translation} = state
  return {
    translation
  }
}

export default connect(mapStateToProps, {handleTranslation})(Product)
