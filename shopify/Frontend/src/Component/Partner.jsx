import React from "react";

function Partner() {

    const images = [
        {
            src: "https://t4.ftcdn.net/jpg/04/29/34/81/360_F_429348129_vHH5UVrbXbpB6AF5Uf3g8yWwQ5Tu2lKo.jpg"
        },
        {
            src: "https://cdn.vectorstock.com/i/1000v/21/74/logo-for-clothing-t-shirt-companyweb-vector-51522174.jpg"
        },
        {
            src: "https://static.vecteezy.com/system/resources/previews/016/818/271/non_2x/clothing-t-shirt-online-shop-logo-idea-free-vector.jpg"
        },

        {
            src: "https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            src: "https://png.pngtree.com/template/20191219/ourmid/pngtree-abstract-colorful-shirt-logo-vector-cloth-logo-designs-template-image_341456.jpg"
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Y8XKeXZA25d737RJQ0LOe6ZpebWrXrpIwGqAMXsYfIQeXlfwVqCxLU1XomoKkAVP1eQ&usqp=CAU"
        }
        , {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNipaTHti0aZbi3dkFlcAN-o-s3GevLuEfcg&s"
        }
        , {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBbexXmMAPPxUOrntSsKLXv5MP-Z72c6mbQ&s"
        },
        {
            src: "https://t4.ftcdn.net/jpg/01/94/15/39/360_F_194153984_2OlRQYPKUyGQCWiJpPElk7zzF08QY6aR.jpg"
        }
    ]



    return <div className='  flex gap-4   w-max  py-2   animate-moveleft '>

        {images.map((element, idx) => {

            return <img key={idx} className='partner w-[14rem] h-[14rem]   rounded-full border-none  shadow-[0_0_20px_rgba(255,255,255,1)] shadow-white ' src={element.src} alt="" />
        })

        }

        {images.map((element, idx) => {

            return <img key={idx + "sourabh"} className=' partner w-[14rem] h-[14rem] rounded-full border-none  shadow-[0_0_20px_rgba(255,255,255,1)] shadow-white ' src={element.src} alt="" />
        })

        }



    </div>




}

export default Partner
