import { Header } from "@/components/header";
import Design from "@/components/mydes";

const Proj5 = () => {

    return(
        <div>
            <Header />
            <div className="container mx-auto px-4 py-25">
                <Design
            name={"Women's Indian Wear"} 
            items={
                    [
                    "/proj5/p1.png",
                    "/proj5/p2.png",
                    "/proj5/p3.png"
                    ]
            }

                />
            </div>
        </div>
    )
}

export default Proj5;