import React from 'react';
import Link from 'next/link';

export interface ProductCarouselProps {
    shop: any; // TODO Replace by store obj
    products: any; // TODO Replace by product arr obj
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ shop, products }) => (
    <main className='container py-4'>
        <Link href='/store/34'>
            <a>
                <div className='d-flex align-items-center mb-3'>
                    <img src={shop.image} alt={shop.name} className='size-2' />
                    <div className='d-flex align-items-baseline flex-column flex-lg-row'>
                        <div className='small text-muted mx-3'>{shop.name}</div>
                        <span className='text-muted d-none d-lg-block'>/</span>
                        <div className='mx-3'>Added new products</div>
                    </div>
                </div>
            </a>
        </Link>

        <div className='shadow-md d-flex flex-column rounded overflow-hidden' style={{ width: 280, height: 380 }}>
            <div className='p-3 flex-fill d-flex flex-column'>
                <div className='mb-1'>4.5</div>

                <img
                    className='w-100 rounded'
                    style={{ height: 150, objectFit: 'cover', objectPosition: '50% 50%' }}
                    src={products[0].image}
                />

                <div style={{ marginTop: -20 }} className='d-flex justify-content-center'>
                    <div className='p-2 bg-white rounded shadow-md text-primary-light small font-weight-500'>
                        $230.00
                    </div>
                </div>

                <div className='d-flex flex-column align-items-center justify-content-center flex-fill'>
                    <h2 className='font-size-lg text-center'>Apple TV</h2>
                    <h3 className='font-size-sm text-muted text-center'>A product of Apple Inc.</h3>
                </div>
            </div>

            <button className='w-100 border-top border-left-0 border-right-0 border-bottom-0 bg-white rounded-0 p-3 text-dark-light'>
                Add to cart
            </button>
        </div>
    </main>
);
