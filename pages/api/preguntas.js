
import pregunta from './preguntas.json'

export default function (req, res) {
    // console.log(pregunta);
    res.json({data:pregunta})
}