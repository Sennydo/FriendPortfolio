import Image from "next/image";

const projDat = [
    "/p7.png",
    "/projs/p8.png",
    "/projs/p9.png",
    "/projs/p10.png"
]
type Props = {
    name: string
    items: string[];
}


const Design = ({name, items}:Props) => {
    return (
        <div className="flex-col flex">

            <h1 className="text-center font-bold text-3xl text-foreground uppercase tracking-tight">{name}</h1>

            <div className="grid grid-cols-2 gap-5">
                {items.map((item, i) => (
                    <div className="relative h-100" key={i}>
                        <Image 
                            src={item}
                            alt="P7"
                            fill
                        />
                    </div>
                ))}
            </div>


            
        </div>
    )
}

export default Design;