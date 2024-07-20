export function Cart(){
    return(
        <div className="w-full max-w-7xl mx-auto px-2 ">
            <h1 className="font-medium text-2xl text-center my-4">Cart Pet</h1>
            <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img src="https://i.pinimg.com/736x/79/2e/a4/792ea40494b7d47ab0a5692a67123ffc.jpg" alt="logo produto" className="w-28"/>

        <strong>Preço R$1.000</strong>

        <div className="flex items-center justify-center gap-3">
            <button className="bg-slate-600 rounded text-white font-medium flex items-center px-2  "> 
                - 
            </button>
            2
            <button className="bg-slate-600 rounded text-white font-medium flex items-center px-2">
                 +
            </button>
        </div>

        <strong className="float-right">
            SubTotal: R$1.000
        </strong>
        </section>

        <p className="font-bold mt-4">Total: R$1.000</p>
        </div>
    )
}