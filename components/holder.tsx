import Design from "./mydes";


const Holder = () => {

    return(
        <div className="flex flex-col gap-15">
            <h1 className="text-4xl text-center underline">My Projects</h1>
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

            <Design
            name={"Raymond Menswear Jacket"} 
            items={
                    [
                    "/proj2/p1.png",
                    "/proj2/p2.png",
                    "/proj2/p3.png",
                    "/proj2/p4.png",

                    ]
            }

            />

            <Design
            name={"Women's Resort Wear"} 
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
                        <Design
            name={"Kidswear"} 
            items={
                    [
                    "/proj3/p1.png",
                    "/proj3/p2.png",
                    "/proj3/p3.png",
                    "/proj3/p4.png",
                    "/proj3/p5.png",
                    "/proj3/p6.png",

                    ]
            }

            />
        </div>
    )
}

export default Holder;