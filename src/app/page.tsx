import Image from "next/image";



export default function Home() {
  return (
    <div className="w-full h-[4500px] sm:w-1/2 md:w-full bg-white ">
      {/* tenp */}
      {/* <div className="w-full h-auto md:w-[400px] lg:w-[600px] md:h-[400px]">

      </div> */}
      <div className="w-full h-[812.53px] sm:w-1/2 md:w-full border-2">
        <div className="bg-[url('/bit.jpg')] bg-cover bg-center  w-full sm:w-1/2 md:w-full h-[1007.93px]  border-2 ">
          <div className="w-full sm:w-1/2 md:w-full h-[716.83px] border-2  ">
            <div className="w-[643px] h-[443px] mt-[20%] ml-[739px] rounded-[10px] bg-[#FFF3E3] border-2">
              <h2 className="w-[123px] h-[24px] mt-[10%] ml-[15%] text-[#333333]  font-medium text-base ">New Arrival</h2>
              <h2 className="w-[400px] h-[127px] ml-[15%] text-[52px] font-bold text-[#B88E2F]">Discover Our New Collection</h2>
              <p className="text-[#333333] font-medium text-lg w-[500px] h-[52px] mt-[10%] ml-[15%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
              <button className="text-[#FFFFFF] bg-[#B88E2F] w-[222px] h-[74px] mt-[2%] ml-[15%] pt-[25px] pr-[72px] pb-[25px] pl-[72px]">BUY Now</button>
            </div>
            <h2 className="w-[300px] h-[48px] mt-[20%] ml-[40%] font-bold text-[#333333] text-[32px]">Browse The Range</h2>
            <p className="text-[#666666] font-normal w-[559px] h-[28.71px]  ml-[36%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            <div className="flex justify-evenly">
            <div className="mt-[2%]">
              <Image src="/mg1.png" alt="dining" width={381} height={480} className="w-[381px] h-[480px] " /><h2 className="ml-[30%] mt-[1%] text-[#333333] text-2xl font-semibold">Dining</h2> 
            </div>
            <div className="mt-[2%]">
              <Image src="/mg2.png" alt="living" width={381}  height={480} className="w-[381px] h-[480px] " /><h2 className="ml-[30%] mt-[1%] text-[#333333] text-2xl font-semibold">Living</h2> 
            </div>
            <div className="mt-[2%]">
              <Image src="/mg3.png" alt="bed room" width={381}  height={480}  className="w-[381px] h-[480px] " /><h2 className="ml-[30%] mt-[1%] text-[#333333] text-2xl font-semibold">Bed Room</h2> 
            </div>
            </div>
                  <div className="h-[1084px] mt-[1%] ml-[5%] ">
                   
                    <h2 className="w-[269px] h-[48px] text-[#3A3A3A] font-bold text-[40px] mt-[1%] ml-[40%]">Our Products</h2>
                    <div className="w-[1236px] h-[446px]  mt-[1%] ml-[4%] flex justify-evenly">
                      <Image src="/syl.png" alt="syltherine" width={284}  height={446} className="w-[284px] h-[446px]" />
                      <Image src="/op2.png" alt="click" width={284}  height={446} className="w-[284px] h-[446px]" />
                      <Image src="/lolito.png" alt="lolito" width={284}  height={446} className="w-[284px] h-[446px]" />
                      <Image src="/repira.png" alt="repira" width={284}  height={446} className="w-[284px] h-[446px]" />
                    </div>
                    <div className="w-[1236px] h-[446px]  mt-[1%] ml-[4%] flex justify-evenly">
                      <Image src="/grifo.png" alt="syltherine" width={284}  height={446} className="w-[284px] h-[446px]" />
                      <Image src="/muggo.png" alt="click" width={284}  height={446} className="w-[284px] h-[446px]" />
                      <Image src="/pingky.png" alt="lolito" width={284}  height={446} className="w-[284px] h-[446px]" />
                      <Image src="/potty.png" alt="repira" width={284}  height={446} className="w-[284px] h-[446px]" />
                    </div>
                    <button className="bg-[#FFFFFF] w-[245px] h-[45px] mt-[2%] ml-[40%] text-[#B88E2F] font-semibold text-base border-[1px] border-[#B88E2F] ">Show More</button>
                    <div className="flex bg-[#FCF8F3] ml-[-5%] mt-[5%] w-full h-[670px]">
                      <div className="ml-[5%]">
                      <h2 className="w-[422px] h-[96px] text-[40px] font-bold text-[#3A3A3A] mt-[45%]">50+ Beautiful rooms inspiration</h2>
                      <p className="w-[368px] h-[48px]  mt-[5%] text-[#616161] text-base font-medium">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                      <button className="w-[176px] h-[48px] mt-[10%] bg-[#B88E2F] text-[#FFFFFF]  font-semibold text-base">Explore More</button>
                      </div>
                      <div className="flex">
                          <div className="flex mt-[2%]">
                            <Image src="/r1.png" alt="room1" width={421} height={582} className="w-[421px] ml-[7%] h-[582px] mt-[2%] mb-[1%]" />
                             <Image src="/Content.png" alt="content" width={217} height={130} className="w-[217px] h-[130px] mt-[87%] ml-[-75%]" /> 
                             <Image src="/rect.png" alt="rectangle" width={48} height={48} className="w-[48px] h-[48px] mt-[103%]" /> 
                             <Image src="/arrow.png" alt="arrow" width={24} height={24} className="w-[24px] h-[24px] mt-[105%] ml-[-7%]"/> 
                          </div>
                          <div className="flex mt-[2%]  gap-8">
                            <Image src="/r2.png" alt="room2" width={372} height={486} className="w-[372px] h-[486px] mt-[2%]" />
                            <Image src="/r3.png" alt="room3" width={200} height={486} className="w-[200px] h-[486px] mt-[2%]" />
                          </div>
                        
                      </div>
                      
                    </div>
                        <div className="w-full h-[1000px] ml-[-5%] mt-[1%]  ">
                          <p className="w-[230px] h-[30px] font-semibold text-xl text-[#616161] ml-[50%]">Share your setup with</p>
                          <h2 className="w-[356px] h-[48px] font-bold text-5xl text-[#3A3A3A] ml-[45%]">#FuniroFurniture</h2>
                            <div>
                              <div className="flex">
                                  <div className="ml-[8%]">
                                  <Image src="/ff1.png" alt="furniture1" width={100} height={500}  className="w-[100px] h-[500px] "/>
                                  <Image src="/ff2.png" alt="furniture2" width={230} height={332} className="w-[230px] h-[332px]  mt-[10%]" />
                                  </div>
                                  <div className="flex">
                                    <div>
                                   <Image src="/ff3.png" alt="furniture3" width={520} height={312} className="w-[520px] h-[312px] mt-[45%] ml-[-16%]"/>
                                  <Image src="/ff4.png" alt="furniture4" width={325} height={242} className="w-[325px] h-[242px] mt-[5%] ml-[5%]" />
                                  </div>
                                  <div>
                                  <Image src="/ff5.png" alt="furniture5" width={350} height={392} className="w-[350px] h-[392px] mt-[90%] ml-[-10%]"/></div>
                                  <div className="flex">
                                  <Image src="/ff6.png" alt="furniture6" width={178} height={242} className="w-[178px] h-[242px] mt-[140%] ml-[-2%]"/>
                                  
                                  <Image src="/ff7.png" alt="furniture7" width={290} height={348} className="w-[290px] h-[348px] ml-[-48%] mt-[35%]" /></div>
                                 <div>
                                  <Image src="/ff8.png" alt="furniture8" width={258} height={196} className="w-[258px] h-[196px] mt-[155%] ml-[-50%]"/>
                                   <Image src="/ff9.png" alt="furniture9" width={425} height={433} className="w-[425px] h-[433px] mt-[-204%] ml-[-13%]" /></div>
                                  </div>
                              </div>

                            </div>
                        </div>
                        
                  </div>
          </div>
          
        </div>
      
      </div>
      
    
     </div>
  );
}
