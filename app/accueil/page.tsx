import { NextPage } from "next";

const Accueil:NextPage=()=>{
    return(
        <div>
            <div className="flex items-center bg-black ">
                <img src={'/logo.png'} alt="" style={{width:'10%'}} />
                <span className="text-white text-2xl">Jojo Skelettton</span>
            </div>
           
            <div className="flex justify-center bg-gradient-to-b from-black to-dark-blue" style={{}}>
                <div style={{width:'80%', marginLeft:'-10%', marginTop:'2%'}}>
                    <video className="rounded" controls><source src={'/video.mp4'} type="video/mp4"  /></video>
                    <br />
                    <div className="flex">
                        <div className="flex items-center">
                            <img style={{width:'20%'}} src={'/profil.jpeg'} alt="" className="rounded-full" />
                            <div style={{marginLeft:'3%'}} className="flex flex-col">
                                <span className="text-white flex items-start">Jojo Skull</span>
                                <span style={{marginTop:'15%'}} className="text-white flex items-end">273 SOL</span>
                            </div>
                            <button style={{background:'#373737',marginLeft:'10%', paddingLeft:'10px', paddingRight:'10px', height:'35px'}} className="rounded flex text-white items-center"><img style={{width:'70%', marginRight:'10px'}} src={'/like.svg'} alt="" />8,4K</button>
                        </div>
                        
                    </div>
                </div>
                <div style={{ marginTop:'2%', marginLeft:'1%'}}>
                    <img src={'/instagram.svg'} alt="" />
                    <img src={'/twitter-6.svg'} alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
      
}

export default Accueil