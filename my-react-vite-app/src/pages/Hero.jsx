import React from 'react'

function Hero() {
  return (
     <div className="hero min-h-screen ">
     <div className="hero-content flex-col lg:flex-row-reverse">
       <img
         src="https://tse2.mm.bing.net/th?id=OIP.G_ZzaAKqcGt8n4CLbKlOhgHaDj&pid=Api&P=0&h=180"
         className="max-w-full max-h-full mb-max -mr-7 -mt-5  shadow-8xl" />
       <div>
         <h1 className="text-5xl font-bold">Rent A Cars</h1>
         <p className="py-6">
          Kemudahan Perjalanan Anda Dengan Kendaraan Terpercaya Kami
         </p>
         <button className="btn btn-active btn-neutral"><a href="/RentalForm">Lihat Detail</a></button>
       </div>
     </div>
   </div>
  )
}

export default Hero