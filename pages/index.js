import { useEffect, useState } from 'react';
import { CardBody, Card, Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';


export default function App() {

    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState(false);

    useEffect(() => {
        document.querySelector('body').style.height = innerHeight + "px";
        window.addEventListener('resize', () => {
            document.querySelector('body').style.height = innerHeight + "px";
        })
    }, []);

    const extractJSON = async () => {
        const ftch = await fetch('/api/preguntas')
        const response = await ftch.json();
        const numberData = response.data.length - 1;
        const numberRandom = Math.floor(Math.random() * numberData);
        setQuestion(response.data[numberRandom]);
    }

    const handleClick = () => {
        let ans = !answer;
        setAnswer(ans)
    }
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Card className='w-2/3 left-72 top-unit-60 h-2/3'>
                <CardBody>
                    <div className=' text-center font-bold text-8xl'>
                        Preguntas Aleatorias
                        <Divider />
                        <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-unit-7xl h-unit-3xl text-5xl left-unit-3xl" onPress={async () => { extractJSON(); onOpen(); }}>Comenzar</Button>
                    </div>
                </CardBody>
            </Card>
            <Modal isOpen={isOpen} onOpenChange={() => { onOpenChange(); (answer) ? handleClick() : "" }}>
                <ModalContent className='w-unit-9xl'>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Pregunta Random</ModalHeader>
                            <ModalBody>
                                <div>
                                    <div className='text-3xl'>{question.pregunta}</div>
                                    <br />
                                    <br />
                                    <div>
                                        {
                                            (!answer) ?
                                                <>
                                                    <div>
                                                        <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 left-unit-4xl" onClick={() => handleClick()}>Mostrar Respuesta</Button>
                                                    </div>
                                                    <br />
                                                    <div className='text-center'>
                                                        <input type="password" className="bg-transparent border-0 text-center" value="No seas curioso amig@" disabled />
                                                    </div>
                                                    <br />
                                                </>
                                                :
                                                <>
                                                    <div>
                                                        <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 left-unit-4xl" onClick={() => handleClick()}>Ocultar Respuesta</Button>
                                                    </div>
                                                    <br />
                                                    <div className='text-2xl text-center'>
                                                        {question.respuesta}
                                                    </div>
                                                    <br />
                                                </>
                                        }
                                    </div>
                                </div>
                            </ModalBody>
                            {/* <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter> */}
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )

}