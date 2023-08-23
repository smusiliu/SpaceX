/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, Image, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Link } from "@nextui-org/react";

const RocketCard = ({ rocket }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }

    return (
        <div className=''>
            <Card shadow="md" isPressable onPress={() => console.log("item pressed")} className='backdrop-blur-sm bg-gray-900/40'>
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="md"
                        radius="md"
                        width="100%"
                        alt={rocket.name}
                        className="w-full object-cover h-[170px]"
                        src={rocket.flickr_images[2] ? rocket.flickr_images[0] : 'https://live.staticflickr.com/65535/53137348705_f34bcc2620_m.jpg'}
                    />
                </CardBody>

                <CardFooter className="text-small text-gray-300">
                    <b>{rocket.name}</b>
                </CardFooter>


                <Button
                    variant="flat"
                    onPress={() => handleOpen()}
                    className="capitalize text-[0.78rem] text-gray-300 w-full mt-3 backdrop-blur-sm bg-gray-900/40"
                >
                    More Details
                </Button>


                <Modal backdrop='blur' isOpen={isOpen} onClose={onClose} className='bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-gray-200'>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">{rocket.name}</ModalHeader>
                                <ModalBody>
                                    <Image
                                        shadow="sm"
                                        radius="md"
                                        width="100%"
                                        alt={rocket.name}
                                        className="w-full object-cover h-[200px]"
                                        src={rocket.flickr_images[2] ? rocket.flickr_images[0] : 'https://live.staticflickr.com/65535/53137348705_f34bcc2620_m.jpg'}
                                    />
                                    <p className="text-[0.81rem] font-[300]">
                                        {rocket.description}
                                    </p>

                                    <div className="grid grid-cols-3 gap-4 items-center place-items-center my-3 text-gray-400">
                                        <div>
                                            <p className=" text-sm"> Height </p>
                                            <span className="text-xs"> {rocket.height.meters}m </span>
                                        </div>
                                        <div>
                                            <p className=" text-sm"> Diameter </p>
                                            <span className="text-xs"> {rocket.diameter.meters}m </span>
                                        </div>
                                        <div>
                                            <p className=" text-sm"> Mass </p>
                                            <span className="text-xs"> {rocket.mass.kg}kg </span>
                                        </div>
                                        <div>
                                            <p className=" text-sm"> Type </p>
                                            <span className="text-xs"> {rocket.type} </span>
                                        </div>
                                        <div>
                                            <p className=" text-sm"> Active </p>
                                            <span className="text-xs"> {rocket.height.active ? 'Yes' : 'No'} </span>
                                        </div>
                                        <div>
                                            <p className=" text-sm"> Country </p>
                                            <span className="text-xs"> {rocket.country} </span>
                                        </div>

                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        as={Link}
                                        color="primary"
                                        href={rocket.wikipedia}
                                        variant="solid"
                                        onPress={() => handleOpen()}
                                        className="capitalize text-[0.78rem] text-gray-300 w-full mt-3"
                                    >
                                        View More on Wikipedia
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>


            </Card>
        </div>
    )

}

export default RocketCard

