/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className='homepage'>
        <div className='hero-home'>
          <img
            src='https://www.markgray.com.au/images/gallery/medium/golden-vines.jpg'
            alt=''
          />
        </div>
        <div className='d-flex justify-content-between w-100'>
          <div style={{ width: '48%' }}>
            <div className='item-card'>
              <img src='https://media.istockphoto.com/id/1363763003/photo/red-white-and-rose-wine-in-glasses-on-wooden-background-and-collection-of-wine-bottles-copy.jpg?s=612x612&w=0&k=20&c=7HetkJ1Kw9fANwZSzyIGnTkAtZUeO6uvdz4xLQCIB_g=' />
              <h3 className='text-overlay-on-item-image'>Whiskeys</h3>
            </div>
            <div className='item-card'>
              <img
                src='https://media.istockphoto.com/id/1345463827/photo/pouring-red-wine-into-glasses-on-the-barrel.jpg?s=612x612&w=0&k=20&c=rGheXBKNyho8K40etYULqvznYgQdgEURSVdMdz2XN-4='
                className='mt-4'
              />
              <h3 className='text-overlay-on-item-image'>Vodka</h3>
            </div>
          </div>
          <div style={{ width: '48%' }}>
            <div className='item-card'>
              <img src='https://media.istockphoto.com/id/1345463827/photo/pouring-red-wine-into-glasses-on-the-barrel.jpg?s=612x612&w=0&k=20&c=rGheXBKNyho8K40etYULqvznYgQdgEURSVdMdz2XN-4=' />
              <h3 className='text-overlay-on-item-image'>Rum</h3>
            </div>

            <div className='item-card'>
              <img
                src='https://media.istockphoto.com/id/1363763003/photo/red-white-and-rose-wine-in-glasses-on-wooden-background-and-collection-of-wine-bottles-copy.jpg?s=612x612&w=0&k=20&c=7HetkJ1Kw9fANwZSzyIGnTkAtZUeO6uvdz4xLQCIB_g='
                className='mt-4'
              />
              <h3 className='text-overlay-on-item-image'>Deserts</h3>
            </div>
          </div>
        </div>

        <div>
          <h1 className='recent-arrival-header'>Recent Arrvials</h1>
          <h3 className='text-center mt-2 mb-4'>
            Add Our New Arrivals To Your Daily Lineup
          </h3>
        </div>

        <div className='d-flex justify-content-center'>
          <h2 className='mx-4'>New Arrival</h2>
          <h2 className='mx-4'>Trending</h2>
          <h2 className='mx-4'>Popular</h2>
        </div>

        <div className='new-items-container'>
          <div className='one-item-detail-div'>
            <div
              className='overflow-hidden d-flex align-items-center justify-content-center'
              style={{
                height: '250px',
                width: '250px',
                backgroundColor: '#f5f5f5'
              }}
            >
              <img
                src='https://winebro.sgp1.digitaloceanspaces.com/wines/10-year-single-cask-butt-2022.webp'
                alt=''
                style={{
                  height: '200px',
                  width: '80px'
                }}
              />
            </div>

            <h3>10 YEAR OLD SINGLE CASK</h3>
            <h4 className='item-price-tag'>$104</h4>
          </div>
          <div className='one-item-detail-div'>
            <div
              className='overflow-hidden d-flex align-items-center justify-content-center'
              style={{
                height: '250px',
                width: '250px',
                backgroundColor: '#f5f5f5'
              }}
            >
              <img
                src='https://winebro.sgp1.digitaloceanspaces.com/wines/33-year-old-cellar-collection-3.webp'
                alt=''
                style={{
                  height: '200px',
                  width: '80px'
                }}
              />
            </div>

            <h3>33 YEAR OLD CELLAR COLLECTION</h3>
            <h4 className='item-price-tag'>$104</h4>
          </div>
          <div className='one-item-detail-div'>
            <div
              className='overflow-hidden d-flex align-items-center justify-content-center'
              style={{
                height: '250px',
                width: '250px',
                backgroundColor: '#f5f5f5'
              }}
            >
              <img
                src='https://winebro.sgp1.digitaloceanspaces.com/wines/10-year-single-cask-butt-2022.webp'
                alt=''
                style={{
                  height: '200px',
                  width: '80px'
                }}
              />
            </div>

            <h3>10 YEAR OLD SINGLE CASK</h3>
            <h4 className='item-price-tag'>$104</h4>
          </div>
          <div className='one-item-detail-div'>
            <div
              className='overflow-hidden d-flex align-items-center justify-content-center'
              style={{
                height: '250px',
                width: '250px',
                backgroundColor: '#f5f5f5'
              }}
            >
              <img
                src='https://winebro.sgp1.digitaloceanspaces.com/wines/33-year-old-cellar-collection-3.webp'
                alt=''
                style={{
                  height: '200px',
                  width: '80px'
                }}
              />
            </div>

            <h3>33 YEAR OLD CELLAR COLLECTION</h3>
            <h4 className='item-price-tag'>$104</h4>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
