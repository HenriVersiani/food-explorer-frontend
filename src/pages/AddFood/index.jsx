import { Container} from "./styles"
import Header from "../../components/Header"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {BsBoxArrowInUp, BsPlusLg} from 'react-icons/bs'
import { Tag } from "../../components/Tag"
import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../../service/api"
import TagInput from "../../components/TagInput"
import { Link, useNavigate } from "react-router-dom"


export default function AddFood(){

const [plateName, setPlateName] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [idCategory, setIdCategory] = useState("");
const [idUser] = useState(1);
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

    if(!plateName || !price || !description || !idCategory || !tags){
        return toast.warn("Preencha todos os campos!")
    }
    
   await api.post("/food", {plateName, price, description, idUser, idCategory, tags})
   .then((response) => {
        // depois que um prato é cadastrado, eu atualizo com a imagem do prato
        if(imageFoodFile){

            const fileUploadForm = new FormData()
            fileUploadForm.append("avatar", imageFoodFile)

            api.patch(`/food/avatar/${response.data.lastID}`, fileUploadForm).then(() => {
                
            })

        }
        toast.success("Prato cadastrado com sucesso!")        
         
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

    return(
        
        <Container>
            <form>
            <Header perfil={'admin'}/>
            <h1 id="name">
                <Link to="/">&lt; Voltar</Link> 
            </h1>
            <h1 id='add'>Adicionar Prato</h1>
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
                            onChange={e => setPlateName(e.target.value)}
                        />

                        <label id='input3'> Categoria
                            <select name="" onChange={handleChangeCategory}>
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
                        maxLength="500"
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