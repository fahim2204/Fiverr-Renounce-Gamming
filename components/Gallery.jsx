import React from "react";

const Gallery = () => {
    return (
        <div>
            <section className="text-gray-200 relative block">
                <div className="px-10 py-24 mx-auto ">
                    <div className="grid lg:grid-cols-2 gap-4">

                        <div className="grid lg:grid-rows-2 gap-4 mb-4">
                            <div className="md:p-2 p-1 relative">
                                <a href="/#gallery">
                                    <div className="absolute w-full">
                                        <img
                                            alt="gallery"
                                            className="w-full h-full object-cover object-center block inset-0"
                                            src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-banner2.jpg"
                                        />
                                    </div>
                                    <div className="relative z-10 m-6  p-6 px-8 hover:border hover:border-gray-300 ease-in duration-700 md:p-12 md:m-12">
                                        <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase relative">
                                            Assorted Boxes
                                        </h2>
                                        <p className="tracking-wider">20 Storages</p>
                                        <button className="hidden md:block bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 mt-14 text-sm uppercase duration-300">
                                            View More
                                        </button>
                                    </div>
                                </a>
                            </div>


                            <a href="/#gallery">
                                <div className="md:p-2 p-1 w-full relative">
                                    <div className="absolute w-full">
                                        <img
                                            alt="gallery"
                                            className="w-full h-full object-cover object-center block"
                                            src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-banner4.jpg"
                                        />
                                    </div>
                                    <div className="relative z-10 m-6 p-4 px-8 hover:border hover:border-gray-300 ease-in duration-700 md:p-12 md:m-12">
                                        <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase relative">
                                            HouseHold Goods
                                        </h2>
                                        <p className="tracking-wider">13 Storages</p>
                                        <button className="hidden md:block bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 mt-8  text-sm uppercase duration-300">
                                            View More
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </div>


                        {/* ----------right------ */}
                        <div className="grid lg:grid-rows-2 gap-4">
                            <a href="/#gallery">
                                <div className="md:p-2 p-1 w-full relative">
                                    <div className="absolute w-full">
                                        <img
                                            alt="gallery"
                                            className="w-full h-full object-cover object-center block inset-0"
                                            src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-banner1.jpg"
                                        />
                                    </div>
                                    <div className="relative z-10 m-6 p-6 mb-5 px-8 hover:border hover:border-gray-300 ease-in duration-700 md:p-12 md:m-12">
                                        <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase relative">
                                            Sporting Goods
                                        </h2>
                                        <p className="tracking-wider">30 Storages</p>
                                        <button className="hidden md:block bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 mt-14 text-sm uppercase duration-300">
                                            View More
                                        </button>
                                    </div>
                                </div>
                            </a>

                            <a href="/#gallery">
                                <div className="md:p-2 p-1 relative 2xl:mt-44">
                                    <div className="absolute w-full">
                                        <img
                                            alt="gallery"
                                            className="  object-cover object-center block"
                                            src="https://ibid.modeltheme.com/self-storage-auctions/wp-content/uploads/2021/03/Storage-banner3.jpg"
                                        />
                                    </div>
                                    <div className="relative z-10 m-6 p-6 px-8 hover:border hover:border-gray-300 ease-in duration-700 md:p-12 md:m-12">
                                        <h2 className="text-xl md:text-3xl font-extrabold text-white uppercase relative">
                                            Tools Workshop
                                        </h2>
                                        <p className="tracking-wider">11 Storages</p>
                                        <button className="hidden md:block bg-transparent text-white border border-white rounded-md hover:bg-white hover:text-black px-5 py-2 mt-14 text-sm uppercase duration-300">
                                            View More
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;