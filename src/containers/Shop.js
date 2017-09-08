import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import { handleTranslation } from '../actions/translations'
import styled from 'styled-components'

import Recommended from '../components/partials/Recommended'
import { dummyProducts, dummySuppliers } from '../constants/dummyData'
import { CardItem } from '../components/partials/CardItem'
import Dictionary from '../constants/dictionary'

const StyledShopPage = styled.div`
  {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media (max-width: 420px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    overflow: hidden;
    span {
      font-size: 3em;
    }

    div {
      margin-left: 1rem;
    }
  }

  .home-subheader {
    font-size: 2em;
  }

  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

class Shop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dummyProducts,
      dummySuppliers,
      lang: 'en'
    }
    this.handleLangChange = this.handleLangChange.bind(this)
  }

  handleLangChange (event) {
    this.props.handleTranslation(event.target.dataset.lang)
  }

  render () {
    const lang = this.props.translation
    const { handleLangChange } = this
    const dummyProductsList = dummyProducts.map(product => {
      return (
        <CardItem
          key={product._id}
          _id={product._id}
          img={product.img}
          header={<h3><Link to={`/products/${product._id}`}>{product.name[lang]}</Link></h3>}
          subHeader={<p>{product.price} by <strong>
            <Link style={{ color: '#666' }} to={`/companies/${dummySuppliers[product.supplier]._id}`}>{dummySuppliers[product.supplier].name[lang]}</Link>
          </strong></p>}
        />

      )
    })

    return (
      <StyledShopPage>
        <header>
          <span>{Dictionary.shoppingDistrict[lang]}</span>
          <div>
            <a data-lang='en' onClick={handleLangChange}>en</a> | <a data-lang='cn' onClick={handleLangChange}>cn</a>
          </div>
        </header>
        <span className='home-subheader'>
          {Dictionary.searchResults[lang]}
        </span>
        <Row>
          <Col xs={24} sm={18} md={18} style={{paddingRight: '1%'}}>
            <main>
              {dummyProductsList}
            </main>
          </Col>
          <Col xs={24} sm={6} md={6} style={{paddingLeft: '1%'}}>
            <Recommended />
          </Col>
        </Row>
      </StyledShopPage>
    )
  }
}

function mapStateToProps (state, props) {
  const {translation} = state
  return {
    translation
  }
}

export default connect(mapStateToProps, {handleTranslation})(Shop)
