import { Header } from "@/components/header";
import Design from "@/components/mydes";

const Proj2 = () => {

    return(
        <div>
            <Header />
            <div className="container mx-auto px-4 py-25">
                <Design
                name={"Kidswear"} 
                items={
                        [
                        "/proj6/p1.png",
                        "/proj6/p2.png",
                        "/proj6/p3.png",
                        "/proj6/p4.png",
                        "/proj6/p5.png",
                        "/proj6/p6.png",
                        "/proj6/p7.png",
                        "/proj6/p8.png",

                        ]
                }

                />
            </div>
        </div>
    )
}

export default Proj2;