import { Container} from "./styles"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {BsBoxArrowInUp, BsPlusLg} from 'react-icons/bs'
import { Tag } from "../../components/Tag"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../../service/api"
import TagInput from "../../components/TagInput"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useEffect } from "react"


export default function EditFood(){

    const { user } = useAuth()
    const { id } = useParams();
    const idPrato = id;

    const [plate, setPlate] = useState({})
    const [plateTags, setPlateTags] = useState([])

    const [plateName, setPlateName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [idCategory, setIdCategory] = useState("");
    const [idUser, setIdUser] = useState(1);
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");


    const [imageFoodFile, setImageFoodFile] = useState(null)

    const navigate = useNavigate();

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("")
    }

    function handleRemoveTag(e, tag){
        e.preventDefault()
    
        const index = tags.indexOf(tag)
        console.log(index)
        if (index > -1) { 
            tags.splice(index, 1);
            setTags([...tags]);
        }

        
    }

    async function handleSubmit(){

        console.log(plateName)

        if(!plateName || !price || !description || !idCategory || !tags){
            return toast.warn("Preencha todos os campos!")
        }

        if(!idPrato){
            return toast.warn("Nenhum prato selecionado para alterar")
        }
        
        
         await api.put(`/food/update/${idPrato}`, {plateName, price, description, idUser, idCategory, tags})
        .then((response) => {
            // depois que um prato é cadastrado, eu atualizo com a imagem do prato
            if(imageFoodFile){

                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", imageFoodFile)

                api.patch(`/food/avatar/${idPrato}`, fileUploadForm).then(() => {
                    
                })

            }
            toast.success("Prato alterado com sucesso!")        
            
            return navigate("/")     


    })
    .catch((error) => {
        console.log(error)
    })
    }

    function handleAddImage(event){
        const file = event.target.files[0]
        setImageFoodFile(file)   
    }

    function handleChangeCategory(e) {   
        setIdCategory(e.target.value);
    }

    async function getFoodDetails(){  

        const response = await api.get(`/food/detail/${idPrato}`)
        setPlate(response.data.lunch)    

        setPlateName(response.data.lunch.name)
        setPrice(response.data.lunch.value)
        setDescription(response.data.lunch.description)
        setIdCategory(response.data.lunch.id_category)

        setPlateTags(response.data.lunchTags)

        if (response.data.lunchTags) {
            const tagsArray = response.data.lunchTags.map(tag => tag.name);
            setTags(tagsArray);
        }
        
    
    }

    useEffect(() => {
    if(idPrato){
        getFoodDetails();
    }
    }, []);

    return(
        
        <Container>
            <form>
            <Header perfil={'admin'}/>
            <h1 id="name">
                <Link to="/">&lt; Voltar</Link> 
            </h1>
            <h1 id='add'>Alterar Prato</h1>
            <div id='main'>
                <div id="info">
                    <div id="first">

                         <label> Imagem do Prato 
                            <p id='input1'>
                                <BsBoxArrowInUp/>
                                <input type="file" id="foodImage" onChange={handleAddImage} />
                                Selecione Imagem
                            </p>
                        </label>    
                       
                        <Input 
                            id="plateName"
                            type="text"
                            placeholder='Ex: Salada Ceasar' 
                            label='Nome'
                            value={plateName}
                            onChange={e => setPlateName(e.target.value)}
                        />

                        <label id='input3'> Categoria
                            <select name="" onChange={handleChangeCategory}  value={idCategory}>
                                <option value="1">
                                    Refeiçao 
                                </option>
                                <option value="2">
                                    Sobremesa
                                </option>
                                <option value="3">
                                    Sucos
                                </option>
                            </select>
                        </label> 
                    </div>
                    <div id='second'>
                    <label> Ingredientes
                            <p id='input4'>
                                {tags.map((tag,index) => {
                                    return(
                                        <Tag key={index} title={tag} acao={(e) => handleRemoveTag(e,tag)}/>
                                    )
                                })}
                                <TagInput 
                                    icon={BsPlusLg} 
                                    title="Adicionar"
                                    onChange={e => setNewTag(e.target.value)}
                                    value={newTag}
                                    acao={handleAddTag}
                                />
                            </p>
                        </label>
                        <Input 
                            id="price"
                            type="text"
                            placeholder='R$ 00,00' 
                            label='Preço'                          
                            value={price}
                            onChange={e => setPrice(e.target.value)}    
                        />
                    </div>
                    <div id="third">
                        <label id='label1'htmlFor="">
                            Descrição
                    <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
                        id='text' 
                        rows="5" 
                        cols="10" 
                        maxlength="500"                       
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                        </label>
                    </div>
                    <Button id='Button2'title="Salvar" onClick={handleSubmit}/>
                    </div>
                </div>
                </form>
        </Container>
    )
}