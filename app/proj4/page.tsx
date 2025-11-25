import { Header } from "@/components/header";
import Design from "@/components/mydes";

const Proj4 = () => {

    return(
        <div>
            <Header />
            <div className="container mx-auto px-4 py-25">
                <Design
            name={"Corset"} 
            items={
                    [
                    "/proj4/p1.png",
                    "/proj4/p2.png",
                    "/proj4/p3.png",
                    "/proj4/p4.png",
                    "/proj4/p5.png"
                    ]
            }

                />
            </div>
        </div>
    )
}

export default Proj4;