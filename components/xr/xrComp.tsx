"use client"

import { Card as CardOne, Cards } from "@/types";
import { XR } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { xrStore } from "@/lib/utils";
import { Fullscreen } from "@react-three/uikit"
import { Defaults } from "@react-three/uikit-apfel";
import { useRouter} from "next/navigation";
import { Text, Container, Image } from "@react-three/uikit"
import {Html} from "@react-three/drei"
import { PortableText } from "next-sanity";
import { components } from "@/sanity/lib/components";
import { usePathname } from "next/navigation";
import { Card } from "./apfel/card";
import { Suspense } from "react";

export function XRArticles({articles}: {articles: Cards}){
    const pathname = usePathname()
    const router = useRouter()
    return(
        <Container flexDirection={"column"} gap={32} padding={28} width={600} height={600}>
            <Container alignSelf={"flex-end"} flexDirection={"row"} gap={16}>
                <Text fontSize={28} color={"#00D100"}>{pathname !== "/xr" ? "All": "Newest"}</Text>
                <Text fontSize={28} >Articles</Text>
            </Container>
            <Container flexDirection={"row"} width={600} gap={28} >
            {articles.map((a: CardOne, i:number) => (
                 <Card  flexDirection={"column"} width={250} height={400} gap={8} padding={14} key={i}>
                   <Text fontSize={22} >{a.heading}</Text>
                   <Text fontSize={12} >{a.description}</Text>
                   {/* eslint-disable-next-line jsx-a11y/alt-text */}
                   <Image src={a.photo}  width={180} height={180} alignSelf={"center"}/>
                    <Text fontSize={14}>{new Date(a.datum).toDateString().replaceAll(" ",", ")}</Text>
                        <Card onClick={() => router.push(`/xr/${a.slug}`)} backgroundColor={"black"} padding={14}>
                            <Text >Full arcticle</Text>
                        </Card>
                 </Card>
            ))}
            </Container>
            <Container flexDirection={"row"} width={600} justifyContent={"center"}>
            {pathname === "/xr" ? (
                <Card onClick={() => router.push(`/xr/articles}`)}  width={140} backgroundColor={"black"} padding={14}>
                <Text >More Articles</Text>
            </Card>
            ):(
                <Card onClick={() => router.push(`/xr`)} width={80} backgroundColor={"black"} padding={14}>
                <Text >Home</Text>
            </Card>
            )}
            </Container>
        </Container>
    )
}

export function XRContent({content}: {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}){
    return(
        <Card flexDirection={"column"} gap={32} padding={32} height={500} width={600} overflow={"scroll"}>
            <Html as="div" center>
                <PortableText value={content} components={components}/>
            </Html>
        </Card>
    )
}

export function XRFooter(){
const router = useRouter()
    return(
    <Card flexDirection={"row"} alignContent={"center"} padding={22} width={600}>
        <Container flexDirection={"row"}  width={600}  justifyContent={"space-between"}>
        <Container onClick={() => router.push("mailto:adam.hitzger@icloud.com")} flexDirection={"row"}>
        <Text fontSize={18}>adam.</Text><Text fontSize={18} color={"#00D100"}>hitzger</Text><Text fontSize={18}>@icloud.com</Text>
        </Container>
        <Container onClick={() => router.push("https://github.com/adamhitzger")} flexDirection={"row"}>
            <Text fontSize={18}>Git</Text><Text fontSize={18} color={"#00D100"}>hub</Text>
            </Container>
            <Container onClick={() => router.push("https://adamhitzger.com")} flexDirection={"row"}>
            <Text fontSize={18}>Dev</Text> <Text fontSize={18} color={"#00D100"}>page</Text>
            </Container>
        </Container>
    </Card>
    )
}

export function XRNavbar(){
const router = useRouter()
return(
    <Card flexDirection={"row"} padding={32} width={600} justifyContent={"space-between"}>
                    <Text fontSize={32} color={"#00D100"} onClick={() => router.push("/")}>2d</Text>
                    <Container flexDirection={"row"} onClick={() => router.push("/xr")}>
                    <Text fontSize={32} color={"#00D100"}>blog</Text>
                    <Text fontSize={32}>.adamhitzger</Text>
                    </Container>
                </Card>
)
}

export function XRHeader({heading, text, img, date}: {heading: string, text: string, img: string, date?: Date}){
    const space = heading.search(" ")
    const length = heading.length
    const headingOne = heading.slice(0, space);
    const headingTwo = heading.slice(space, length);
    return(
        <Card flexDirection={"column"} width={600} height={500} md={{flexDirection: "row"}} gap={32} padding={32}>
            <Container  gap={32} flexDirection={"column"} alignItems={"flex-start"}  justifyContent={"center"}>
                <Container flexDirection={"row"} gapColumn={20} justifyContent={"flex-end"}>
                    <Text fontSize={44} color={"#00D100"}>{headingOne} </Text>
                    <Text fontSize={44}>{headingTwo}</Text>
                </Container>
                <Text fontSize={18}>
                {text}
                </Text>
                {date && <Text>{new Date(date).toDateString().replaceAll(" ",", ")}</Text>}
            </Container>
            <Container flexDirection={"column"} alignItems={"center"}  justifyContent={"center"}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
                src={img}
                width={284}
                height={284}
              
            />
            </Container>
        </Card>
    )
}

export default function Experience({children}: {children: React.ReactNode}){
    return(
        <Suspense>
        <Canvas
            gl={{localClippingEnabled: true}}
        >
            <XR store={xrStore}>
            <ambientLight intensity={0.2} />
            <directionalLight intensity={1} position={[-5, 5, 10]} />
                <Defaults>  
                <Fullscreen
                distanceToCamera={3}
                    flexDirection={"column"}
                    scrollbarColor="black"
                    backgroundColor={"white"}
                    alignItems={"center"}
                    paddingY={32}
                    gap={18}
                    >
                    <XRNavbar/>
                    {children}
                    <XRFooter/>
                </Fullscreen>
               </Defaults> 
          </XR>
          </Canvas>
          </Suspense>
    )
}