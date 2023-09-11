import h from "/td.png"
export default function Hero(){
    return(
        <div className="z-1 relative">
            <span className="max-w-[500px] block m-auto ">
                <img src={h} className="brightness-100"/>
            </span>
        </div>
    )
}