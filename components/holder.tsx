import Design from "./mydes";


const Holder = () => {

    return(
        <div>
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
        </div>
    )
}

export default Holder;