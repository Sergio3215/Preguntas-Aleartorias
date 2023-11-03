import { useEffect, useState } from 'react';
import { CardBody, Card, Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';


export default function App() {
    const handleClick = () => {
        let ans = !answer;
        setAnswer(ans)
    }
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <Card className={`w-2/3 lg:left-72 md:left-40 top-unit-60 h-2/3 sm:left-36 lmb:left-28 mb:left-12 ${blur}`}>
                <CardBody>
                    <div className='text-center font-bold lg:text-2xl sm:text-2xl lmb:text-small mb:text-tiny'>
                        Preguntas Aleatorias - Privacidad
                        <Divider />
                            Los datos presentados en la pagina son solo datos agregados desde el API, esto 
                            significa, que el usuario esta protegido y la web no usara futuros datos en analisis
                            o ventas de datos. Asi mismo tambien queremos reflejar, que solo tenemos acceso a las preguntas 
                            y respuestas, generadas con una IA.
                    </div>
                </CardBody>
            </Card>
        </div>
    );

}