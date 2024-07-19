import {BsCartPlus} from 'react-icons/bs'

export function Home(){
    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
            <h1 className="font-bold text-center mt-10 mb-4  text-2xl">petshop</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                <section className="w-full max-w-7xl  bg-red-50">
                  

                    <div className="w-full">
                        <img 
                        className="w-full max-h-70 mb-2 rounded-lg"
                        src="https://i.pinimg.com/736x/79/2e/a4/792ea40494b7d47ab0a5692a67123ffc.jpg" alt="petshop" />
                    </div>

                    <p>petsavenda</p>
                    <div className="flex gap-3 items-center">
                        <strong className="text-zinc-700/90">
                            R$ 1000
                        </strong>
                        <button className="bg-zinc-900 p-1 rounded">

                        </button>
                    </div>

                </section>
                <section className="w-full max-w-7xl  bg-red-50">
                  

                  <div className="w-full">
                      <img 
                      className="w-full max-h-70 mb-2 rounded-lg"
                      src="https://i.pinimg.com/736x/79/2e/a4/792ea40494b7d47ab0a5692a67123ffc.jpg" alt="petshop" />
                  </div>

                  <p>petsavenda</p>
                  <div className="flex gap-3 items-center">
                      <strong className="text-zinc-700/90">
                          R$ 1000
                      </strong>
                      <button className="bg-zinc-900 p-1 rounded">
                <BsCartPlus color='white' size={20}/>
                      </button>
                  </div>

              </section>
             
                

                </div>
             
            </main>
        </div>
    )
}