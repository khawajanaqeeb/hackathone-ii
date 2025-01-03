import Image from "next/image"

export default function Shop(){
    return(
        <div className="w-[1440px] h-[3474px] mt-[-724px] ml-[-126px] bg-[#FFFFFF] border-2">
             <div className="w-[1440px] h[316px] mt-[50%] ">
                <Image src="/shop1.png" alt="background-shop" width="1440" height="316"/>
                <h2 className="w-[124px] h-[72px]  text-[#000000] font-medium text-5xl mt-[-13%] ml-[50%]">Shop</h2>
                <h3 className="w-[48px] h-[24px] text-black ml-[50%] mt-[-1%]">Home</h3>
                <Image src="/arw.png" alt="arrow" height={20} width={20} className="ml-[54%] mt-[-1.5%]"/>
                <h3 className="w-[41px] h-[24px] ml-[56%] font-light text-base mt-[-1.5%]">Shop</h3>
                </div> 
                
                <div className=" w-[1440px] h-[100px] bg-[#F9F1E7] mt-[7%] border-2 ">
                 <Image src="/sys.png" alt="arrow" height={25} width={25} className="ml-[12%] mt-[35px]"/>
                <h3 className="w-[48px] h-[30px] ml-[15%] mt-[-23px] font-normal text-xl ">Filter</h3>
                <Image src="/grid.png" alt="arrow" height={28} width={28} className="ml-[20%] mt-[-30px]"/>
                <Image src="/bi-v.png" alt="arrow" height={24} width={24} className="ml-[24%] mt-[-27px]"/>
                <Image src="/line-5.png" alt="arrow" height={1} width={1.5} className="ml-[28%] mt-[-27px] text-[#9F9F9F]"/>
                <p className="w-[237x] h-[37px] ml-[30%] mt-[-23px] font-normal text-base ">Showing 1-16 of 32 results</p>
            
                    <div className="w-[150px] h-[55px] ml-[67%] mt-[-4%] flex justify-around">
                    <h3 className="w-[40px] h-[30px] mt-[10%] font-normal text-xl">Show</h3>
            
                    <button className="w-[55px] h-[55px] mt-[5%]  bg-[#FFFFFF]   text-xl font-normal text-[#9F9F9F]">16</button>
                    </div>
           
                    <div className="w-[255px] h-[55px] mt-[-3%] ml-[85%] flex justify-evenly">
                    <p className="w-[83px] h-[30px] ml-[-65%] mt-[1%]  font-normal text-xl text-black ">Short by</p>
                    <button className="bg-[#FFFFFF] w-[188px] h-[55px] ml-[-20%] mt-[-1%] font-normal text-xl text-[#9F9F9F] pr-10">Default</button>
                    </div>
            </div>
            <div className="h-[2051px] ml-[5%] border-2">
                <div className="w-[1236px] h-[446px] ml-[6%] flex justify-around items-center ">
                    
                    <div>
                    <Image src="/sh1.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[123px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Syltherine</h2>
                    <h3 className="w-[138px] h-[28px] font-medium text-base text-[#898989] ml-[3%]">Stylish cafe chair</h3>
                    <p className="w-[249px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 2.500.000 
                    <span className="line-through  h-[24px] font-normal text-base text-[#B0B0B0] ml-[2%]">  Rp 3.500.000</span></p>
                    </div>

                    <div>
                     <Image src="/sh2.png" alt="shop-image1" width={285} height={301}/>
                     <h2 className="w-[92px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Leviosa</h2>
                    <h3 className="w-[138px] h-[28px] font-medium text-base text-[#898989] ml-[3%]">Stylish cafe chair</h3>
                    <p className="w-[240px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 2.500.000 
                    </p>
                    </div>

                    <div>
                    <Image src="/sh3.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[65px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Lolito</h2>
                    <h3 className="w-[121px] h-[24px] font-medium text-base text-[#898989] ml-[3%]">Luxury big sofa</h3>
                    <p className="w-[254px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%] ">Rp 7.000.000 
                    <span className="line-through  h-[24px] font-normal text-base text-[#B0B0B0] ml-[2%] ">  Rp 14.000.000</span></p>
                    </div>
                    
                    <div>
                    <Image src="/sh4.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[93px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Respira</h2>
                    <h3 className="w-[224px] h-[24px] font-medium text-base text-[#898989] ml-[3%]">Outdoor bar table and stool</h3>
                    <p className="w-[240px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 500.000
                    </p> 
                    </div>
                </div>
                <div className="w-[1236px] h-[446px] ml-[6%] flex justify-around items-center ">
                    
                    <div>
                    <Image src="/sh1.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[123px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Syltherine</h2>
                    <h3 className="w-[138px] h-[28px] font-medium text-base text-[#898989] ml-[3%]">Stylish cafe chair</h3>
                    <p className="w-[249px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 2.500.000 
                    <span className="line-through  h-[24px] font-normal text-base text-[#B0B0B0] ml-[2%]">  Rp 3.500.000</span></p>
                    </div>

                    <div>
                     <Image src="/sh2.png" alt="shop-image1" width={285} height={301}/>
                     <h2 className="w-[92px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Leviosa</h2>
                    <h3 className="w-[138px] h-[28px] font-medium text-base text-[#898989] ml-[3%]">Stylish cafe chair</h3>
                    <p className="w-[240px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 2.500.000 
                    </p>
                    </div>

                    <div>
                    <Image src="/sh3.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[65px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Lolito</h2>
                    <h3 className="w-[121px] h-[24px] font-medium text-base text-[#898989] ml-[3%]">Luxury big sofa</h3>
                    <p className="w-[254px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%] ">Rp 7.000.000 
                    <span className="line-through  h-[24px] font-normal text-base text-[#B0B0B0] ml-[2%] ">  Rp 14.000.000</span></p>
                    </div>
                    
                    <div>
                    <Image src="/sh4.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[93px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Respira</h2>
                    <h3 className="w-[224px] h-[24px] font-medium text-base text-[#898989] ml-[3%]">Outdoor bar table and stool</h3>
                    <p className="w-[240px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 500.000
                    </p> 
                    </div>
                </div>
                <div className="w-[1236px] h-[446px] ml-[6%] flex justify-around items-center ">
                    
                    <div>
                    <Image src="/sh1.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[123px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Syltherine</h2>
                    <h3 className="w-[138px] h-[28px] font-medium text-base text-[#898989] ml-[3%]">Stylish cafe chair</h3>
                    <p className="w-[249px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 2.500.000 
                    <span className="line-through  h-[24px] font-normal text-base text-[#B0B0B0] ml-[2%]">  Rp 3.500.000</span></p>
                    </div>

                    <div>
                     <Image src="/sh2.png" alt="shop-image1" width={285} height={301}/>
                     <h2 className="w-[92px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Leviosa</h2>
                    <h3 className="w-[138px] h-[28px] font-medium text-base text-[#898989] ml-[3%]">Stylish cafe chair</h3>
                    <p className="w-[240px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 2.500.000 
                    </p>
                    </div>

                    <div>
                    <Image src="/sh3.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[65px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Lolito</h2>
                    <h3 className="w-[121px] h-[24px] font-medium text-base text-[#898989] ml-[3%]">Luxury big sofa</h3>
                    <p className="w-[254px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%] ">Rp 7.000.000 
                    <span className="line-through  h-[24px] font-normal text-base text-[#B0B0B0] ml-[2%] ">  Rp 14.000.000</span></p>
                    </div>
                    
                    <div>
                    <Image src="/sh4.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[93px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Respira</h2>
                    <h3 className="w-[224px] h-[24px] font-medium text-base text-[#898989] ml-[3%]">Outdoor bar table and stool</h3>
                    <p className="w-[240px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 500.000
                    </p> 
                    </div>
                </div>
                <div className="w-[1236px] h-[446px] ml-[6%] flex justify-around items-center ">
                    
                    <div className="bg-[#F4F5F7]">
                    <Image src="/sh1.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[123px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Syltherine</h2>
                    <h3 className="w-[138px] h-[28px] font-medium text-base text-[#898989] ml-[3%]">Stylish cafe chair</h3>
                    <p className="w-[249px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 2.500.000 
                    <span className="line-through  h-[24px] font-normal text-base text-[#B0B0B0] ml-[2%]">  Rp 3.500.000</span></p>
                    </div>

                    <div className="bg-[#F4F5F7]">
                     <Image src="/sh2.png" alt="shop-image1" width={285} height={301}/>
                     <h2 className="w-[92px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Leviosa</h2>
                    <h3 className="w-[138px] h-[28px] font-medium text-base text-[#898989] ml-[3%]">Stylish cafe chair</h3>
                    <p className="w-[240px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 2.500.000 
                    </p>
                    </div>

                    <div className="bg-[#F4F5F7]">
                    <Image src="/sh3.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[65px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Lolito</h2>
                    <h3 className="w-[121px] h-[24px] font-medium text-base text-[#898989] ml-[3%]">Luxury big sofa</h3>
                    <p className="w-[254px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%] ">Rp 7.000.000 
                    <span className="line-through  h-[24px] font-normal text-base text-[#B0B0B0] ml-[2%] ">  Rp 14.000.000</span></p>
                    </div>
                    
                    <div className="bg-[#F4F5F7]">
                    <Image src="/sh4.png" alt="shop-image1" width={285} height={301}/>
                    <h2 className="w-[93px] h-[29px] font-semibold text-2xl text-[#3A3A3A] ml-[3%]">Respira</h2>
                    <h3 className="w-[224px] h-[24px] font-medium text-base text-[#898989] ml-[3%]">Outdoor bar table and stool</h3>
                    <p className="w-[240px] h-[30px] font-semibold text-xl text-[#3A3A3A] ml-[3%]">Rp 500.000
                    </p> 
                    </div>
                    
                    </div>
                    <div className="h-[90px] ml-[5%] flex justify-center items-center gap-5">
                        <button className="w-[60px] h-[60px] bg-[#B88E2F]">1</button>
                        <button className="w-[60px] h-[60px] bg-[#F9F1E7]">2</button>
                        <button className="w-[60px] h-[60px] bg-[#F9F1E7]">3</button>
                        <button className="w-[98px] h-[60px] bg-[#F9F1E7]">Next</button>
                    </div>
           
           
                </div>

                <div className="h-[270px] ml-[8%] bg-[#FAF3EA] flex justify-around items-center">
                    <div className=" flex">
                        <Image src="/g1.png" alt="cup" width={60} height={60}/>
                        <div className="ml-[2%]">
                        <h3 className="w-[180px] h-[38px] font-semibold text-[25px] text-[#242424]">High Quality</h3>
                        <p className="w-[276px] h-[30px] font-medium text-xl text-[#898989]">crafted from top materials</p>
                        </div>
                    </div>
                    <div className=" flex">
                        <Image src="/g2.png" alt="cup" width={60} height={60}/>
                        <div className="ml-[2%]">
                        <h3 className="w-[265px] h-[38px] font-semibold text-[25px] text-[#242424]">Warranty Protection</h3>
                        <p className="w-[125px] h-[30px] font-medium text-xl text-[#898989]">Over 2 years</p>
                        </div>
                    </div>
                    <div className=" flex">
                        <Image src="/g3.png" alt="cup" width={60} height={60}/>
                        <div className="ml-[2%]">
                        <h3 className="w-[178px] h-[38px] font-semibold text-[25px] text-[#242424]">Free Shipping</h3>
                        <p className="w-[163px] h-[30px] font-medium text-xl text-[#898989]">Order over 150 $</p>
                        </div>
                    </div>
                    <div className=" flex">
                        <Image src="/g4.png" alt="cup" width={60} height={60}/>
                        <div className="ml-[2%]">
                        <h3 className="w-[177px] h-[38px] font-semibold text-[25px] text-[#242424]">24 / 7 Support</h3>
                        <p className="w-[189px] h-[30px] font-medium text-xl text-[#898989]">Dedicated support</p>
                        </div>
                    </div>

                </div>
        
        
        </div>



        

        
    )
}



