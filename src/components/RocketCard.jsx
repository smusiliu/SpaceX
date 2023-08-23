/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, Image, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

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


                <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
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
                                    <p className="text-sm">
                                        {rocket.description}
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
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

