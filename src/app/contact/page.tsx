import Image from "next/image";


export default function Contact() {
  return (
    <>
        <div className=" h-[316px] w-[1440px] ">
            <Image src="/shop1.png" alt="background-shop" width={1440} height={316}/>
            <img src="/mh.png" className="w-[50px] h-[41px] mt-[-15%] ml-[50%]" />
            <h2 className="w-[196px] h-[72px]  text-[#000000] font-medium text-5xl mt-[0.5%] ml-[45%]">Contact</h2>
            <h3 className="w-[48px] h-[24px] text-black ml-[47%] ">Home</h3>
            <Image src="/arw.png" alt="arrow"height={20} width={20} className="ml-[51%] mt-[-1.4%] "/>
            <h3 className="w-[41px] h-[24px]  ml-[53%] mt-[-1.5%] font-light text-base ">Contact</h3>
        </div>
        
        <div className="w-[1440px] h-[1144px]">   
             <h1 className="w-[378px] h-[54px] mt-[10%] ml-[38%]  text-4xl font-semibold">Get In Touch With Us</h1>
             <p className="w-[644px] h-[48px] ml-[28%] text-[#9F9F9F] text-base font-normal text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        
            <div className="flex">

                <div className="w-[393px] h-[537px] mt-[10%]">
                    <div className="flex">
                        <i className="bi bi-geo-alt-fill text-4xl w-[22px] h-[28px] ml-[40%]"></i>
                        <div>
                        <h2 className="w-[99px] h-[36px] text-2xl font-medium mt-[15%] ml-[20%] text-black">Address</h2>
                        <p className="w-[212px] h-[72px] text-base font-normal ml-[20%]">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="flex mt-[7%]" >
                        <i className="bi bi-telephone-fill text-4xl w-[22px] h-[28px] ml-[40%]"></i>
                        <div>
                        <h2 className="w-[76px] h-[36px] text-2xl font-medium mt-[10%] ml-[20%] text-black">Phone</h2>
                        <p className="w-[212px] h-[48px] text-base font-normal ml-[20%]">Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                        </div>
                    </div>
                    <div className="flex mt-[7%]">
                        <i className="bi bi-clock-fill text-4xl w-[22px] h-[28px] ml-[40%]"></i>
                        <div>
                        <h2 className="w-[166px] h-[36px] text-2xl font-medium mt-[10%] ml-[20%] text-black">Working Time</h2>
                        <p className="w-[212px] h-[96px] text-base font-normal ml-[20%]">Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>      
                
                        <div className="w-[635px] h-[923px] mt-[10%] ml-[20%]">
                            <form className="w-full max-w-lg p-6 rounded-lg ">
                
                            <div className="mb-4">
                             <label htmlFor="name" className="block text-black font-medium text-base mb-2 w-[111.25px] h-[24px]">Your Name</label>
                             <input type="text" id="name" placeholder="abc" className="w-[528.75px] h-[75px] px-5 py-2 border border-[#9F9F9F] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                             </div>

        
                            <div className="mb-4">
                            <label htmlFor="email" className="block text-black font-medium text-base mb-2 w-[143.75px] h-[24px]">Email Address</label>
                            <input type="email" id="email"  placeholder="Abc@def.com" className="w-[528.75px] h-[75px] px-5 py-2 border border-[#9F9F9F] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>

        
                            <div className="mb-4">
                            <label htmlFor="subject" className="block text-black text-base font-medium mb-2 w-[75.96px] h-[24px]">Subject</label>
                            <input type="text" id="subject" placeholder="Enter the This is an optional" className="w-[528.75px] h-[75px] px-5 py-3 border border-[#9F9F9F] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            </div>

        
                            <div className="mb-4">
                            <label htmlFor="message" className="block  font-[500px] text-black text-base mb-2 w-[75.96px] h-[24px]">Message</label>
                            <textarea id="message"  placeholder="Hi! i would like to ask about"  rows={4} className="w-[527px] h-[120px] px-5 py-5 border border-[#9F9F9F] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </textarea>
                            </div>

        
                            <button type="submit"  className="w-[237px] h-[55px] bg-[#B88E2F] font-[400px] text-base mt-5 ml-2  text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                            Submit
                            </button>
                            </form>
                        </div>
            </div>
           
        </div>
        <div className="h-[270px] w-[1440px] bg-[#FAF3EA] flex justify-around items-center">
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

        
    </>
  );
}
