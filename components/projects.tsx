import Image from "next/image";

const projList = [
    {
        links: "/covers/p1.jpg",
        name: "Women's Resortwear",
        redirect: "/proj1"
    },
    {
        links: "/covers/p2.jpg",
        name: "Kidswear",
        redirect: "/proj2"  
    },
        {
        links: "/covers/p3.jpg",
        name: "Industry Internship Proj",
        redirect: "/proj3"  
    },
        {
        links: "/covers/p4.jpg",
        name: "Corset",
        redirect: "/proj4"  
    },
        {
        links: "/covers/p5.jpg",
        name: "Women's Indianwear",
        redirect: "/proj5"  
    },
        {
        links: "/covers/p6.jpg",
        name: "Raymond Menswear",
        redirect: "/proj6"  
    }
]

const Projects = () => {

    return(
        <div>
            <h1 className="text-center text-4xl">My Projects</h1>
            <div className="grid grid-cols-2">
                {
                    projList.map((item, idx) => (
                        <div className="aspect-video py-5" key={idx}>
                        <a href={item.redirect}>
                            <h1 className="text-center italic text-accent text-3xl">{item.name}</h1>
                            <div className="relative h-full w-full">
                                <Image src={item.links} alt="ProjPic" fill className="object-contain"/>
                            </div>
                        </a>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Projects;