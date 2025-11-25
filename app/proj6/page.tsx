import { Header } from "@/components/header";
import Design from "@/components/mydes";

const Proj6 = () => {

    return(
        <div>
            <Header />
            <div className="container mx-auto px-4 py-25">
                <Design
                name={"Raymond Menswear"} 
                items={
                        [
                        "/proj3/p1.png",
                        "/proj3/p2.png",
                        "/proj3/p3.png",
                        "/proj3/p4.png",
                        "/proj3/p5.png",
                        "/proj3/p6.png"

                        ]
                }

                />
            </div>
        </div>
    )
}

export default Proj6;