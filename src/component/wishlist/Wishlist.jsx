import React from 'react';

function Wishlist() {

    
	const removeBook = (bookId) => {
	
	};


  return <div>
         <div className='secondBar'>
                <p className="home">Home </p>
                <p className="item">My wishlist</p>
               
            </div>
            <div className='wish-list-heading' style={{marginTop:15}}>
						My WishList ( {} )
					</div>
					<div className='wish-list-display-all'>
					
							<div className='wishlistSingleBookContainer'>
								<div className='wishlistImgAndInfoContainer'>
									<div className='wishlistBookImgContainer'>
										<div className='wishlistBookImg'></div>
									</div>
									<div className='wishlistBookInfoContainer'>
										<div className='wishlistBookName'>
										
										</div>
										<div className='wishlistBookAuthor'>
										
										</div>
										<div className='wishlistBookPriceContainer'>
											<div className='wishlistBookNewPrice'>
											
											</div>
											<div className='wishlistBookOldPrice'>
											
											</div>
										</div>
									</div>
								</div>
								<div className='wishlistButtonsContainer'>
									<div
										className='removeFromWishlistBtn'
										onClick={() => removeBook()}
									>
									
									</div>
								</div>
							</div>
						
					</div>

  </div>;
}

export default Wishlist;
