import { Header } from "@/components/header";
import Design from "@/components/mydes";

const Proj3 = () => {

    return(
        <div>
            <Header />
            <div className="container mx-auto px-4 py-25">
                <Design
                name={"Industry Internship Project"} 
                items={
                        [
                        "/p7.png",
                        "/projs/p8.png",
                        "/projs/p9.png",
                        "/projs/p10.png"
                        ]
                }

                />
            </div>
        </div>
    )
}

export default Proj3;