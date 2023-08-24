import { Image, Button, Link } from "@nextui-org/react";
import heroImage from '../assets/space-art.png'

export default function Hero() {

    return (
        <div className="max-w-[76rem] mx-auto mt-20 lg:px-0 px-3">
            <div className="grid grid-cols-12 items-center">
                <div className="lg:col-span-7 col-span-12">
                    <div className="mb-5">
                        <h1 className="text-[65px] leading-[1.1] font-extrabold text-gray-300"> Beyond Earth: SpaceX&apos;s Astral Adventures </h1>
                        <p className="text-gray-300 my-2"> Step into a world beyond Earth&apos;s boundaries, where SpaceX&apos;s rockets and spacecraft pave the way for human progress in space. </p>
                    </div>

                    <Button as={Link} color="primary" href="#" className='px-9 rounded-[8px]' variant="shadow">
                        Join Us
                    </Button>
                </div>

                <div className="lg:col-span-5 col-span-12 lg:mt-0 mt-7">
                    <Image
                        alt="NextUI hero Image with delay"
                        src={heroImage}
                    />
                </div>
            </div>
        </div>
    )
}

